/* eslint-disable no-console */
const faker = require('faker');

const urlSeed = [];
// requirement is haveing a seeding script in package json
// idea
const createSeed = (num) => {
  const queryString = 'INSERT INTO customerReviews (userName, postDate, title, review, rating, recommended, images) VALUES (?,?,?,?,?,?,?)';
  for (let i = 0; i < num; i += 1) {
    const params = {
      userName: faker.name.findName(),
      postDate: faker.date.past(),
      title: faker.lorem.sentence(),
      review: faker.lorem.paragraph(),
      rating: faker.random.number({
        min: 0,
        max: 5,
      }),
      recommended: faker.random.boolean(),
      images: null,
    };
    if (i % 5 === 0) {
      params.images = urlSeed.pop();
    }
    db.query(queryString, params, (err, result) => {
      if (err) {
        return console.error(err.message);
      }
      return console.log(result);
    });
  }
};
