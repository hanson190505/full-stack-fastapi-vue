from pydantic import BaseModel

class createUser(BaseModel):
    name: str
    hashed_password = Column(String(1024))
    mail = Column(String(64), nullable=True, index=True)
    phone = Column(String(32), nullable=True, index=True)
    detail = Column(JSON, nullable=True)