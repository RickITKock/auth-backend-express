import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../errors/ApiError";
import { CreateOrUpdateShoppingCartInput } from "./cart.input-schema";
import { createOrUpdateCart, findShoppingCart } from "./cart.service";

export async function getShoppingCartHandler(req: Request, res: Response) {
  const cart = await findShoppingCart();
  return res.status(200).send(cart);
}

export async function createOrUpdateShoppingCartHandler(
  req: Request<{}, {}, CreateOrUpdateShoppingCartInput["body"]>,
  res: Response
) {
  const cart = await createOrUpdateCart(req);
  return res.status(200).send(cart);
}
