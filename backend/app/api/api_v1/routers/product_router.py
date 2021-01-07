from typing import Any

from sqlalchemy import Integer, func, String

from app.api import deps
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.schemas.product_schemas import ProductCreate
from app.crud.product_crud import product_crud
from app.models.product_models import ProductModel

router = APIRouter()


@router.get('/')
def get_products(*, db: Session = Depends(deps.get_db), skip: int = 0, limit: int = 10) -> Any:
    ke = 'panton'
    ke2 = 'weight'
    # JSON字段查询
    subquery = db.query(ProductModel.id.label('productmodel_id'),
                        func.json_extract_path(ProductModel.detail, 'color').label('color')).subquery()
    product_1 = db.query(ProductModel, subquery.c.color).filter(subquery.c.color.op('->>')(ke) == '102c',
                                                                ProductModel.id == subquery.c.productmodel_id)
    products = product_crud.get_multi(db, skip=skip, limit=limit)
    print(db.query(ProductModel).count())
    for i in product_1.offset(skip).limit(limit).all():
        print(i[0])
    print(product_1.count())
    return products


@router.post('/')
def create_product(*, db: Session = Depends(deps.get_db), obj_in: ProductCreate) -> Any:
    product_obj = product_crud.create(db, obj_in=obj_in)
    # count = 500
    # for i in range(1000):
    #     count += 1
    #     product_crud.create(db,
    #                         obj_in={
    #                             "name": "usb" + str(count),
    #                             "detail": {
    #                                 "uid": "100023344284837",
    #                                 "category": {
    #                                     "category_1": "Electronic",
    #                                     "category_2": "Flash drive"
    #                                 },
    #                                 "color": {
    #                                     "hash": "234.323.34.234",
    #                                     "web": "#FFF666",
    #                                     "panton": "246c"
    #                                 },
    #                                 "size": {
    #                                     "unit": "mm",
    #                                     "value": "15*15*20"
    #                                 },
    #                                 "weight": {
    #                                     "unit": "g",
    #                                     "value": 20
    #                                 },
    #                                 "capacity": {
    #                                     "unit": "gb",
    #                                     "value": [16, 32, 64]
    #                                 }
    #                             },
    #                             "category_id": 5
    #                         }
    #                         )
    return product_obj


@router.get('/{product_id}')
def get_product(*, db: Session = Depends(deps.get_db), product_id: int) -> Any:
    product = product_crud.get(db, id=product_id)
    # 查询一次category才会在返回数据中显示具体的category信息
    category = product.category
    # print(db.query(ProductModel.detail.op('->>')('color')).filter(ProductModel.detail.op('->>')('color').cast(Integer) == 1).all())
    # query = 123
    # query = db.query(func.json_extract_path_text(ProductModel.detail['weight'], 'value')).all()
    # print(product.detail['color']['hash'])
    ke = 'panton'
    ke2 = 'weight'
    subquery = db.query(ProductModel.id.label('productmodel_id'),
                        func.json_extract_path(ProductModel.detail, 'color').label('color')).subquery()
    # query = db.query(ProductModel.id, subquery.c.color).filter(subquery.c.color.op('->>')(ke) == '102c',
    #                                                            ProductModel.id == subquery.c.productmodel_id)
    # p_id = query.first()[0]
    # p = db.query(ProductModel).filter(ProductModel.id == p_id).first()
    product_1 = db.query(ProductModel, subquery.c.color).filter(subquery.c.color.op('->>')(ke) == '102c',
                                                                ProductModel.id == subquery.c.productmodel_id).all()
    print(product_1)
    return product
