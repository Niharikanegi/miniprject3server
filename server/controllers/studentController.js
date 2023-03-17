var getStudentData = require('../services/dbservices.js') 

const getStudents = async (req, res) => {  
    console.log("controller")
    let students = await getStudentData.fetchStudents(req, res)
    // res.send("students")
}
const insertStudents = async (req, res) => {  
    let students = await getStudentData.insertStudents(req, res)
    // res.send("students")
}
const deleteStudents = async (req, res) => {  
    let students = await getStudentData.deleteStudents(req, res)
    // res.send("students")
}

module.exports = {
    getStudents,insertStudents,deleteStudents
}