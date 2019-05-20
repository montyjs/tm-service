/* eslint-disable no-undef */
const rp = require('request-promise');
const functions = require('./index.js');
const { getAll } = require('../database/index.js');


test('should return 4 for adding 2 + 2', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('server should retrieve and serve data from database', () => {
  expect.assertions(1);
  return rp('http://localhost:3002/reviews').then((response) => {
    expect(response).toBeDefined();
  });
});
