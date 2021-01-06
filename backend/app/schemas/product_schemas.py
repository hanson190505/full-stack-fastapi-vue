from typing import Dict, Optional

from pydantic import BaseModel


class ProductCreate(BaseModel):
    name: str
    detail: Dict
    category_id: int


class CategoryCreate(BaseModel):
    name: str
    parent_category: int = None