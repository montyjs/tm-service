require('dotenv').config();
const { Pool } = require('pg');

const RDSpool = new Pool({
  connectionString: process.env.DB_URI,
});

module.exports.RDSpool = RDSpool;
