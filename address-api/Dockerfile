FROM php:7.2.26-fpm

ENV ACCEPT_EULA=Y
ARG APP_ENV=production
ENV APP_ENV $APP_ENV

RUN apt-get update -y \
    && apt-get install -y --no-install-recommends \
        curl \
        libz-dev \
        libzip-dev \
        libssl-dev \
        libicu-dev \
        libxml2-dev \
        apt-transport-https \
        gnupg2 \
    && rm -rf /var/lib/apt/lists/* \
    && pecl install xdebug \
    && docker-php-ext-install zip pcntl intl mbstring pdo pdo_mysql soap \
    && docker-php-ext-configure intl \
    && pecl install -o -f redis \
    && docker-php-ext-enable pcntl xdebug redis \
    && rm -rf /tmp/pear \
    && mkdir /home/www-data \
    && chown -R www-data:www-data /home/www-data \
    && usermod -u 1000 -d /home/www-data www-data

# MSSQL Drivers
RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - \
    && curl https://packages.microsoft.com/config/debian/10/prod.list > /etc/apt/sources.list.d/mssql-release.list \
    && apt-get update -y \
    && apt-get install -y --no-install-recommends unixodbc-dev locales msodbcsql17 libgssapi-krb5-2 \
    && pecl install sqlsrv pdo_sqlsrv \
    && docker-php-ext-enable pcntl sqlsrv pdo_sqlsrv \
    && echo "en_US.UTF-8 UTF-8" > /etc/locale.gen \
    && locale-gen

# Config files
COPY ./setup/config/laravel.ini ./setup/config/xdebug.ini /usr/local/etc/php/conf.d/
COPY ./setup/config/laravel.pool.conf /usr/local/etc/php-fpm.d/laravel.pool.conf

# install composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install project sources
COPY --chown=www-data:www-data ./ /var/www/address-service.curion.ch

USER www-data

WORKDIR /var/www/address-service.curion.ch

RUN composer install

CMD ["./start.sh"]

EXPOSE 9000
