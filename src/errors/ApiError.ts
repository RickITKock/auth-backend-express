export class ApiError extends Error {
  private static defaultErrorMessages: Record<string, string> = {
    400: "Missing required parameter.",
    401: "Keys are missing or invalid.",
    403: "Not authorized to access requested object(s).",
    404: "Nothing found matching the given criteria.",
    409: "Resource already exists.",
    500: "Internal server error.",
  };

  constructor(public statusCode: number, public message: string) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }

  static badRequest(message?: string) {
    return new ApiError(400, message || this.defaultErrorMessages[400]);
  }

  static unauthorized(message?: string) {
    return new ApiError(401, message || this.defaultErrorMessages[401]);
  }

  static forbidden(message?: string) {
    return new ApiError(403, message || this.defaultErrorMessages[403]);
  }

  static notFound(message?: string) {
    return new ApiError(404, message || this.defaultErrorMessages[404]);
  }
  static conflict(message?: string) {
    return new ApiError(409, message || this.defaultErrorMessages[409]);
  }

  static internal(message?: string) {
    return new ApiError(500, message || this.defaultErrorMessages[500]);
  }
}
