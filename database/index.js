/* eslint-disable no-console */
const { Pool } = require('pg');

const pool = new Pool({
  user: 'tm',
  host: 'localhost',
  database: 'reireviews',
  password: 'reiFEC',
  port: '5432',
});

pool.query('SELECT * FROM reviews', (err, result) => {
  if (err) {
    return console.error(err.message);
  }
  return console.log(result);
});

module.exports = pool;
