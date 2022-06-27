import os

DB_USER = os.environ.get("DB_USER")     #if os.environ.get("DB_USER") else "user"
DB_PASSWORD = os.environ.get("DB_PASSWORD")     #if os.environ.get("DB_PASSWORD") else "password"
DB_HOST = "localhost"     #if os.environ.get("DB_HOST") else "db"
DB_PORT = os.environ.get("DB_PORT")     #if os.environ.get("DB_PORT") else "5432"
DB_NAME = os.environ.get("DB_NAME")     #if os.environ.get("DB_NAME") else "primer_db"


SQLALCHEMY_DATABASE_URL = (
    f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
)
