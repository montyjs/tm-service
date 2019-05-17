/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { getAll } = require('../database/index.js');

const port = 3002;
const app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/reviews', (req, res) => {
  getAll((result) => {
    if (!result) {
      res.sendStatus(400);
    }
    res.send(result);
  });
});

app.list(port, () => {
  console.log(`listenging on port ${port}`);
});
