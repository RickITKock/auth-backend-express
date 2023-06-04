import request from "supertest";
import app from "../app";

describe("Products", () => {
  it("GET (200) /products --> Array of products", async () => {
    const response = await request(app).get(`/app/products`);
    expect(response.status).toBe(200);
  });

  it("POST (200) /products --> Create a new product", async () => {
    const product = {
      name: "",
      image_url: "",
      description: "",
      inventory: 0,
      price: 0,
      is_offer: false,
    };

    const response = await request(app).post(`/app/products`).send(product);
    expect(response.status).toBe(200);
  });

  it("PUT (200) /products --> Update an existing product", async () => {
    const product = {
      name: "",
      image_url: "",
      description: "",
      inventory: 0,
      price: 0,
      is_offer: false,
    };

    const response = await request(app).put(`/app/products/1`).send(product);
    expect(response.status).toBe(200);
  });

  it("DELETE (204) /products --> Delete an existing product", async () => {
    const response = await request(app).delete(`/app/products/1`);
    expect(response.status).toBe(204);
  });
});
