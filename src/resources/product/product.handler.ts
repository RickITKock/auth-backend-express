import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../errors/ApiError";
import {
  CreateProductInput,
  DeleteProductInput,
  UpdateProductInput,
} from "./product.input-schema";
import {
  createProduct,
  deleteProduct,
  findAllProducts,
  findProductById,
  findProductByName,
  updateProduct,
} from "./product.service";

export async function getProductsHandler(req: Request, res: Response) {
  const products = await findAllProducts();
  return res.status(200).send(products);
}

export async function createProductHandler(
  req: Request<{}, {}, CreateProductInput["body"]>,
  res: Response
) {
  const product = await findProductByName(req.body.name);
  if (product) {
    const error: ApiError = ApiError.conflict();
    return res.status(error.statusCode).send(error.message);
  }
  const newProduct = await createProduct(req);
  return res.status(200).send(newProduct);
}

export async function updateProductHandler(
  req: Request<UpdateProductInput["params"], {}, UpdateProductInput["body"]>,
  res: Response
) {
  const product = await findProductById(req.params.id);
  if (!product) {
    const error = ApiError.notFound();
    return res.status(error.statusCode).send(error.message);
  }
  const updatedProduct = await updateProduct(req);
  return res.status(200).send(updatedProduct);
}

export async function deleteProductHandler(
  req: Request<DeleteProductInput["params"], {}, {}>,
  res: Response
) {
  const product = await findProductById(req.params.id);
  if (!product) {
    const error = ApiError.notFound();
    return res.status(error.statusCode).send(error.message);
  }
  deleteProduct(req).then(() => {
    return res.status(204).send();
  });
}
