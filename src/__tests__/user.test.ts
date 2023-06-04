import request from "supertest";
import app from "../app";

describe("Auth Success", () => {
  it("POST (200) /api/users/signup --> User signs up successfully using correct credentials", async () => {
    const response = await request(app).post(`/api/users/signup`);
    expect(response.status).toBe(200);
  });
});
