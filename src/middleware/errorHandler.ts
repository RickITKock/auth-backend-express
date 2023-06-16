import express, { NextFunction, Request, Response } from "express";
import { CustomError } from "../error/CustomError";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  console.log(err);
};
