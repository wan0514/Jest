const addFive = require('./addFive');

test('returns the number of 6', () => {
  expect(addFive(1)).toBe(6);
});

test('returns the number of 7', () => {
  expect(addFive(2)).toBe(7);
});

test('returns the number of 8', () => {
  expect(addFive(3)).toBe(8);
});

test('returns the number of 10', () => {
  expect(addFive('5')).toBe(10);
});
