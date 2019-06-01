require('dotenv').config();
const { Pool } = require('pg');

const RDSpool = new Pool({
  connectionString: 'postgresql://rei:batman123@reviewdb.c6cy0b3pfl6c.us-west-2.rds.amazonaws.com:5432/reviews',
});

module.exports.RDSpool = RDSpool;
