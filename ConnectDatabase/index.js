import * as pg from "pg";
import dotenv from "dotenv";
// Access .ENV variables
dotenv.config()

const { Pool } = pg.default;

const poolPostgre = new Pool({
  host: process.env.HOST_DATABASE_POSTGRES,
  port: process.env.PORT_DATABASE_POSTGRES,
  database: process.env.NAME_DATABASE_POSTGRES,
  user: process.env.USERNAME_DATABASE_POSTGRES,
  password: process.env.PASSWORD_DATABASE_POSTGRES,
  // Remove SSL if not needed
  ssl:
    process.env.DATABASE_USE_SSL === "true"
      ? {
          rejectUnauthorized: true,
          ca: process.env.DATABASE_CA_CERT,
        }
      : false,
});

async function query(queryStatement) {
  return new Promise((resolve, reject) => {
    poolPostgre.connect(async (err, client, done) => {
      if (err) {
        console.error("Error acquiring client", err.stack);
        reject(err);
        return;
      }
      console.log("Connected to Database");
      try {
        resolve(await client.query(queryStatement));
        done();
      } catch (err) {
        console.error("Error executing query", err.stack);
        done();
        reject(err);
      }
    });
  });
}

export default {
  query,
};
