from typing import Any

from app.api import deps
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.schemas.product_schemas import ProductCreate
from app.crud.product_crud import product_crud
from app.models.product_models import ProductModel

router = APIRouter()


@router.post('/')
def create_product(*, db: Session = Depends(deps.get_db), obj_in: ProductCreate) -> Any:
    product_obj = product_crud.create(db, obj_in=obj_in)
    return product_obj


@router.get('/{id}')
def get_product(*, db: Session = Depends(deps.get_db), id: int) -> Any:
    product = product_crud.get(db, id=id)
    print(product.category.name)
    return product