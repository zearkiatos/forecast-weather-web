FROM node:18-alpine

RUN echo -e "http://nl.alpinelinux.org/alpine/v3.17/main\nhttp://nl.alpinelinux.org/alpine/v3.17/community" > /etc/apk/repositories
RUN apk update && apk add python3 make g++
RUN apk add --update nodejs npm

WORKDIR /app

COPY . ./
RUN npm install -g npm
RUN npm install --force
RUN npm install react-scripts -g --silent
RUN npx -p @storybook/cli sb init
RUN npm install nodemon -g --silent
RUN npm install concurrently -g --silent

EXPOSE 3001

ENTRYPOINT ["sh", "./docker/entrypoint.sh"]