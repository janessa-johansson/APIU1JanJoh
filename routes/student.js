dotify = require('node-dotify');

//curl will be: curl -X GET “localhost:3000/students?name=Charlie+Carham” | jq
get = (req, res, next) => {
    var query;
    if (req.query.name) {
        query = req.models.Student.findOne({ "student.name": req.query.name })
    }
    else {
        query = req.models.Student.find()
    }

    query.exec().then((student) => {
        return res.send(student);
    }).catch((error) => next(error))
}

post = (req, res, next) => {
    req.models.Student.create({
        student: {
            email: req.body.student.email,
            name: req.body.student.name,
            address: {
                street: req.body.student.address.street,
                zipcode: req.body.student.address.zipcode,
                city: req.body.student.address.city,
            }
        }
    }).then((student) => {
        return res.status(201).send(student);
    }).catch((error) => {
        next(error);
    })
}

getById = (req, res, next) => {
    req.models.Student.findById(req.params.id).then((student) => {
        return res.send(student);
    }).catch((error) => next(error))
}

deleteById = (req, res, next) => {
    req.models.Student.findByIdAndDelete(req.params.id).then((deleted) => {
        if (deleted)
            return res.send(deleted).status(200);
        res.sendStatus(204);
    }).catch((error) => next(error));
}

put = (req, res, next) => {
    req.models.Student.updateOne({ _id: req.params.id },
        {
            student: {
                email: req.body.student.email,
                name: req.body.student.name,
                address: {
                    street: req.body.student.address.street,
                    zipcode: req.body.student.address.zipcode,
                    city: req.body.student.address.city,
                }
            },
        }, {
            new: true,
            upsert: true,
            runvalidators: true,

        }).then((status) => {
            console.log("status: ", status)
            if (status.upserted)
                res.status(201)
            else if (status.nModified)
                res.status(200)
            else
                res.status(204)
            res.send()
        }).catch((error) => next(error))
}

module.exports = {
    get,
    post,
    getById,
    deleteById,
    put,
}