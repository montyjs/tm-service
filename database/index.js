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
    if (err) {
      return console.error(err.message)
    }
    console.log('results received, sending to callback now')
    return cb(result.rows)
  })
}

/******************** EXPORTS *******************/

module.exports = {
  pool,
  getAll
}
