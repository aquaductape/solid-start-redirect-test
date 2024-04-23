export const logServer = (input: string | {}) => {
  const SUPER_SECRET = "super_secret_SUPER_SECRET!!!!_";
  if (typeof input === "object") {
    console.log("server: ", input, SUPER_SECRET.at(-1));
    return;
  }
  console.log(`server: ${input} ${SUPER_SECRET.at(-1)}`);
};
export const logIsomorphic = (input: string) =>
  console.log(`isomorphic: ${input}`);
export const logClient = (input: string) => console.log(`client: ${input}`);
