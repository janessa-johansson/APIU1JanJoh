const mongoose = require('mongoose');
const Student = require('./student.js');

const uri = process.env.DATABASE_URL || "mongodb://localhost:27017/students"

const connectDb = () => {
    return mongoose.connect(uri, {useFindAndModify: false});
}

mongoose.set('useNewUrlParser', true)
mongoose.set('useCreateIndex', true)

module.exports = {
    connectDb,
    models: {
        Student
    }
}