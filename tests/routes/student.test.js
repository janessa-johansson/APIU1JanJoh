// Mongoose and mocking requests
const mongoose = require('mongoose')
const sinon = require('sinon');
require('sinon-mongoose')

// initialize the app and models
const app = require('../../index.js')

// sending requests
const agent = require('supertest').agent(app);
// validating results
const expect = require('chai').expect;

// get the model
const Student = mongoose.model('Student')


var studentMock = sinon.mock(Student)
before(() => {
});

afterEach(() => {
    studentMock.verify();
    studentMock.restore(); // Unwraps the spy
});


describe('Student Integration tests', () => {

    // Our test data
    const expected = {
        "student": {
            "address": {
                "street": "123 Summer Street",
                "zipcode": "78727",
                "city": "Austin"
            },
            "email": "email@email.com",
            "name": "Sammi Smith",
        },
        "_id": "5cee73cf561ea214c45e35a1",
        "__v": 0
    }

    describe('student.get', () => {

        it('Should return an array of all students', (done) => {

            // Given (preconditions)
            studentMock
                .expects('find')
                .chain('exec')
                .resolves([expected]);

            // When (someting happens)
            agent
                .get('/students')
                .end((err, res) => {
                    // Then (something should happen)
                    expect(res.status).to.equal(200);
                    expect(res.body).to.eql([expected]);
                    done();
                });
        });

        it('Should get a student by name', (done) => {

            // Given (preconditions)
            studentMock
                .expects('findOne')
                .withArgs({ "student.name": "Sammi Smith" })
                .chain('exec')
                .resolves(expected);

            // When (someting happens)
            agent
                .get('/students?name=Sammi+Smith')
                .end((err, res) => {
                    // Then (something should happen)
                    expect(res.status).to.equal(200);
                    expect(res.body).to.eql(expected);
                    done();
                });
        });
    });

    describe('student.post', () => {
        it('Should be able to create a student', (done) => {
            // Given (preconditions)
            studentMock
                .expects('create')
                .withArgs({
                    "student": {
                        "address": {
                            "street": "123 Summer Street",
                            "zipcode": "78727",
                            "city": "Austin"
                        },
                        "email": "email@email.com",
                        "name": "Sammi Smith"
                    }
                })
                .chain('exec')
                .resolves(expected);

            // When (someting happens)
            agent
                .post('/students/')
                .send(expected)
                .end((err, res) => {
                    // Then (something should happen)
                    expect(res.status).to.equal(201);
                    expect(res.body).to.eql(expected);
                    done();
                });
        });
    })
});