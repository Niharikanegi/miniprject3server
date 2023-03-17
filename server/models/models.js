const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
   
    SrNo: {
        type: String,
        required: true,
        },
    Id: {
            type: String,
            required: true,
            },
    Email: {
            type: String,
            required: true,
            },
    regNo: {
        type: String,
        required: true,
        },
    studentName: {
        type: String,
        required: true,
        },
    grade: {
        type: String,
        required: true,
        },
    section: {
        type: String,
        required: true,
        },
    
});
const Student = mongoose.model('student', studentSchema);
module.exports = Student;