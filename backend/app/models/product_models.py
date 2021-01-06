from sqlalchemy.orm import relationship

from app.db.base_class import Base
from sqlalchemy import Column, String, Integer, ForeignKey, JSON


class CategoryModel(Base):
    name = Column(String(64), unique=True, index=True)
    parent_category = Column(Integer, ForeignKey('categorymodel.id'), nullable=True)
    sub_categories = relationship('CategoryModel', lazy='joined', join_depth=3)
    products = relationship('ProductModel', back_populates='category')
    standards = relationship('GoodStandard', back_populates='category')


class GoodStandard(Base):
    name = Column(String(64), unique=True)
    category_id = Column(Integer, ForeignKey('categorymodel.id'), nullable=True)
    category = relationship('CategoryModel', back_populates='standards')
    properties = relationship('GoodProperty', back_populates='standard')


class GoodProperty(Base):
    property = Column(String(128))
    standard_id = Column(Integer, ForeignKey('goodstandard.id'))

    standard = relationship('GoodStandard', back_populates='properties')


class ProductModel(Base):
    name = Column(String(128), nullable=False)
    detail = Column(JSON)
    category_id = Column(Integer, ForeignKey('categorymodel.id'), nullable=True)
    category = relationship('CategoryModel', back_populates='products')