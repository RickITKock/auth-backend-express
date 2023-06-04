import { NextFunction, Request, Response } from "express";

export async function signUpUserHandler(req: Request, res: Response) {
  return res.status(200).send({});
}
