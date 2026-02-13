import type { Input, ParserFn } from '.';

export const str =
  (expected: string): ParserFn<string> =>
  (input: Input) => {
    if (input.startsWith(expected)) {
      return {
        success: true,
        value: expected,
        remaining: input.slice(expected.length),
        original: input,
      };
    }

    const received = input.slice(0, expected.length) || '<end of input>';
    return {
      success: false,
      error: `Expected "${expected}", but received "${received}"`,
      original: input,
    };
  };
