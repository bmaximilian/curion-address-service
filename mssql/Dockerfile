FROM mcr.microsoft.com/mssql/server:2017-CU12-ubuntu

ENV ACCEPT_EULA Y

COPY ./entrypoint.sh /entrypoint.sh
COPY ./init_db.sh /init_db.sh
COPY ./create_database.sql /create_database.sql

CMD /bin/bash /entrypoint.sh
