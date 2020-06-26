# Address Service
Welcome to the Address Service!<br/>
I've created this project during a workshop job, where I wanted to showcase the basic CRUD features of [Laravel](https://laravel.com/docs/7.x)
in combination with a modern [Angular](https://v9.angular.io/docs) frontend. It should show the easy creation of CRUD backends with Laravel
and guide my students through the data-flow of a scalable application.

## Used tools and libraries
### Docker
[Docker](https://docs.docker.com/) is used to provide a platform independent virtualization for the development environment which is easy to spin up.
Each docker container has its own responsibility. All the services we need for development can be started by running a single `docker-compose up` command.<br/>*No additional tasks needed.*

There is the **address-api** which is responsible for executing the PHP code in a php-fpm environment and provides the Laravel REST API to manage addresses.
This container is constructed in a way where it could be deployed after it is built.

On the other side is the **address-frontend** which is responsible for building (and in development also for serving) the Angular frontend.
In production environment, this container could be used in a multistage build to build the static assets
which will then be served from a static directory by a webserver.

**Nginx** is used as webserver because it is fast and easy to configure.

The address-api uses a **MS SQL** database. This was a requirement by the customer, and the hardest part to integrate in the docker environment.
Compared to other SQL databases like MySQL or PostgreSQL, MS SQL is not very docker friendly and needs some work around it (custom dockerfile and entrypoint) to get going with a dynamic secret management.

___
All the secrets are configured in the [docker-compose.yml](https://github.com/bmaximilian/curion-address-service/blob/development/docker-compose.yml) and distributed to the containers by Docker-Compose using environment variables.


### PHP / Laravel
Using PHP as backend programming language was a requirement by the customer because some developers in the company had already some knowledge in that language.

[Laravel](https://laravel.com/docs/7.x) is used because it is a clean object oriented PHP framework with a very good documentation and a nice learning curve for junior developers.
It provides a nice start in the framework based object oriented programming with PHP.<br/>
The backend uses only the tools provided by the Laravel framework and [tymon/jwt-auth](https://github.com/tymondesigns/jwt-auth/wiki) to verify the JWT token for secured API routes.

### TypeScript / Angular
Using [Angular](https://v9.angular.io/docs) to create the frontend was the key of the workshop.

The frontend is actually created in a more monolithic way and is designed to serve the whole application, not only the address part.<br/>
Angular Material is used to jump-start the components and be able to dive deeper into the logic and data flows during the limited time of the workshop.

Speaking of [data flows, the data and state management](https://ngrx.io/guide/store) is constructed using the ["single source of truth"](https://en.wikipedia.org/wiki/Single_source_of_truth) practice with the [NgRx](https://ngrx.io/docs) library with an eye on modularity.

### Continuous Integration / Static Analysis / GitHub Actions
GitHub Actions is used as code analysis and test pipeline for the TypeScript and the PHP code.

It integrates very nice with the pull requests and branch protection of github to require passing status checks before merging.
GitHub Actions is also able to [highlight the specific code part](https://github.com/bmaximilian/curion-address-service/pull/25/commits/c5efc48f747c7560b541ad86dd2f775a89115795#diff-747556773256d315e307884032f7b390) of a failing analysis or test using the problem matchers.

This ensures that our code is passing the static analysis using a strict EsLint configuration for TypeScript and PhpStan and PHPMD for PHP before being merged.<br/>
Tests are also checked and it is not possible to merge code with failing tests. If tests are failing, the test is also highlighted in the pull request (regardless if it was touched in the branch or not).

To run the tests, a database is created in the CI environment on every run of the workflow.<br/>
MySQL is used here as database because we don't have any SQL dialect specific query in the backend for now and the MySQL database is spinning up faster than MS SQL.
Reducing the needed time of the action seemed more important for the current state of the project than using exactly the same database.<br/>
Using MS SQL is also possible but it would require to push the (space consuming) MS SQL container to the docker registry of GitHub pages. This would reduce the free packages space of the GitHub account as the project was private. 

### Project Management / GitHub
[GitHub Projects](https://github.com/bmaximilian/curion-address-service/projects) as project management tool was also kind of new to me because i am more used to work in an Atlassian driven project management environment with tools like Jira and Confluence.<br/>
GitHub Projects is a more easy and low-level tool than Jira and allows us to keep everything at one place.<br/>
We structured our tasks (features, improvements, bugs) in issues on GitHub, which can then be visualized for tracking on one or more Kanban boards using the projects feature of GitHub. 

## Installation

### Requirements
- Docker v19
- Docker Compose v1.25

### Process
Add the following line to your `/etc/hosts`: `127.0.0.1 address-service.test`.
This line tells the frontend where the api is running.<br/>
This is needed because it might be the case that docker won't run directly on the localhost of the developer's machine (e.g. when using dinghy or docker-toolbox).
Using the entry in the hosts file makes it possible to map the IP of `address-service.test` also to a external machine, like a virtual machine without having to change the files of the project. 

Run `docker-compose up`. This will start all needed containers,
install the dependencies and create the database. Once the hosts-entry is set, `docker-compose up` is the only command to run to start the development environment.
When the installation is complete, the app will be available at [http://localhost:4200](http://localhost:4200).

To stop all the containers and shut down their processes, run `docker-compose down`
