from typing import Optional, Dict, Any

from pydantic import BaseModel


class CreateUser(BaseModel):
    name: str
    password: str
    mail: Optional[str]
    phone: Optional[str]
    detail: Optional[Dict]


class UpdateUser(BaseModel):
    id: int


class RecordUser(BaseModel):
    id: int
    name: str
    mail: str
    phone: str
    detail: Dict

    class Config:
        orm_mode = True


class UserLogin(BaseModel):
    username: str
    password: str
