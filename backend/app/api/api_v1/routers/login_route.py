from datetime import timedelta
from typing import Any

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.api import deps
from app.core import security
from app.core.config import settings
from app.crud.user_crud import user_crud
from app.schemas.token_schemas import Token
from app.schemas.user_schemas import UserLogin

router = APIRouter()


@router.post('/login/access_token', response_model=Token)
def login_access_token(*, db: Session = Depends(deps.get_db), form_data: UserLogin) -> Any:
    user = user_crud.authenticate(db, username=form_data.username, password=form_data.password)
    if not user:
        raise HTTPException(status_code=400, detail='Incorrect name or password')
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    return {
        'access_token': security.create_access_token(user.id, expires_delta=access_token_expires),
        'token_type': 'bearer'
    }
