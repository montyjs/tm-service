/* eslint-disable no-console */
require('dotenv').config();
const { Pool } = require('pg');


const pool = new Pool({
  user: process.env.DB_USER,
  host: 'localhost',
  database: 'reireviews',
  password: process.env.DB_PASSWORD,
  port: '5432',
});

const getAll = (cb) => {
  const queryString = 'SELECT * FROM reviews';
  pool.query(queryString, (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    return cb(result.rows);
  });
};

module.exports.pool = pool;
module.exports.getAll = getAll;
