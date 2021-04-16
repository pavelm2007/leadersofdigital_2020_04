#!/bin/bash
set -e

psql -U postgres -c "CREATE USER $DB_USER PASSWORD '$DB_PWD';"
psql -U postgres -c "CREATE DATABASE $DB_NAME OWNER $DB_USER;"
psql -U postgres -c "GRANT ALL privileges ON DATABASE $DB_NAME TO $DB_USER;"
