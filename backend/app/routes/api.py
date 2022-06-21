from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

from crud import services
from schemas import schemas
from db.database import SessionLocal

from google_news_scraper import GoogleNewsArticle, GoogleNewsScraper
from journals_scraper import ResearchArticle, JournalsScraper
from twitter_scraper import tweetId, TwitterScraper

query = "Carbon Net Zero"
google_scaper = GoogleNewsScraper(query)
research_scaper = JournalsScraper()
twitter_scaper = TwitterScraper()

db = SessionLocal()

router = APIRouter()

@router.post(path="/news", response_model=schemas.Article, tags=["News"])
async def create_article(
    article: schemas.ArticleCreate, db: Session = Depends(services.get_db)
):
    return await services.create_article(db=db, article=article)


@router.get(path="/news/fetch", tags=["Fetch"])  # , response_model = List[GoogleNewsArticle]
async def fetch_articles(
    # articles = fetched_articles,
    db: Session = Depends(services.get_db),
):
    services.create_database()
    return await services.fetch_articles(
        db=db, articles=google_scaper.scrape_articles()
    )  #


@router.get(path="/tweets/fetch", tags=["Fetch"])  # , response_model = List[GoogleNewsArticle]
async def fetch_tweets(
    # articles = fetched_articles,
    db: Session = Depends(services.get_db),
):
    services.create_database()
    return await services.fetch_tweetIds(
        db=db, articles=twitter_scaper.scrape_twitter()
    )


@router.get(path="/research/fetch", tags=["Fetch"])
async def fetch_research_articles(
    # articles = fetched_articles,
    db: Session = Depends(services.get_db),
):
    services.create_database()
    return await services.fetch_research_articles(
        db=db, articles=research_scaper.scrape_scopus()
    )


@router.get(path="/news", response_model=List[schemas.Article], tags=["News"])
async def get_articles(db: Session = Depends(services.get_db)):
    return await services.get_articles(db=db)


@router.get(path="/research", response_model=List[schemas.ResearchArticle], tags=["Research"])
async def get_research_articles(db: Session = Depends(services.get_db)):
    return await services.get_research_articles(db=db)


@router.get(path="/tweets", response_model=List[schemas.TweetId], tags=["Tweets"])
async def get_TweetIds(db: Session = Depends(services.get_db)):
    return await services.get_tweetIds(db=db)


@router.delete(path="/news", tags=["Delete"])  # , status_code=204 produces an error?
async def delete_all_articles(db: Session = Depends(services.get_db)):
    await services.delete_all_articles(db)
    return {"message", "Successfully Deleted"}


@router.delete(path="/research", tags=["Delete"])  # , status_code=204
async def delete_all_research_articles(db: Session = Depends(services.get_db)):
    await services.delete_all_research_articles(db)
    return {"message", "Successfully Deleted"}


@router.delete(path="/tweets", tags=["Delete"])  # , status_code=204
async def delete_all_TweetIds(db: Session = Depends(services.get_db),):
    await services.delete_all_tweets(db)
    return {"message", "Successfully Deleted"}
