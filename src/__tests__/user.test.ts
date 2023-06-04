import request from "supertest";
import app from "../app";

describe("Auth Success", () => {
  it("POST (200) /api/users/signup --> User signs up successfully using correct credentials", async () => {
    const user = {
      email: "efpyi@example.com",
      password: "12345678",
      confirmPassword: "12345678",
    };

    const response = await request(app).post(`/api/users/signup`).send(user);
    expect(response.status).toBe(200);
  });
});

describe("Auth Fail", () => {
  it("POST (400) /api/users/signup --> User is unable to signup due to invalid credentials", async () => {
    const user = {
      email: "efpyi",
      password: "12345678",
      confirmPassword: "12345678",
    };

    const response = await request(app).post(`/api/users/signup`).send(user);
    expect(response.status).toBe(400);
  });
});
