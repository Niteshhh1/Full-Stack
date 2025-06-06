const mongoose = require('mongoose');

async function DBConnect() {
  try {
       await mongoose.connect('mongodb://localhost:27017/blood',{
          useUnifiedTopology: true
       });
   console.log("DataBase Connect Successfully")
  } catch (error) {
    console.log("Ye wali error h -> ",error)
  }
}

module.exports = DBConnect;