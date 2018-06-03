import generateConstant from '../'

test('without arguments', () => {
  expect(generateConstant()).toBe('Main/undefined');
});

test('With arguments: [`init`]', () => {
  expect(generateConstant('init')).toBe('Main/init');
});

test('With arguments: [`null`]', () => {
  expect(generateConstant(null)).toBe('Main/null');
});

test('With arguments: [`user`, []]', () => {
  expect(generateConstant('user', [])).toBe('Main/user');
});

test('With arguments: [`user`, [`SUCCESS`, `FAILURE`]]', () => {
  expect(generateConstant('user', ['SUCCESS', 'FAILURE'])).toEqual({
    SUCCESS: 'Main/user_SUCCESS',
    FAILURE: 'Main/user_FAILURE',
  });
});

test('With arguments: [`user`, [`SUCCESS`, `FAILURE`], {"model": `Profile`}]', () => {
  expect(generateConstant('user', ['SUCCESS', 'FAILURE'], {model: 'Profile'})).toEqual({
    SUCCESS: 'Main/Profile_user_SUCCESS',
    FAILURE: 'Main/Profile_user_FAILURE',
  });
});

test('With arguments: [`user`, [`SUCCESS`, `FAILURE`], {"model": `Profile`, "namespace": `Admin`}]', () => {
  expect(generateConstant('user', ['SUCCESS', 'FAILURE'], {model: 'Profile', namespace: 'Admin'})).toEqual({
    SUCCESS: 'Admin/Profile_user_SUCCESS',
    FAILURE: 'Admin/Profile_user_FAILURE',
  });
});

test('With arguments: [`user`, [`SUCCESS`, `FAILURE`], `null`]', () => {
  expect(generateConstant('user', ['SUCCESS', 'FAILURE'], null)).toEqual({
    SUCCESS: 'Main/user_SUCCESS',
    FAILURE: 'Main/user_FAILURE',
  });
});

test('With arguments: [`user`, `null`, {"model": `Profile`}]', () => {
  expect(generateConstant('user', null, {model: 'Profile'})).toBe('Main/Profile_user');
});
