/* eslint-disable no-undef */
const functions = require('./index.js');
require('jest');

test('should return 4 for adding 2 + 2', () => {
  expect(functions.add(2, 2)).toBe(4);
});
