
# Kniffel - Backend
___


Use `npm run backend` to start the dev-server.

Don't forget to set .env file. For some explanation or a template look at .env.sample.
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
    env_file:
      - .env
```
