const studentModel = require('../models/models.js');




async function fetchStudents(req, res){
    const users = await studentModel.find();
    console.log(users)
  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
}
//A model for data creation//
async function insertStudents(req, res){
  // let regNo = req.query.regNo;
  // let studentName = req.query.studentName;
  // let grade = req.query.grade;
  // let section = req.query.section

  let SrNo=req.body.SrNo
  let Id = req.body.Id
  let Email=req.body.Email
  let regNo = req.body.regNo;
  let studentName = req.body.studentName;
  let grade = req.body.grade;
  let section = req.body.section



  let obj = {
    SrNo:SrNo,
    Id:Id,
    Email:Email,
    regNo: regNo,
    studentName: studentName,
    grade: grade,
    section: section

  }
  const users = await studentModel.create(obj);
  console.log(users)
try {
  // return({ message: "sucscefully Addded", object_deleted: users });
  res.send(users);
} catch (error) {
  res.status(500).send(error);
}
}

// B model //

//  const insertStudents = async (req, res)=>{
//   const student = req.body;
//   const newStudent = newStudent (student);
//   try {
//     await newStudent.save();
//     res.status(201).json(newStudent);
//   }catch(error){
//     res.status(400).json({message:error.message});
//  }
//  }

async function deleteStudents(req, res) {
  // let obj = {}
  let name = req.query.name
  const users = await studentModel.deleteOne({name:name});
  console.log(users)

  try {
    return({ message: "sucscefully delted", object_deleted: users });
  } catch (error) {
    return(error);
  }

}


module.exports = {
    fetchStudents,insertStudents,deleteStudents
}