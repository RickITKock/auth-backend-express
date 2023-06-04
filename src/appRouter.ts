import { Router } from "express";
import { validateRequest } from "./middleware/validateRequest";
import {
  createOrUpdateShoppingCartHandler,
  getShoppingCartHandler,
} from "./resources/cart/cart.handler";
import { CreateOrUpdateShoppingCartInputSchema } from "./resources/cart/cart.input-schema";
import {
  createProductHandler,
  deleteProductHandler,
  getProductsHandler,
  updateProductHandler,
} from "./resources/product/product.handler";
import {
  CreateProductInputSchema,
  DeleteProductInputSchema,
  UpdateProductInputSchema,
} from "./resources/product/product.input-schema";

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

appRouter
  .route("/products")
  .get(getProductsHandler)
  .post(validateRequest(CreateProductInputSchema), createProductHandler);

/**
 * @openapi
 *  /app/products/{id}:
 *   put:
 *    tags:
 *    - Products
 *    summary: Update an existing Product
 *    description: Updates and returns an existing Product
 *    operationId: updateProduct
 *    responses:
 *     200:
 *      description: Successful operation.
 *     404:
 *      description: Nothing found matching the given criteria.
 *   delete:
 *    tags:
 *    - Products
 *    summary: Delete an existing Product
 *    description: Deletes an existing Product
 *    operationId: deleteProduct
 *    responses:
 *     204:
 *      description: Successful operation.
 *     404:
 *      description: Nothing found matching the given criteria.
 */
appRouter
  .route("/products/:id")
  .put(validateRequest(UpdateProductInputSchema), updateProductHandler)
  .delete(validateRequest(DeleteProductInputSchema), deleteProductHandler);

/**
 * @openapi
 *  /app/cart:
 *   get:
 *    tags:
 *    - Cart
 *    summary: Get Shopping Cart
 *    description: Returns Shopping Cart
 *    operationId: getShoppingCart
 *    responses:
 *     200:
 *      description: Successful operation.
 *   put:
 *    tags:
 *    - Cart
 *    summary: Creates a new Shopping Cart
 *    description: Creates and returns a new Shopping Cart
 *    operationId: createShoppingCart
 *    responses:
 *     200:
 *      description: Successful operation.
 *     409:
 *      description: Resource already exists.
 */
appRouter
  .route("/cart")
  .get(getShoppingCartHandler)
  .put(
    validateRequest(CreateOrUpdateShoppingCartInputSchema),
    createOrUpdateShoppingCartHandler
  );

export default appRouter;
