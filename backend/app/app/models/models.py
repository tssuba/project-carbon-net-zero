from sqlalchemy.sql.expression import null
from db.database import Base
from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func


class Article(Base):
    __tablename__ = "articles"
    id = Column(Integer, primary_key=True, index=True)
    link = Column(String, index=True, default="")
    published_date = Column(String, index=True, default="")
    publisher = Column(String, index=True, default="")
    title = Column(String, index=True, default="")


class ResearchArticle(Base):
    __tablename__ = "research"
    id = Column(Integer, primary_key=True, index=True)
    doi = Column(String, index=True, default="")
    published_date = Column(String, index=True, default="")
    publisher = Column(String, index=True, default="")
    title = Column(String, index=True, default="")


class TweetId(Base):
    __tablename__ = "tweetIds"
    id = Column(Integer, primary_key=True, index=True)
    tweetId = Column(String, index=True, default="")
