#!/usr/bin/env bash

cd "$(dirname "$0")"

rm -rf storage/logs/*
touch storage/logs/laravel.log

./setup/wait-for-it.sh -t 600 $DB_HOST:$DB_PORT --strict -- setup/setup.sh

php-fpm & tail -f storage/logs/laravel.log
