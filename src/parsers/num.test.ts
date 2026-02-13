import { num, run } from '..';

describe('num', () => {
  it('should match a number', () => {
    const parser = num(12);

    expect(run(parser, '12')).toMatchObject({
      success: true,
      value: 12,
      remaining: '',
      original: '12',
    });

    expect(run(parser, '130')).toMatchInlineSnapshot(`
     {
       "error": "Expected "12", but received "13"",
       "original": "130",
       "success": false,
     }
    `);

    expect(run(parser, '')).toMatchInlineSnapshot(`
     {
       "error": "Expected "12", but received "<end of input>"",
       "original": "",
       "success": false,
     }
    `);
  });
});
