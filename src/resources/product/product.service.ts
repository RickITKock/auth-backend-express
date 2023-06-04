import {
  CreateProductInput,
  DeleteProductInput,
  UpdateProductInput,
} from "./product.input-schema";

export interface Product {
  id: string;
  name: string;
  image_url: string;
  description: string;
  inventory: number;
  price: number;
  is_offer: boolean;
}

const products: Array<Product> = [];

export async function findProductById(productId: string) {
  return products.find((product) => product.id == productId);
}

export async function findProductByName(name: string) {
  return products.find((product) => product.name == name);
}

export async function findAllProducts() {
  return products;
}

export async function createProduct(input: CreateProductInput) {
  const newProduct: Product = {
    ...input.body,
    id: `${products.length + 1}`,
  };
  products.push(newProduct);
  return newProduct;
}

export async function updateProduct(input: UpdateProductInput) {
  const existingProductIndex = products.findIndex(
    (product) => product.id == input.params.id
  );
  const updatedProduct: Product = { id: input.params.id, ...input.body };
  products.splice(existingProductIndex, 1, updatedProduct);
  return updatedProduct;
}

export async function deleteProduct(input: DeleteProductInput) {
  const existingProductIndex = products.findIndex(
    (product) => product.id == input.params.id
  );
  products.splice(existingProductIndex, 1);
  return products.length;
}
