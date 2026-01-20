

FROM node:25.2.1

WORKDIR /wuerflii-backend

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "prod" ]
