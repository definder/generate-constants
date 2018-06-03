process.env.CONSTANT_NAMESPACE = "Profile";
process.env.CONSTANT_SEPARATOR = ":";
var generateConstant = require('../index').default;

test('With arguments and default NAMESPACE: [`search`, [`SUCCESS`]]', () => {
  expect(generateConstant('search', ['SUCCESS'])).toEqual({
    SUCCESS: 'Profile:search_SUCCESS',
  });
});
