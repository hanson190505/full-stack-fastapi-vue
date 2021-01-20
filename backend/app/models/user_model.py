from app.db.base_class import Base
from sqlalchemy import Column, String, JSON


class UserModel(Base):
    name = Column(String(128), index=True)
    hashed_password = Column(String(1024))
    mail = Column(String(64), nullable=True, index=True)
    phone = Column(String(32), nullable=True, index=True)
    detail = Column(JSON, nullable=True)
