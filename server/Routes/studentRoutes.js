var express = require('express');
var studentController = require('../controllers/studentController')
var router = express.Router();

router.get(`/all`, function (req, res) { 
    console.log("test")
    studentController.getStudents(req, res)
    // res.send(' you')
})
router.post(`/insert`, function (req, res) { 
    studentController.insertStudents(req, res)
    // res.send('you')
})
router.delete(`/delete`, function (req, res) { 
    studentController.deleteStudents(req, res)
    // res.send('you')
})


module.exports = router;