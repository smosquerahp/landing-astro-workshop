export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      {
        useESM: true,
        tsconfig: "tsconfig.json",
      },
    ],
  },
  moduleFileExtensions: ["ts", "js", "mjs", "cjs", "json"],
  testMatch: ["**/tests/**/*.test.{js,ts}"],
  collectCoverageFrom: ["src/**/*.{js,mjs,cjs,ts,mts,cts}"],
};
