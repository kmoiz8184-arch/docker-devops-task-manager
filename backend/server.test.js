const request = require("supertest");

const app = require("./server");

describe("Task Manager API", () => {

    test("Health endpoint exists", async () => {

        const response = await request(app)
            .get("/api/health");

        expect([200, 500]).toContain(response.statusCode);

    });

});