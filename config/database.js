const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
const fs = require('fs');
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      // pool: { min: 0, max: 10, createTimeoutMillis: 8000, acquireTimeoutMillis: 8000, idleTimeoutMillis: 8000, reapIntervalMillis: 1000, createRetryIntervalMillis: 100, },
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      schema: "public",
      ssl: {
        rejectUnauthorized: false,
        ca: fs.readFileSync("./happyclouddb.crt").toString(),
        // key  : fs.readFileSync("client-key.pem").toString(),
        // cert : fs.readFileSync("happycloud.crt").toString(),
      },
    },
    debug: false,
  },
});