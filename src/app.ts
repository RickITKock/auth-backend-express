import express from "express";
import morgan from "morgan";
import appRouter from "./appRouter";
import { errorHandler } from "./middleware/errorHandler";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/", appRouter);
app.use(errorHandler);

export default app;
