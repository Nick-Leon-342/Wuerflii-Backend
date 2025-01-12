

FROM node:20.8.0

WORKDIR /kniffel-backend

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "backend" ]
