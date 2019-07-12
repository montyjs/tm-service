/* eslint-disable no-console */
require('dotenv').config()

const { Pool } = require('pg')

/******************* DATABASE CONNECTION *********************/

const pool = process.env.NODE_ENV === 'production'
  ? new Pool({
    connectionString: process.env.DB_URI
  })
  : new Pool({
    user: process.env.LOCAL_USER,
    host: process.env.LOCAL_HOST,
    database: 'reireviews',
    password: process.env.LOCAL_PASSWORD,
    port: process.env.LOCAL_PORT,
  })

/******************* ACCESSING DATA ***********************/

const getAll = (cb) => {
  const queryString = 'SELECT * FROM reviews'
  pool.query(queryString, (err, result) => {
    err ? console.error(err.message) : cb(result.rows)
  })
}

const getOne = (id, cb) => {
  const queryString = `SELECT * FROM reviews WHERE id=${id}`
  pool.query(queryString, (err, result) => {
    err ? console.error(err.message) : cb(result.rows);
  })
}

/******************** EXPORTS *******************/

module.exports = {
  pool,
  getAll,
  getOne
}
