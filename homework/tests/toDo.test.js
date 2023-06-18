const request = require('supertest')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app = require('../app')
const server = app.listen(8080, () => console.log('Testing on Port 8080'))
const ToDo = require('../models/toDo')
let MongoMemoryServer

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri(), { useNewUrlParser: true, useUnifiedTopology: true})
})

afterAll(async () => {
    await mongoose.connection.close()
    mongoSever.stop()
    server.close()
})

afterAll((done) => done())

describe('Test the toDo endpoints', () => {
    test('it should create a new To Do', async () => {
        const response = request(app)
        .post('/toDos')
        .send({ title: "do the homework", description: "why are you always late nick? because I got way too much to do for one man.", completed: false, created_at: Date.now})

        expect(response.statusCode).toBe(200)
        expect(response.body.toDo.title).toEqual('do the homework')
        expect(response.body.toDo.description).toEqual('why are you always late nick? because I got way too much to do for one man.')
        expect(response.body.toDo.completed).toBe(false)
        expect(response.body.toDo.Date).toBe(Date.now)
    })

    test('It should update a toDo', async () => {
        const toDo = new ToDo({ title: "homework happenin", description: "Sheeeeeshhhhh.", completed: false, created_at: Date.now})
        await toDo.save()

        const response = await request(app)
            .put(`/toDos/${todos._id}`)
            .send({title: "homework happenin for real tho", description: "phewwwww.", completed: true, created_at: Date.now})

            expect(response.statusCode).toBe(200)
            expect(response.body.title).toEqual("homework happenin for real tho")
            expect(response.body.description).toEqual("phewwwww.")
            expect(response.body.completed).toBe(true)
            expect(response.body.toDo.Date).toBe(Date.now)
    })

    test('It should delete a toDo', async () => {
        const toDo = new ToDo({title: "seriously finish your homework", description: "jeeeeezzzzz.", completed: false, created_at: Date.now})
        await toDo.save()

        const response = await request(app)
        .delete(`/toDos/${toDo._id}`)

        expect(response.statusCode).toBe(200)
        expect(response.body.message).toEqual('User Deleted')
    })
})