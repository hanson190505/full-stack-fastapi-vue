from app.db.base_class import Base
from sqlalchemy.orm import relationship
from sqlalchemy import Column, String, JSON, Integer, ForeignKey


class DepartmentModel(Base):
    name = Column(String(64), index=True)
    parent_department = Column(Integer, ForeignKey('departmentmodel.id'), nullable=True)
    sub_department = relationship('DepartmentModel', lazy='joined', join_depth=3)
    # users = relationship('UserModel', back_populates='department')


class UserModel(Base):
    name = Column(String(128), index=True)
    hashed_password = Column(String(1024))
    mail = Column(String(64), nullable=True, index=True)
    phone = Column(String(32), nullable=True, index=True)
    detail = Column(JSON, nullable=True)

    # department = relationship('DepartmentModel', back_populates='users')


class RouteModel(Base):
    name = Column(String(64))
    path = Column(String(64))
    pid = Column(Integer, ForeignKey('routemodel.id'), nullable=True)
    title = Column(String(64), nullable=True)
    detail = Column(JSON, nullable=True)
    children = relationship('RouteModel')
