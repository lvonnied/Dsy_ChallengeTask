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


## Usage

```
docker-compose up -d reverse-proxy
docker-compose up -d web
docker-compose up -d --scale web=2
```

Access webapplication through localhost:3000