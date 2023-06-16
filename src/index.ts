import * as dotenv from "dotenv";
import http from "http";
dotenv.config();

import app from "./app";
import logger from "./utils/logger";

const PORT: number = process.env.PORT ? +process.env.PORT : 8000;

const server = http.createServer(app);

server.listen(PORT, (): void => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  logger.info(`Docs available at http://localhost:${PORT}/docs`);
});

const shutdown = (signal: string) => {
  server.close(() => {
    console.log(`${signal} RECEIVED. Gracefully shutting down.`);
  });
};

process.on("SIGINT", shutdown);
process.on("SIGHUP", shutdown);
