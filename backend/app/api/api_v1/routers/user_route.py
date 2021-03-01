from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api import deps
from app.crud.user_crud import user_crud
from app.models.user_model import UserModel
from app.schemas.user_schemas import RecordUser, CreateUser

router = APIRouter()


@router.post('/', response_model=RecordUser)
def register_user(*, db: Session = Depends(deps.get_db), obj_in: CreateUser) -> UserModel:
    user = user_crud.create(db, obj_in=obj_in)
    return user


@router.get('/', response_model=List[RecordUser])
def get_users(db: Session = Depends(deps.get_db), skip: int = 0, limit: int = 100,
              current_user: UserModel = Depends(deps.get_current_user)):
    users = user_crud.get_multi(db, skip=skip, limit=limit)
    return users


@router.get('/{user_id}', response_model=RecordUser)
def get_user(*, db: Session = Depends(deps.get_db), user_id: int,
             current_user: UserModel = Depends(deps.get_current_user)):
    user = user_crud.get(db, id=user_id)
    return user
