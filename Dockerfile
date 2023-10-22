FROM node:20.8.0

WORKDIR /kniffel-backendend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 10000

CMD [ "npm", "run", "backend" ]