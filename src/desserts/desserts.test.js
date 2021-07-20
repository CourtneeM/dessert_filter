const desserts = require('./desserts');

test('The first cookie in the obj should be chocolate chip cookie with a price of 3', () => {
  expect(desserts.cookies[0]).toEqual({type: 'chocolate chip', price: 3, img: ''})
});
