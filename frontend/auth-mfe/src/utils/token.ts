export const generateMockToken = (userId: string): string => {
  const header = btoa(
    JSON.stringify({
      alg: "HS256",
      typ: "JWT",
    }),
  );

  const payload = btoa(
    JSON.stringify({
      sub: userId,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    }),
  );

  return `${header}.${payload}.mock-signature`;
};
