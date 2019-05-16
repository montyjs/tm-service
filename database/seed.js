/* eslint-disable no-console */
const faker = require('faker');
const pool = require('./index.js');

const urlSeed = [];
// requirement is haveing a seeding script in package json
// idea
const createSeed = (num) => {
  const queryString = 'INSERT INTO customerReviews (userName, postDate, title, review, rating, recommended, images) VALUES (?,?,?,?,?,?,?)';
  for (let i = 0; i < num; i += 1) {
    const params = [
      faker.name.findName(),
      faker.date.past(),
      faker.lorem.sentence(),
      faker.lorem.paragraph(),
      faker.random.number({
        min: 0,
        max: 5,
      }),
      faker.random.boolean(),
      null,
    ];
    if (i % 5 === 0) {
      params.images = urlSeed.pop();
    }
    pool.query(queryString, params, (err, result) => {
      if (err) {
        return console.error(err.message);
      }
      return console.log(result);
    });
  }
};

createSeed(4);
