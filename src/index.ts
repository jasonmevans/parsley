export type ParserState<T> = {
  target: T;
  result: T | null;
  index: number;
};
export type Parser<T> = (
  input: T
) => (parserState: ParserState<T>) => ParserState<T>;

export const str: Parser<string> = (s) => (parserState) => {
  const { target, index } = parserState;

  if (target.slice(index).startsWith(s)) {
    return {
      ...parserState,
      result: s,
      index: index + s.length,
    };
  }

  throw new Error(
    `Tried to match "${s}", but got "${target.substring(index, index + s.length)}"`
  );
};

export const run = <T>(
  parser: ReturnType<Parser<T>>,
  target: T
): ParserState<T> => {
  const initialState = {
    target,
    result: null,
    index: 0,
  };

  return parser(initialState);
};
