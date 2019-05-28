const express = require('express');
const router = express.Router();

const student = require('./student.js');
const methods = require('./methods.js');

//middleware that is spec to this router
router.use(function timelog (req, res, next) {
  console.log('Time:', Date.now())
  next();
})

router.get('/students', student.get);
router.post('/students', student.post);
router.get("/students/:id", student.getById)
router.put("/students/:id", student.put)
router.delete("/students/:id", student.deleteById)

router.get('/methods', methods.get);
router.post('/methods', methods.post);
router.put('/methods', methods.put);
router.delete('/methods', methods.delete);

module.exports = router;