const server = require('../api/server');
 const supertest = require('supertest');
 const db = require('../database/dbConfig');

 describe("login and register tests", () => {

    it("POST /register", async () => {

        const data = { username: "random", password: "pass"  };
        const res = await supertest(server).post("/api/auth/register").send(data);
        expect(res.body[3].username).toBe("random");
        
   
    });
});