const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "customer",
  password: "root",
  port: 5433,
});

module.exports = pool;
