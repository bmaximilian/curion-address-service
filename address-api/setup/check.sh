#!/usr/bin/env bash

cd "$(dirname "$0")"
cd ..

vendor/bin/phpmd app,config,database,routes,tests ansi phpmd.xml
vendor/bin/phpstan analyse app config routes tests
vendor/bin/phpunit
