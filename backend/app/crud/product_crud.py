from typing import Any
from app.crud.base_crud import CRUDBase
from app.models.product_models import ProductModel, CategoryModel, GoodProperty, GoodStandard
from sqlalchemy.orm import Session


product_crud = CRUDBase(ProductModel)
category_crud = CRUDBase(CategoryModel)
good_standard_crud = CRUDBase(GoodStandard)
good_property_crud = CRUDBase(GoodProperty)