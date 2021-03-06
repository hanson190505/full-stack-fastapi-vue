from datetime import datetime

from sqlalchemy import Column, Integer, DateTime, Boolean
from sqlalchemy.ext.declarative import as_declarative, declared_attr


@as_declarative()
class Base:
    id = Column(Integer, primary_key=True, nullable=True, index=True)
    create_time = Column(DateTime, default=datetime.now, onupdate=datetime.now)
    update_time = Column(DateTime, default=datetime.now, onupdate=datetime.now)
    is_delete = Column(Boolean, default=False)

    @declared_attr
    def __tablename__(cls) -> str:
        return cls.__name__.lower()