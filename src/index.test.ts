import { run, str } from './';

describe('Basic string parsers', () => {
  it('should match a string', () => {
    const parser = str('Hello there!');

    expect(() => run(parser, 'This is not correct')).toThrow();

    expect(run(parser, 'Hello there!')).toStrictEqual({
      target: 'Hello there!',
      result: 'Hello there!',
      index: 12,
    });
  });
});
