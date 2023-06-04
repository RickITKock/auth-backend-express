import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export async function signUpUserHandler(req: Request, res: Response) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(400).send({ errors: errors.array() });
  }

  const { body } = req;
  console.log(body);
  return res.status(200).send({});
}
