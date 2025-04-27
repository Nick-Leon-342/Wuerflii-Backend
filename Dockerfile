

FROM node:23.11.0-slim

WORKDIR /wuerflii-backend

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "backend" ]
