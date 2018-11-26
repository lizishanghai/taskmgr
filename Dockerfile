# # stage 1
# FROM node:latest as node
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build --prod

# # stage 2
# FROM nginx:alpine
# COPY --from=node /app/dist/frontend /usr/share/nginx/html


FROM node:8.12.0

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g @angular/cli@6.2.6

COPY . /usr/src/app

CMD ng serve --host 0.0.0.0 --port 4200
