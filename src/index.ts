export type Input = string;

export type ParseResult<A> =
  | {
      success: true;
      value: A;
      remaining: Input;
      original: Input;
    }
  | {
      success: false;
      original: Input;
      error: string;
    };

export type ParserFn<A> = (input: Input) => ParseResult<A>;

export type InferParserFnTuple<T extends ParserFn<any>[]> = {
  [K in keyof T]: T[K] extends ParserFn<infer A> ? A : never;
};

export { str } from './parsers/str';
export { num } from './parsers/num';
export { seq } from './parsers/seq';

export const run = <A>(parser: ParserFn<A>, input: Input): ParseResult<A> => {
  return parser(input);
};
