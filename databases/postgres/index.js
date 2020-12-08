require('dotenv').config();
const { Pool } = require('pg');

const db = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: 5432,
});

db.connect()
  .then(() => {
    console.log(`Connected to the postgres ${process.env.DB_NAME} database!`);
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = {
  db,
};
