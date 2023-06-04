import express from "express";
import morgan from "morgan";
import appRouter from "./appRouter";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/app", appRouter);

export default app;
