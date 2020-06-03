#!/usr/bin/env bash

cd "$(dirname "$0")"
cd ..

php artisan migrate --force
php artisan db:seed --force
