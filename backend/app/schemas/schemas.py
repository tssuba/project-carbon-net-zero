import pydantic as pydantic
from typing import Optional

class ArticleBase(pydantic.BaseModel):
    published_date:Optional[str] = None
    link:Optional[str] = None
    publisher:Optional[str] = None
    title:Optional[str] = None


class ArticleCreate(ArticleBase):
    pass


class Article(ArticleBase):
    id: int

    class Config:
        orm_mode = True


class ResearchArticleBase(pydantic.BaseModel):
    published_date:Optional[str] = None
    doi:Optional[str] = None
    publisher:Optional[str] = None
    title:Optional[str] = None


class ResearchArticleCreate(ResearchArticleBase):
    pass


class ResearchArticle(ResearchArticleBase):
    id: int

    class Config:
        orm_mode = True


class TweetIdBase(pydantic.BaseModel):
    tweetId:Optional[str] = None


class TweetIdCreate(TweetIdBase):
    pass


class TweetId(TweetIdBase):
    id: int

    class Config:
        orm_mode = True