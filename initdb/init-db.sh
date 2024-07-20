set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
   
    CREATE DATABASE tailor;
    CREATE ROLE company;
    CREATE ROLE anonymous;

EOSQL


pg_restore -U $POSTGRES_USER -d tailor /docker-entrypoint-initdb.d/t_backup.dump