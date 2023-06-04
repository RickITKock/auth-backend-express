import * as dotenv from "dotenv";
import http from "http";
import { swaggerDocs } from "./utils/swaggerDocs";
dotenv.config();

import app from "./app";

const PORT: number = process.env.PORT ? +process.env.PORT : 8000;

const server = http.createServer(app);

server.listen(PORT, (): void => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  swaggerDocs(app, PORT);
});

const shutdown = (signal: string) => {
  server.close(() => {
    console.log(`${signal} RECEIVED. Gracefully shutting down.`);
  });
};

process.on("SIGINT", shutdown);
process.on("SIGHUP", shutdown);
