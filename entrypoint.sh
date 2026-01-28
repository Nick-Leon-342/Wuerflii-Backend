#!/bin/sh
set -e


echo ""
echo ""
echo "--------------------------------------------------"
echo ""

echo "Starting database migrations/push..."
export DATABASE_URL="${DB_TYPE}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}"
echo $DATABASE_URL

npx prisma db push --accept-data-loss --url "$DATABASE_URL"

echo 
echo

echo "Starting the application..."

exec "$@"
