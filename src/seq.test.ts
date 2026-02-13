import { num, run, seq, str } from '.';

describe('seq', () => {
  it('should process a sequence of parsers', () => {
    const parser = seq(str('Hello '), num(4), str(' world!'));

    expect(run(parser, 'Hello 4 world!')).toMatchObject({
      success: true,
      value: ['Hello ', 4, ' world!'],
      remaining: '',
      original: 'Hello 4 world!',
    });

    expect(run(parser, 'Hello 5 world!')).toMatchInlineSnapshot(`
     {
       "error": "Expected "4", but received "5"",
       "original": "5 world!",
       "success": false,
     }
    `);
  });
});
