import { NextFunction, Request, Response, Router } from "express";
import { body, validationResult } from "express-validator";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { NotFoundError } from "./error/NotFoundError";
import { signUpUserHandler } from "./resources/user/user.handler";

const appRouter = Router();

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Webshop API",
      version: "0.4.4",
      description: "Webshop API specification.",
      contact: { email: "rit.kock@gmail.com" },
      license: {
        name: "Apache 2.0",
        url: "http://www.apache.org/licenses/LICENSE-2.0.html",
      },
    },
  },
  apis: ["./src/appRouter.ts", "./src/v1/*/*.*-schema.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

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
 *     400:
 *      description: Invalid email or password(s).
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

// Swagger page
appRouter.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Docs in JSON format
appRouter.get("/docs.json", (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

appRouter.all("*", async (req: Request, res: Response, next: NextFunction) => {
  return next(new NotFoundError());
});

export default appRouter;
