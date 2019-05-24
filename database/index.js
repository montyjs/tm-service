/* eslint-disable no-console */
const { Pool } = require('pg');

const pool = new Pool({
  user: 'tm',
  host: 'localhost',
  database: 'reireviews',
  password: 'reiFEC',
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
