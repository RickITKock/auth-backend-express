import { Signale } from "signale";

const isDevEnv = process.env.NODE_ENV !== "production";
const options = {
  disabled: !isDevEnv,
  interactive: !isDevEnv,
  logLevel: isDevEnv ? "debug" : "info",
  stream: process.stdout,
  types: {
    success: {
      badge: "\u2713",
      color: "green",
      label: "success",
      logLevel: "debug",
    },
    error: {
      badge: "\u26A0",
      color: "red",
      label: "error",
      logLevel: "debug",
    },
    info: {
      badge: "\u24D8",
      color: "yellow",
      label: "info",
      logLevel: "debug",
    },
    data: {
      badge: "\u2317",
      color: "white",
      label: "Data",
      logLevel: "debug",
    },
    process: {
      badge: "\u2317",
      color: "yellow",
      label: "process",
      logLevel: "debug",
    },
  },
};
export default new Signale(options);
