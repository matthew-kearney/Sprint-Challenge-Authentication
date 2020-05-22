const request = require('supertest')
 const server = require('../api/server');
 const db = require("../database/dbConfig");


 describe('jokes-router', () => {
    beforeEach(async () => {
        await db('users').truncate();
    })

    describe('GET /jokes', () => {
        it('should return 200', () => {
            return request(server)
                .get('/api/jokes')
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })

        it('should return JSON', function() {
            return request(server).get('/api/jokes')
                .then(res => {
                    expect(res.type).toMatch(/json/i)
                })
        })
    })
}) 