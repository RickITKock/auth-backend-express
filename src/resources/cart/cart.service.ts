import { Product } from "../product/product.service";
import { CreateOrUpdateShoppingCartInput } from "./cart.input-schema";

interface Cartline {
  product_id: string;
  amount: number;
}

const shoppingCart: Array<Cartline> = [];

export async function findShoppingCart() {
  return shoppingCart;
}

export async function createOrUpdateCart(
  input: CreateOrUpdateShoppingCartInput
) {
  shoppingCart.splice(0, shoppingCart.length);
  input.body.map((cartline: Cartline) => {
    shoppingCart.push({
      product_id: cartline.product_id,
      amount: cartline.amount,
    });
  });
  return shoppingCart;
}
