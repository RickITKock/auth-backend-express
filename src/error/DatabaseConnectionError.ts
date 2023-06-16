import { ValidationError, body, validationResult } from "express-validator";
import { CustomError } from "./CustomError";

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = "Error connecting to the database";

  constructor() {
    super("Connection error");

    // Only because we are extending a built-in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}

// throw new RequestValidationError(errors);
