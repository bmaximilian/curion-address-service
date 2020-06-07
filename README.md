# curion-address-service
Address microservice for curion.ch

## Installation

### Requirements
- Docker v19
- Docker Compose v1.25

### Process
Add the following line to your `/etc/hosts`: `127.0.0.1 address-service.test`.
This line tells the frontend where the api is running.

Run `docker-compose up`. This will start all needed containers,
install the dependencies and create the database.
When the installation is complete, the app will be available at [http://localhost:4200](http://localhost:4200).

