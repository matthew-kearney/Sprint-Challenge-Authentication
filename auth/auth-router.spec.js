const request = require('supertest');
 const express = require('express');
 const server = require('../api/server');
 const db = require("../database/dbConfig");
 const Users = require("../jokes/model");

 describe('auth-router', () => {
    beforeEach(async () => {
        await db('users').truncate();
    })

    describe('POST to register', () => {

        it('should return 201 on valid register', () => {
            return request(server)
                .post('/api/auth/register')
                .send({ username: 'testing', password: 'testing' })
                .then(res => {
                    expect(res.status).toBe(201)
            })
        })
        it("should return a 500 error for inputing an incomplete password", () => {
            return request(server)
                .post("/api/auth/register")
                .send({ username: 'testing', password: 2 })
                .then(res => {
                expect(res.status).toBe(500);
            });
        });
    })

    describe('POST /login', () => {
        it('should return 401 when missing username and password', () => {
            return request(server)
                .post('/api/auth/login')
                .send({ username: '', password: '' })
                .then(res => {
                    expect(res.status).toBe(401)
                })
        })
        it("should return 500 to invalid password", () => {
            return request(server)
            .post("/api/auth/register")
            .send({ username: 'username', password: 2 })
            .then(res => {
            expect(res.status).toBe(500);
            });
        });
    })
}) 