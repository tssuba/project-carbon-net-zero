from typing import List, Dict, Union

from google_news_scraper import GoogleNewsArticle, GoogleNewsScraper
from journals_scraper import ResearchArticle, JournalsScraper
from twitter_scraper import tweetId, TwitterScraper

from models.models import Article, ResearchArticle, TweetId

import datetime as _dt
from sqlalchemy import orm

from db import database
from models import models
from schemas import schemas


def create_database():
    return database.Base.metadata.create_all(bind=database.engine)


def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()


async def create_article(db: orm.Session, article: schemas.ArticleCreate):
    article = models.Article(**article.dict())
    db.add(article)
    db.commit()
    db.refresh(article)
    return schemas.Article.from_orm(article)


async def fetch_articles(db: orm.Session, articles: List[GoogleNewsArticle]):

    obj_list = []
    data_list = articles
    for record in data_list:
        data_obj = models.Article(**record)
        obj_list.append(data_obj)
    db.add_all(obj_list)
    db.commit()
    news = db.query(models.Article)
    return list(map(schemas.Article.from_orm, news))


async def fetch_research_articles(db: orm.Session, articles: List[ResearchArticle]):

    obj_list = []
    data_list = articles
    for record in data_list:
        data_obj = models.ResearchArticle(**record)
        obj_list.append(data_obj)
    db.add_all(obj_list)
    db.commit()
    research = db.query(models.ResearchArticle)
    return list(map(schemas.ResearchArticle.from_orm, research))


async def fetch_tweetIds(db: orm.Session, articles: List[tweetId]):

    obj_list = []
    data_list = articles
    for record in data_list:
        data_obj = models.TweetId(**record)
        obj_list.append(data_obj)
    db.add_all(obj_list)
    db.commit()
    research = db.query(models.TweetId)
    return list(map(schemas.TweetId.from_orm, research))


async def get_articles(db: orm.Session):
    # query = Article.select().order_by(Article.c.id.desc()).limit(25)
    articles = db.query(models.Article).order_by(Article.id.desc()).limit(25)

    return list(map(schemas.Article.from_orm, articles))


async def get_research_articles(db: orm.Session):
    # query = Article.select().order_by(Article.c.id.desc()).limit(25)
    articles = (
        db.query(models.ResearchArticle).order_by(ResearchArticle.id.desc()).limit(25)
    )

    return list(map(schemas.ResearchArticle.from_orm, articles))


async def get_tweetIds(db: orm.Session):
    # query = Article.select().order_by(Article.c.id.desc()).limit(25)
    articles = db.query(models.TweetId).order_by(TweetId.id.desc()).limit(10)

    return list(map(schemas.TweetId.from_orm, articles))


async def delete_all_articles(db: orm.Session):
    articles = db.query(models.Article)

    articles.delete()
    db.commit()


async def delete_all_tweets(db: orm.Session):
    articles = db.query(models.TweetId)

    articles.delete()
    db.commit()


async def delete_all_research_articles(db: orm.Session):
    articles = db.query(models.ResearchArticle)

    articles.delete()
    db.commit()
