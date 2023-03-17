const express = require('express');
const mongoose = require("mongoose");
const app = express();
const port = 4000;

var studentRoutes = require('./routes/studentRoutes');


let cors = require("cors");
app.use(express.json()); 

app.use(cors());

app.use('/student', studentRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
mongoose.set('strictQuery', true);
// mongoose.connect('mongodb://localhost:27017/pms',
mongoose.connect('mongodb://127.0.0.1/pms',
  {
    useNewUrlParser: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});