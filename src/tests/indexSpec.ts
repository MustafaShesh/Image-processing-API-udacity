import supertest from "supertest"
import app from "../index"
import imageProcess from "../utilities/imageProcessing";

const request = supertest(app);

// test the endpoint
describe("Test endpoint responses", () => {
  it("gets the api endpoint", async () => {
    const response = await request.get("/api")
    expect(response.status).toBe(404)
  })
})

// test the routes
describe("Test route responses", () => {
  it("gets the route ", async () => {
    const response = await request.get("/api/images")
    expect(response.status).toBe(200)
  })
})

// test the image processing
describe("Test image processing responses", () => {
  it("gets the image processing ", async () => {
    expect(await imageProcess).not.toThrow()
  })
})
