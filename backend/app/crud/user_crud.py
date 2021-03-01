from typing import Optional

from sqlalchemy.orm import Session

from app.crud.base_crud import CRUDBase
from app.models.user_model import UserModel
from app.schemas.user_schemas import CreateUser, UpdateUser, RecordUser
from app.core.security import get_password_hash, verify_password
from fastapi.encoders import jsonable_encoder


class CRUDUser(CRUDBase[UserModel, CreateUser, UpdateUser]):
    def get_user_by_username(self, db: Session, *, username: str) -> UserModel:
        return db.query(self.model).filter(self.model.name == username).first()

    def create(self, db: Session, *, obj_in: CreateUser) -> UserModel:
        db_obj = UserModel(
            name=obj_in.name,
            hashed_password=get_password_hash(obj_in.password),
            mail=obj_in.mail,
            phone=obj_in.phone,
            detail=obj_in.detail
        )
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def authenticate(self, db: Session, *, username: str, password: str) -> Optional[UserModel]:
        user = self.get_user_by_username(db, username=username)
        if not user:
            return None
        if not verify_password(password, user.hashed_password):
            return None
        return user


user_crud = CRUDUser(UserModel)
