import type { InferParserFnTuple, Input, ParserFn } from '.';

export const seq =
  <P extends [ParserFn<any>, ...ParserFn<any>[]]>(
    ...parsers: P
  ): ParserFn<InferParserFnTuple<P>> =>
  (input: Input) => {
    let remaining = input;
    const values = [];

    for (const parser of parsers) {
      const result = parser(remaining);

      if (!result.success) {
        return result;
      }

      values.push(result.value);
      remaining = result.remaining;
    }

    return {
      success: true,
      value: values as InferParserFnTuple<P>,
      remaining,
      original: input,
    };
  };
