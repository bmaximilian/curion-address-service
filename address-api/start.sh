#!/usr/bin/env bash


rm -rf storage/logs/*
touch storage/logs/laravel.log

php-fpm & tail -f storage/logs/laravel.log
