/* eslint-disable no-console */
require('dotenv').config();
const { Pool } = require('pg');

const pool = process.env.NODE_ENV === 'production'
  ? new Pool({
    connectionString: process.env.DB_URI,
  })
  : new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: 'reireviews',
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });

const getAll = (cb) => {
  console.log('request at database, retrieving data');
  const queryString = 'SELECT * FROM reviews';
  pool.query(queryString, (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('results received, sending to callback now');
    return cb(result.rows);
  });
};

module.exports.pool = pool;
module.exports.getAll = getAll;
