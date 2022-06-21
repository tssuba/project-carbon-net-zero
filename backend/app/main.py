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


app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("ALLOWED_CORS_ORIGIN", "*"),
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
@repeat_every(seconds=500)  # every 30 minutes
async def fetch_articles_task():
    services.create_database()
    await services.fetch_articles(db=db, articles=google_scaper.scrape_articles())
    return {"message", "Successfully Fetched"}


@app.on_event("startup")
@repeat_every(seconds=500)  # every 30 minutes
async def fetch_tweets():
    services.create_database()
    await services.fetch_tweetIds(db=db, articles=twitter_scaper.scrape_twitter())
    return {"message", "Successfully Fetched"}


@app.on_event("startup")
@repeat_every(seconds=500)  # every 30 minutes
async def fetch_research_articles():
    services.create_database()
    await services.fetch_research_articles(
        db=db, articles=research_scaper.scrape_scopus()
    )
    return {"message", "Successfully Fetched"}
