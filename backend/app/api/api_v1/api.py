from app.api.api_v1.routers import product_router, category_router
from fastapi import APIRouter

api_router = APIRouter()
api_router.include_router(product_router.router, prefix='/product', tags=['product'])
api_router.include_router(category_router.router, prefix='/category', tags=['category'])