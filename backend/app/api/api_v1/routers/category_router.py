from typing import Any

from app.api import deps
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.schemas.product_schemas import CategoryCreate
from app.crud.product_crud import category_crud

router = APIRouter()


@router.post('/')
def create_category(*, db: Session = Depends(deps.get_db), obj_in: CategoryCreate) -> Any:
    category_obj = category_crud.create(db, obj_in=obj_in)
    return category_obj