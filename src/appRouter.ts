import { NextFunction, Request, Response, Router } from "express";
import { body, validationResult } from "express-validator";
import { signUpUserHandler } from "./resources/user/user.handler";

const appRouter = Router();

/**
 * @openapi
 *  /app:
 *   options:
 *    tags:
 *    - Api
 *    summary: Get the options
 *    description: Returns all options within the header
 *    operationId: getOptions
 *    responses:
 *     200:
 *      description: Successful operation.
 */
appRouter.use("/", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, POST, DELETE, OPTIONS, GET"
    );
    return res.status(200).json({});
  }
  next();
});

/**
 * @openapi
 *  /api/users/signup:
 *   post:
 *    tags:
 *    - Users
 *    summary: Sign up a user
 *    description: Sign up a user
 *    operationId: signUpUser
 *    responses:
 *     200:
 *      description: Successful operation.
 */
appRouter.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be a valid email address"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 6 characters long"),
  ],
  signUpUserHandler
);

export default appRouter;
