import { isValidEmail } from '../emailValidator';

describe('Email validation', () => {

  test('false if email has no @', () => {
    expect(isValidEmail('example.com')).toBe(false);
  });

  test('false if email has no dot in domain', () => {
    expect(isValidEmail('example@domain')).toBe(false);
  });

  test('false if dot is last character', () => {
    expect(isValidEmail('example@domain.')).toBe(false);
  });

  test('false if email contains spaces', () => {
    expect(isValidEmail('example @domain.com')).toBe(false);
  });

  test('false if no text before @', () => {
    expect(isValidEmail('@domain.com')).toBe(false);
  });

  test('false if no text after @', () => {
    expect(isValidEmail('example@')).toBe(false);
  });

  test('true if email is valid', () => {
    expect(isValidEmail('example@domain.com')).toBe(true);
  });

});