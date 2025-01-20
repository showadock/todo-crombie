FROM node:20 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .


EXPOSE 3000

CMD ["npm", "run", "dev"]