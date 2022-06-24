import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.api import router
from crud import services
from crud.tasks import repeat_every
from db.database import SessionLocal

from google_news_scraper import GoogleNewsArticle, GoogleNewsScraper
from journals_scraper import ResearchArticle, JournalsScraper
from twitter_scraper import tweetId, TwitterScraper

services.create_database()

app = FastAPI(
    title="Carbon Net Zero",
)
TIME_INTERVAL = 24 * 60 * 60 # 

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
    "http://0.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# add the router to the app
app.include_router(router)

query = "Carbon Net Zero"
google_scaper = GoogleNewsScraper(query)
research_scaper = JournalsScraper()
twitter_scaper = TwitterScraper()

db = SessionLocal()


@app.on_event("startup")
@repeat_every(seconds=TIME_INTERVAL)  # once every day and on application start up.
async def fetch_articles_task():
    services.create_database()
    await services.fetch_articles(db=db, articles=google_scaper.scrape_articles())
    return {"message", "Successfully Fetched"}


@app.on_event("startup")
@repeat_every(seconds=TIME_INTERVAL)  # once every day and on application start up.
async def fetch_tweets():
    services.create_database()
    await services.fetch_tweetIds(db=db, articles=twitter_scaper.scrape_twitter())
    return {"message", "Successfully Fetched"}


@app.on_event("startup")
@repeat_every(seconds=TIME_INTERVAL)  # once every day and on application start up.
async def fetch_research_articles():
    services.create_database()
    await services.fetch_research_articles(
        db=db, articles=research_scaper.scrape_scopus()
    )
    return {"message", "Successfully Fetched"}
