# Challenge Task FS 2022

This semester's challenge task (CT) is the design and implementation of a simple distributed system (of your choice), with at least one service with a websocket, and where a service instance can fail. The system needs to have the following components:

1. Simple Frontend (e.g., HTML, Vue, React, Svelte)
2. Loadbalancer(e.g., traefik, nginx, HAproxy, Caddy)
3. Two instances of a service (your choice), and during the challenge task presentation, one instance will be shut off.
4. One storage backend

## Requirements

All requirements below must be met in order to pass this lecture.
1. Load balancing with scalable service
2. Failover of a service instance
3. A websocket needs to send data from the service to the frontend. You need to implement a websocket endpoint in your service (using e.g., Blazor that integrates websockets does not fulfill this requirement)
4. Dockerized
5. Persistant storage (storage does not need to be scalable, but you can build it scalable if you want)
6. Use latest stable releases of chosen libraries and frameworks

- The solution may use existing libraries and code, but those must open software software
- You are allowed to use any language, framework, and platforms. However, the supervisors are familiar with those: Java, Golang, JavaScript, Linux.

## Deliverables

Hand-in 1: 14.04.2022, 23:59 (CET) - initial version of your project.

Final hand-in: 12.05.2022, 23:59 (CET) - well documented infrastructure, presentation (slides) of the application, also showing the architecture and design decisions via email to thomas.ost-at-bocek.ch or via a repository invite. The code and configuration should be easy to read and/or well documented, the presentation (slides or text) should show the architecture, components, and design decisions. During the weeks 13.05./20.05., you will present and demo your solutions via MS Teams.

## Architecture Overview
![Alt text](/images/architecture.png)

React
- Listens to port 3000
- Port 3000 is exposed

Traefik
- Listens to all traffic on port 80 (http)

Nodejs
- Listening on port 80 for Docker container
- Containers are only reachable through Traefik

Postgres
- Listens to default port 5432

## Layer Architecture
![Alt text](/images/layer-architecture.png)

## Frontend/Presentation layer
Technology stack:
- HTML
- CSS
- React.js

To write our frontend service we decided to use React. React is the most popular frontend framework and therefore provides a lot of great documentation. React was another new technology for us. We had previous experiences with javascript and npm, but we have never used React before this assignment.

Our presentation Layer consists of the user interface component. The user can interact with the application over a web browser. This layer communicates over the backend layer to retrieve data and notify for changes.



## Loadbalancer
As a loadbalancer for our application we decided to use traefik. The reason behind this decision is the excellent documentation and of course it is used in our course. Traefik is open source and designed to be used with virtualisation technologies.

## Backend/Backend layer
Technology stack:
- Node.js
- TypeScript
- JavaScript
- Express
- Docker

We had some experience with most of the technologies, but never really in detail.

The backend layer is the foundation of the application and defines services and logical implementations for our webapplication. Every service works through the backend layer and the backend layer communicates to the presentation layer if any changes have occurred.


## Usage
### Run locally
1. Make sure Postgres13 is installed and runs on port 5432
2. Run java application (backend)
3. Start frontend with ```npm start```
4. Open your browser at http://localhost:3000

or
```
sudo docker-compose up --build
```

