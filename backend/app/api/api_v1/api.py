from app.api.api_v1.routers import product_router, category_router, login_route, user_route
from fastapi import APIRouter

api_router = APIRouter()
api_router.include_router(login_route.router, tags=['login'])
api_router.include_router(user_route.router, prefix='/user', tags=['user'])
api_router.include_router(product_router.router, prefix='/product', tags=['product'])
api_router.include_router(category_router.router, prefix='/category', tags=['category'])