FROM node:18

WORKDIR /usr/src/app


COPY . .

RUN npm install

EXPOSE 5500

CMD [ "node", "index.js" ]