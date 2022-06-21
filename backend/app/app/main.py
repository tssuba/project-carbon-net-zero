from fastapi import FastAPI as _fastapi
from fastapi import status, HTTPException, Depends, Request
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel
from typing import List, Dict, Union


from google_news_scraper import GoogleNewsArticle, GoogleNewsScraper
from journals_scraper import ResearchArticle, JournalsScraper
from twitter_scraper import tweetId, TwitterScraper

import sqlalchemy.orm as _orm

import models
import crud.services as _services
import schemas.schemas as _schemas

from db.database import SessionLocal, Base, engine

Base.metadata.create_all(bind=engine)

app = _fastapi()


origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

query = "Carbon Net Zero"

google_scaper = GoogleNewsScraper(query)

research_scaper = JournalsScraper()

twitter_scaper = TwitterScraper()


class Item(BaseModel):
    id: int
    name: str

    class Config:
        orm_mode = True


db = SessionLocal()


@app.post("/news", response_model=_schemas.Article)
async def create_article(
    article: _schemas.ArticleCreate, db: _orm.Session = Depends(_services.get_db)
):
    return await _services.create_article(db=db, article=article)


@app.get("/news/fetch")  # , response_model = List[GoogleNewsArticle]
async def fetch_articles(
    # articles = fetched_articles,
    db: _orm.Session = Depends(_services.get_db),
):
    _services.create_database()
    return await _services.fetch_articles(
        db=db, articles=google_scaper.scrape_articles()
    )  #


@app.get("/tweets/fetch")  # , response_model = List[GoogleNewsArticle]
async def fetch_tweets(
    # articles = fetched_articles,
    db: _orm.Session = Depends(_services.get_db),
):
    _services.create_database()
    return await _services.fetch_tweetIds(
        db=db, articles=twitter_scaper.scrape_twitter()
    )


@app.get("/research/fetch")
async def fetch_research_articles(
    # articles = fetched_articles,
    db: _orm.Session = Depends(_services.get_db),
):
    _services.create_database()
    return await _services.fetch_research_articles(
        db=db, articles=research_scaper.scrape_scopus()
    )


@app.get("/news", response_model=List[_schemas.Article])
async def get_articles(db: _orm.Session = Depends(_services.get_db)):
    return await _services.get_articles(db=db)


@app.get("/research", response_model=List[_schemas.ResearchArticle])
async def get_research_articles(db: _orm.Session = Depends(_services.get_db)):
    return await _services.get_research_articles(db=db)


@app.get("/tweets", response_model=List[_schemas.TweetId])
async def get_TweetIds(db: _orm.Session = Depends(_services.get_db)):
    return await _services.get_tweetIds(db=db)


@app.delete("/news")  # , status_code=204 produces an error?
async def delete_all_articles(db: _orm.Session = Depends(_services.get_db)):
    await _services.delete_all_articles(db)
    return {"message", "Successfully Deleted"}


@app.delete("/research")  # , status_code=204
async def delete_all_research_articles(db: _orm.Session = Depends(_services.get_db)):
    await _services.delete_all_research_articles(db)
    return {"message", "Successfully Deleted"}


@app.delete("/tweets")  # , status_code=204
async def delete_all_TweetIds(db: _orm.Session = Depends(_services.get_db)):
    await _services.delete_all_tweets(db)
    return {"message", "Successfully Deleted"}


@app.get("/items", response_model=List[Item], status_code=200)
def get_all_items():
    items = db.query(models.Item).all()

    return items


@app.get("/item/{item_id}", response_model=Item, status_code=status.HTTP_200_OK)
def get_an_item(item_id: int):
    item = db.query(models.Item).filter(models.Item.id == item_id).first()
    return item


@app.post("/items", response_model=Item, status_code=status.HTTP_201_CREATED)
def create_an_item(item: Item):
    db_item = db.query(models.Item).filter(models.Item.name == item.name).first()

    if db_item is not None:
        raise HTTPException(status_code=400, detail="Item already exists")

    new_item = models.Item(name=item.name)

    db.add(new_item)
    db.commit()

    return new_item


@app.put("/item/{item_id}", response_model=Item, status_code=status.HTTP_200_OK)
def update_an_item(item_id: int, item: Item):
    item_to_update = db.query(models.Item).filter(models.Item.id == item_id).first()
    item_to_update.name = item.name

    db.commit()

    return item_to_update


@app.delete("/item/{item_id}")
def delete_item(item_id: int):
    item_to_delete = db.query(models.Item).filter(models.Item.id == item_id).first()

    if item_to_delete is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Resource Not Found"
        )

    db.delete(item_to_delete)
    db.commit()
