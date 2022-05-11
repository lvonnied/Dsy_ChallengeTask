FROM node
WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

EXPOSE 3001

COPY . .
