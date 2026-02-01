#!/bin/sh
set -e


echo ""
echo ""
echo "--------------------------------------------------"
echo ""

echo "Starting database migrations/push..."
export DATABASE_URL="${DB_TYPE}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}"
echo $DATABASE_URL

echo "Waiting for database to be ready..."
until npx prisma db push --accept-data-loss --url "$DATABASE_URL"; do
	echo "Database is unavailable - sleeping"
	sleep 2
done

echo 
echo

echo "Starting the application..."

exec "$@"
