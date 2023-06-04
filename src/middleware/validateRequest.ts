import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export function validateRequest(schema: AnyZodObject) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
        headers: req.headers,
      });
      next();
    } catch (e: any) {
      return res.status(400).send(e.errors);
    }
  };
}
