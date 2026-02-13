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

export { str } from './str';
export { num } from './num';
export { seq } from './seq';

export const run = <A>(parser: ParserFn<A>, input: Input): ParseResult<A> => {
  return parser(input);
};
