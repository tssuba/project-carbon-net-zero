FROM --platform=amd64 python:3.9.0-slim-buster


WORKDIR /app

RUN apt-get update \
    && apt-get install gcc -y \
    && apt-get clean \
    && pip install --no-cache-dir --upgrade pip

COPY ./requirements.txt /requirements.txt

RUN pip install -r /requirements.txt \
    && rm -rf /root/.cache/pip

COPY . /app/