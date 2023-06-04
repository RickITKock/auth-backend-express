import type { Config } from "jest";

const config: Config = {
  setupFiles: ["<rootDir>/__tests__/.jest/setup-env.ts"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ["**/__tests__/*.+(ts|tsx|js)"],
};

export default config;
