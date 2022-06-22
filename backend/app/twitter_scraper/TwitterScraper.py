import requests
import pprint
import os
import json
import tweepy
from typing import Dict, List
from dotenv import load_dotenv

load_dotenv()

tweetId = Dict[str, str]

# # To set your environment variables in your terminal run the following line:
# # export 'BEARER_TOKEN'='<your_bearer_token>'
# bearer_token = os.environ.get("BEARER_TOKEN")

# # your Twitter API key and API secret


# client = tweepy.Client(bearer_token=bearer_token)

# # Replace with your own search query
# query = 'carbon net zero -is:retweet'
# tweetIds = []

# for tweet in tweepy.Paginator(client.search_recent_tweets, query=query,
# tweet_fields=['context_annotations', 'created_at'], max_results=10).flatten(
# limit=10):
#     tweetIds.append({"tweetId" : tweet.id})

# print(tweetIds)

class TwitterScraper:

    def __init__(self):
        self.BEARER_TOKEN = os.environ.get("BEARER_TOKEN")
        self.pretty_printer = pprint.PrettyPrinter()


    def scrape_twitter(self) -> List[tweetId]:

        client = tweepy.Client(bearer_token=self.BEARER_TOKEN)
        query = 'carbon net zero -is:retweet'
        tweetIds = []

        for tweet in tweepy.Paginator(client.search_recent_tweets, query=query,
        tweet_fields=['context_annotations', 'created_at'], max_results=10).flatten(
        limit=10):
            tweetIds.append({"tweetId" : tweet.id})

        return tweetIds



        
        # id = self.urlScopus
        # articles: List[ResearchArticle] = []
        # headersid={'Accept': 'application/json', 'field':'description'}
        # responseid = requests.get(id,headers=headersid)
        # sid=responseid.content.decode("utf-8")
        # contid=json.loads(sid) 
        # contid
        # box=pd.DataFrame(contid['search-results']['entry'])[['dc:title','prism:doi', 'prism:coverDate','prism:publicationName']]
        # box = box.rename(index = str, columns = {"dc:title" : "title", "prism:coverDate" : "published_date", "prism:doi" : "doi", "prism:publicationName": "publisher"})
        # articles = box.to_dict('records')
        # return articles
    

    def print_articles(self, articles: List[tweetId]):
        """
        Method pretty prints scraped articles.

        Args:
            articles (List[GoogleNewsArticle]): Scraped Articles.
        """

        self.pretty_printer.pprint(articles)


if __name__ == "__main__":

    twitter_scraper = TwitterScraper()

    tweetIds = twitter_scraper.scrape_twitter()

    twitter_scraper.print_articles(tweetIds)
