from typing import Dict

from pydantic import BaseModel


class ProductCreate(BaseModel):
    name: str
    detail: Dict
    category_id: int
