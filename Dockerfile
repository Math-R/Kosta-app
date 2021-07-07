FROM node:14
WORKDIR app


COPY . .

RUN npm i

RUN npm run generate

EXPOSE 80
