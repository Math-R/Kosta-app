FROM node:14 AS builder

WORKDIR /builder

COPY . .

RUN rm -rf .env && cp .env.docker .env

RUN ls

RUN npm i

RUN npm run generate

FROM jwilder/nginx-proxy

RUN mkdir /var/front

RUN mkdir /var/logs

WORKDIR /var/front

COPY --from=builder /builder/dist/ .

COPY ./default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

