export const str = (s: string) => (targetString: string) => {
  if (targetString.startsWith(s)) {
    return s;
  }

  throw new Error(
    `Tried to match "${s}", but got "${targetString.substring(0, s.length)}"`
  );
};
