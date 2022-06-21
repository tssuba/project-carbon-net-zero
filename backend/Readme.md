# Backend Information:

## Packages used

- Fastapi
- Pydantic
- Uvicorn
- sqlalchemy
- pandas
- beautifulsoup

## Database information:

- Database: PostgreSQL
- Username: user
- Password: password
- Database Name: primer_db
- Port: 5432

## Api documentation:

- url: http://localhost:8000/docs

## Setting Things up.

- Create a new Virtual environment:
  - virtualenv
- Activate the Virtual environment:
  - source env/bin/activate
- Install the dependencies:
  - pip install -r requirements.txt
- Start the FastAPI Backend Server:
  - uvicorn main:app --reload
