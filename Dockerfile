

FROM node:23.5.0

WORKDIR /kniffel-backend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run backend
