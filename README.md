
# Wuerflii - Backend

___


Use `npm run backend` to start the dev-server.

Don't forget to set a _.env_-file. For some explanation or a template look at _.env.example_.
You could add a docker compose file like this:

```
services:
  backend:
    container_name: wuerflii-backend
    restart: unless-stopped
    build:
      context: .
    ports:
      - 10001:10001
    env_file:
      - .env
```
