import { Router } from "express";

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
 *  /app/products:
 *   get:
 *    tags:
 *    - Products
 *    summary: Get Products
 *    description: Returns all products
 *    operationId: getProducts
 *    responses:
 *     200:
 *      description: Successful operation.
 *   post:
 *    tags:
 *    - Products
 *    summary: Create a new Product
 *    description: Creates and returns a new Product
 *    operationId: createProduct
 *    responses:
 *     200:
 *      description: Successful operation.
 *     409:
 *      description: Resource already exists.
 */

// appRouter
//   .route("/products")
//   .get(getProductsHandler)
//   .post(validateRequest(CreateProductInputSchema), createProductHandler);

export default appRouter;
