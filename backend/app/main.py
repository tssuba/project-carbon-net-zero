import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.openapi.utils import get_openapi

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

app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("ALLOWED_CORS_ORIGIN", "*"),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# add the router to the app
app.include_router(router)


def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema
    openapi_schema = get_openapi(
        title="IITM | Carbon Net Zero",
        version="0.0.1",
        description="IITM | Carbon Net Zero's OpenAPI schema",
        routes=app.routes,
    )
    app.openapi_schema = openapi_schema
    return app.openapi_schema


app.openapi = custom_openapi

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
