import { str } from './';

describe('Basic string parsers', () => {
  it('should match a string', () => {
    const parser = str('Hello there!');

    expect(() => parser('This is not correct')).toThrow();

    expect(parser('Hello there!')).toBe('Hello there!');
  });
});
