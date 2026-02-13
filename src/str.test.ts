import { run, str } from '.';

describe('str', () => {
  it('should match a string', () => {
    const parser = str('Hello world!');

    expect(run(parser, 'Hello world!')).toMatchObject({
      success: true,
      value: 'Hello world!',
      remaining: '',
      original: 'Hello world!',
    });

    expect(run(parser, 'Goodbye world!')).toMatchInlineSnapshot(`
     {
       "error": "Expected "Hello world!", but received "Goodbye worl"",
       "original": "Goodbye world!",
       "success": false,
     }
    `);

    expect(run(parser, '')).toMatchInlineSnapshot(`
     {
       "error": "Expected "Hello world!", but received "<end of input>"",
       "original": "",
       "success": false,
     }
    `);
  });
});
