# Carbon-Net-Zero

## Docker Instructions:

- Command:
  - docker-compose up -d
- Command to see container logs:
  - docker-compose logs -f <container_name or container ID> eg: backend, frontend, proxy
- Command to see container info:
  - docker-compose ps
  - docker ps
- Command to Stop the Application:
  - docker-compose down
- Command to re-build the containers:
  - docker-compose build
- Command to build only one container:
  - docker-compose build <container_name> eg: backend, frontend

#

## To access the application:

- backend:
  - url: http://api.localhost
  - For api docs
    - url: http://api.localhost/docs
- frontend:
  - url: http://localhost
