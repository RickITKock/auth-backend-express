import { TypeOf, array, boolean, number, object, string } from "zod";

const payload = {
  body: array(
    object({
      product_id: string(),
      amount: number(),
    })
  ),
};

const params = {
  params: object({
    id: string({
      required_error: "ID is required",
    }),
  }),
};

export const CreateOrUpdateShoppingCartInputSchema = object({
  ...payload,
});

export const DeleteCartInputSchema = object({
  ...params,
});

export type CreateOrUpdateShoppingCartInput = TypeOf<
  typeof CreateOrUpdateShoppingCartInputSchema
>;
export type DeleteCartInput = TypeOf<typeof DeleteCartInputSchema>;
