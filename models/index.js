const mongoose = require('mongoose');
const Student = require('./student.js');

const uri = process.env.DATABASE_URL || "mongodb://localhost:27017/students"

const connectDb = () => {
    return mongoose.connect(uri, {useFindAndModify: false});
}
// test with and without these (they should remove deprecation warnings).
mongoose.set('useNewUrlParser', true)
mongoose.set('useCreateIndex', true)

module.exports = {
    connectDb,
    models: {
        Student
    }
}