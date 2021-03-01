from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from app.api.api_v1.api import api_router
from app.core.config import settings

app = FastAPI()

origins = [
    "http://localhost:3100",
    "http://localhost:8080",
    "http://localhost:3000",
    "http://192.168.0.102:8080/",
    "http://127.0.0.1:3100"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(api_router, prefix=settings.API_V1_STR)