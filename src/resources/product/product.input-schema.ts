import { TypeOf, boolean, number, object, string } from "zod";

const payload = {
  body: object({
    name: string(),
    image_url: string(),
    description: string(),
    inventory: number(),
    price: number(),
    is_offer: boolean(),
  }),
};

const params = {
  params: object({
    id: string({
      required_error: "ID is required",
    }),
  }),
};

export const CreateProductInputSchema = object({
  ...payload,
});

export const UpdateProductInputSchema = object({
  ...payload,
  ...params,
});

export const DeleteProductInputSchema = object({
  ...params,
});

export type CreateProductInput = TypeOf<typeof CreateProductInputSchema>;
export type UpdateProductInput = TypeOf<typeof UpdateProductInputSchema>;
export type DeleteProductInput = TypeOf<typeof DeleteProductInputSchema>;
