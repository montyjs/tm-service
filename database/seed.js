/* eslint-disable no-console */
const faker = require('faker');
const pool = require('./index.js');

const urlSeed = ['someurl.url', ''];

const insert = (string, params) => {
  pool.query(string, parmas, (err) => {
    if (err) {
      return console.error(err.message);
    }
    return console.log('data inserted')
  })
}

const createSeed = (num) => {
  const queryString = 'INSERT INTO reviews (userName, postDate, title, review, rating, recommended, images) VALUES ($1,$2,$3,$4,$5,$6,$7)';
  let params;
  for (let i = 0; i < num; i += 1) {
    params = [
      faker.name.findName(),
      faker.date.past(),
      faker.lorem.sentence(),
      faker.lorem.paragraph(),
      faker.random.number({
        min: 0,
        max: 5,
      }),
      faker.random.boolean(),
      'randomUrl.url',
    ];
    if (i % 5 === 0) {
      params[params.length - 1] = urlSeed.pop();
    }
    pool.query(queryString, params, (err) => {
      if (err) {
        return console.error(err.message);
      }
      return console.log('row inserted');
    });
  }
};

createSeed(6);

module.exports = createSeed;
