require('dotenv').config();
const { Pool } = require('pg');

const importDataToPostgres = async (csvDataContainer, query, tableName) => {
  const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.PORT,
  });

  await pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack);
    }
    try {
      csvDataContainer.forEach((row) => {
        client.query(query, row, (err2, res) => {
          if (err2) {
            console.log(err2.stack);
          } else {
            console.log(`inserted ${res.rowCount} row: ${row}`);
          }
        });
      });
    } finally {
      console.log(`${tableName} data is imported!`);
      release();
    }
  });
};

module.exports = {
  importDataToPostgres,
};
