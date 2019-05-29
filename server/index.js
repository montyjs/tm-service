/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const { getAll } = require('../database/index.js');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '/../public/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/reviews', (req, res) => {
  getAll((result) => {
    if (!result) {
      res.sendStatus(400);
    }
    res.send(result);
  });
});

app.get('/bundle', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dist/bundle.js'));
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
