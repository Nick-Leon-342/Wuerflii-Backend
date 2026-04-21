

# ____________________ Build ____________________
FROM node:25-alpine3.22 AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/ 

RUN npm ci

COPY . .

ARG POSTGRES_USER=dummy
ARG POSTGRES_PASSWORD=dummy
ARG POSTGRES_DB=dummy
ARG POSTGRES_HOST=localhost
ARG POSTGRES_PORT=5432
ARG DB_TYPE=postgresql

RUN npx prisma generate
RUN npm run build
RUN npm prune --omit=dev && npm cache clean --force


# ____________________ Production ____________________
FROM node:25-alpine3.22 AS runner

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/generated ./dist/generated
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/dist ./dist

COPY entrypoint.sh ./
RUN chmod +x entrypoint.sh

ENTRYPOINT [ "sh", "./entrypoint.sh" ]
CMD [ "npm", "run", "prod" ]
