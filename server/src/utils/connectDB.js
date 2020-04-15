const { IP_SERVER, USER_DB, PASS_DB, NAME_DB, PORT_DB } = require("../../config");

const { Pool } = require("pg");

const pool = new Pool({
  host: IP_SERVER,
  user: USER_DB,
  password: PASS_DB,
  database: NAME_DB,
  port: PORT_DB
});

module.exports = pool;
