/* eslint-disable no-console */
require('dotenv').config()
const express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path'),
      cors = require('cors'),
      db = require('../database/index.js')

const app = express(),
      PORT = process.env.PORT || 3002

app.use(cors())
app.use(express.static(path.join(__dirname, '/../public/dist')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/********************* ROUTES ***********************/

app.get('/reviews', (req, res) => {
  console.log('request at server, heading to database')
  db.getAll((result) => {
    !result ? res.sendStatus(400) : res.send(result)
  })
})

app.get('/bundle', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dist/bundle.js'))
})

/********************** SERVER CONNECTION *********************/

app.listen(PORT, (err) => {
  err ? console.log('error starting server: ', err) : console.log(`listening on port ${PORT}`)
})
