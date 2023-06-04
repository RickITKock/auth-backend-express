import request from "supertest";
import app from "../app";

describe("Shopping Cart", () => {
  it("GET (200) /cart --> Get Shopping Cart", async () => {
    const response = await request(app).get(`/app/cart`);
    expect(response.status).toBe(200);
  });
  it("PUT (200) /cart --> Add product to Shopping Cart", async () => {
    const shoppingCart = [
      {
        product_id: "1",
        amount: 1,
      },
      {
        product_id: "2",
        amount: 1,
      },
    ];
    const response = await request(app).post(`/app/cart`).send(shoppingCart);
    console.log(response.body);
    expect(response.status).toBe(200);
  });
});
