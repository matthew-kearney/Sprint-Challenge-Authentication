const supertest = require("supertest");
 const server = require("./api/server");

 test("GET /", async () => {
   const endpoint = "/";
   const status = 200;

   const res = await supertest(server).get(endpoint);
   expect(res.statusCode).toBe(status);
   
 });