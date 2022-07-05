const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
const fs = require('fs');
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
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