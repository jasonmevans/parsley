export type Matcher<T> = (input: T) => T;
export type Parser<T> = (target: T) => Matcher<T>;

export const str: Parser<string> = (target) => (input) => {
  if (input.startsWith(target)) {
    return target;
  }

  throw new Error(
    `Tried to match "${target}", but got "${input.substring(0, target.length)}"`
  );
};

export const run = <T>(parser: Matcher<T>, target: T): T => {
  return parser(target);
};
