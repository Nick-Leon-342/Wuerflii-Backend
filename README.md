
# Kniffel - Backend
___


Use `npm run backend` to start the dev-server.
You could add a docker-compose file like this:

```
version: '3.8'

services:
  kniffel-backend:
    container_name: kniffel-backend
    restart: unless-stopped
    build:
      context: .
    ports:
      - 10001:10001
    environment:
      - PORT=10001

      - ACCESS_TOKEN_SECRET=
      - REFRESH_TOKEN_SECRET=
      - REFRESH_TOKEN_SECURE=
      - REFRESH_TOKEN_SAMESITE=
      - REFRESH_TOKEN_MAX_AGE_IN_MINUTES=
      - ACCESS_TOKEN_MAX_AGE_IN_MINUTES=

      - DB_USERNAME=
      - DB_PASSWORD=
      - DB_DATABASE=
      - DB_HOST=
      - DB_PORT=
      - DB_TYPE=
      - DB_CONSOLE_LOGGING=

      - MAX_PLAYERS=
      - MAX_COLUMNS=
      - MAX_LENGTH_PLAYER_NAME=

	  - MAX_FINALSCORES_LIMIT=
```
