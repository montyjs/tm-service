/* eslint-disable consistent-return */
/* eslint-disable no-console */
require('dotenv').config()

const faker = require('faker'),
      moment = require('moment')

const { pool } = require('./index.js'),
      realData = require('./realData.js')

/********************* DATA GENERATOR FUNCTIONS *******************/

const fakeEntry = () => {
  let date = JSON.stringify(faker.date.past(10, '2019-05-01')).slice(0, 11).split('-').join('')
  return [
    faker.name.findName(),
    moment(date, 'YYYYMMDD').fromNow(),
    faker.lorem.sentence(),
    faker.lorem.paragraph(),
    faker.random.number({ min: 0, max: 5 }),
    faker.random.boolean(),
    faker.random.number({ min: 0, max: 50 }),
    faker.random.number({ min: 0, max: 50 }),
    'randomUrl.Url',
    'randomUrl.url'
  ]
}

const realEntry = (i) => {
  return [
    realData.userNames[i],
    realData.postDates[i],
    realData.titles[i],
    realData.reviews[i],
    realData.stars[i],
    realData.recommended[i],
    realData.yesVote[i],
    realData.noVote[i],
    realData.image1[i],
    realData.image2[i]
  ]
}

/********************** SEEDING FUNCTION *********************/

const seedDB = () => {
  let queryString = 'INSERT INTO reviews (userName, postDate, title, review, rating, recommended, yesvote, novote, image1, image2) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',
      count = 0,
      params

  if ( process.env.NODE_ENV === 'production' ) {
    while ( count < realData.reviews.length ) {
      params = realEntry(count)
      pool.query(queryString, params, (err) => {
        if ( err ) {
          return console.error('error saving entry: ', err)
        }
        count++
      })
    }
  } else {
    while ( count < 100 ) {
      params = fakeEntry()
      pool.query(queryString, params, (err) => {
        if ( err ) {
          return console.error('error saving entry: ', err)
        }
        count++
      })
    }
  }
}

/******************* SEED DATABASE ********************/

seedDB()