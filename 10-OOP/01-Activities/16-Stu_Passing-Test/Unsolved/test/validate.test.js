const Validate = require('../validate.js');

describe('Validate', () => {
  it('returns false when the password is less than 8 characters', () => {
    const validate = new Validate();
    const result = validate.isPassword('abc123');
    expect(result).toBe(false);
  });

  it('returns false when the password does not contain at least 1 uppercase', () => {
    const validate = new Validate();
    const result = validate.isPassword('abcdefgh123');
    expect(result).toBe(false);
  });

  it('returns false when the password does not contain at least 1 lowercase', () => {
    const validate = new Validate();
    const result = validate.isPassword('ABCDEFG123');
    expect(result).toBe(false);
  });

  it('returns false when the password does not contain at least 1 number', () => {
    const validate = new Validate();
    const result = validate.isPassword('Abcdefgh');
    expect(result).toBe(false);
  });

  it('returns true when the password meets all requirements', () => {
    const validate = new Validate();
    const result = validate.isPassword('Abcdefgh1');
    expect(result).toBe(true);
  });
});


// TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.
  // TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.