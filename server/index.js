/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { getAll } = require('../database/index.js');

const app = express();

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

app.listen(process.env.SERVER_PORT, () => {
  console.log(`listening on port ${process.env.SERVER_PORT}`);
});
