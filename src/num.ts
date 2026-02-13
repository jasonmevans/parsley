import type { Input, ParserFn } from '.';

export const num =
  (expected: number): ParserFn<number> =>
  (input: Input) => {
    const expectedStr = expected.toString();
    if (input.startsWith(expectedStr)) {
      return {
        success: true,
        value: expected,
        remaining: input.slice(expectedStr.length),
        original: input,
      };
    }

    const received = input.slice(0, expectedStr.length) || '<end of input>';
    return {
      success: false,
      error: `Expected "${expectedStr}", but received "${received}"`,
      original: input,
    };
  };
