from fastapi import FastAPI
from fastapi import status, HTTPException, Depends, Request
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

from typing import List, Dict, Union

from sqlalchemy import orm

from google_news_scraper import GoogleNewsArticle, GoogleNewsScraper
from journals_scraper import ResearchArticle, JournalsScraper
from twitter_scraper import tweetId, TwitterScraper


import models
from crud import services
from schemas import schemas

from db.database import SessionLocal, Base, engine

# run migrations on Startup
Base.metadata.create_all(bind=engine)

app = FastAPI()


origins = [
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

db = SessionLocal()


@app.post("/news", response_model=schemas.Article)
async def create_article(
    article: schemas.ArticleCreate, db: orm.Session = Depends(services.get_db)
):
    return await services.create_article(db=db, article=article)


@app.get("/news/fetch")  # , response_model = List[GoogleNewsArticle]
async def fetch_articles(
    # articles = fetched_articles,
    db: orm.Session = Depends(services.get_db),
):
    services.create_database()
    return await services.fetch_articles(
        db=db, articles=google_scaper.scrape_articles()
    )  #


@app.get("/tweets/fetch")  # , response_model = List[GoogleNewsArticle]
async def fetch_tweets(
    # articles = fetched_articles,
    db: orm.Session = Depends(services.get_db),
):
    services.create_database()
    return await services.fetch_tweetIds(
        db=db, articles=twitter_scaper.scrape_twitter()
    )


@app.get("/research/fetch")
async def fetch_research_articles(
    # articles = fetched_articles,
    db: orm.Session = Depends(services.get_db),
):
    services.create_database()
    return await services.fetch_research_articles(
        db=db, articles=research_scaper.scrape_scopus()
    )


@app.get("/news", response_model=List[schemas.Article])
async def get_articles(db: orm.Session = Depends(services.get_db)):
    return await services.get_articles(db=db)


@app.get("/research", response_model=List[schemas.ResearchArticle])
async def get_research_articles(db: orm.Session = Depends(services.get_db)):
    return await services.get_research_articles(db=db)


@app.get("/tweets", response_model=List[schemas.TweetId])
async def get_TweetIds(db: orm.Session = Depends(services.get_db)):
    return await services.get_tweetIds(db=db)


@app.delete("/news")  # , status_code=204 produces an error?
async def delete_all_articles(db: orm.Session = Depends(services.get_db)):
    await services.delete_all_articles(db)
    return {"message", "Successfully Deleted"}


@app.delete("/research")  # , status_code=204
async def delete_all_research_articles(db: orm.Session = Depends(services.get_db)):
    await services.delete_all_research_articles(db)
    return {"message", "Successfully Deleted"}


@app.delete("/tweets")  # , status_code=204
async def delete_all_TweetIds(db: orm.Session = Depends(services.get_db)):
    await services.delete_all_tweets(db)
    return {"message", "Successfully Deleted"}
