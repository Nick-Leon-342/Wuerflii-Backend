

# ____________________ Build ____________________
FROM node:25.2.1-slim AS builder

WORKDIR /wuerflii-backend

COPY package*.json ./
COPY prisma ./prisma/ 

RUN npm install

COPY . .

ARG DB_USERNAME=dummy
ARG DB_PASSWORD=dummy
ARG DB_DATABASE=dummy
ARG DB_HOST=localhost
ARG DB_PORT=5432
ARG DB_TYPE=postgresql
# ARG DATABASE_URL=''

RUN npx prisma generate
RUN npm run build

# ____________________ Production ____________________
FROM node:25.2.1-slim AS runner

RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

WORKDIR /wuerflii-backend

COPY --from=builder /wuerflii-backend/node_modules ./node_modules
COPY --from=builder /wuerflii-backend/dist ./dist
COPY --from=builder /wuerflii-backend/package*.json ./
COPY --from=builder /wuerflii-backend/prisma ./prisma
COPY --from=builder /wuerflii-backend/generated ./dist/generated

COPY entrypoint.sh ./
RUN chmod +x entrypoint.sh
ENTRYPOINT [ "./entrypoint.sh" ]

CMD [ "npm", "run", "prod" ]
