from typing import Generator

from jose import jwt
from sqlalchemy.orm import Session

from app.core import security
from app.core.config import settings
from app.crud.user_crud import user_crud
from app.db.session import SessionLocal
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from pydantic import ValidationError
from app.models.user_model import UserModel
from app.schemas.token_schemas import TokenPayload

reusable_oauth2 = OAuth2PasswordBearer(tokenUrl='{}/login/access_token'.format(settings.API_V1_STR))


def get_db() -> Generator:
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


def get_current_user(db: Session = Depends(get_db), token: str = Depends(reusable_oauth2)) -> UserModel:
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[security.ALGORITHM])
        token_data = TokenPayload(**payload)
    except (jwt.JWTError, ValidationError):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail='Could not validate credentials')
    user = user_crud.get(db, id=token_data.sub)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='User not found')
    return user
