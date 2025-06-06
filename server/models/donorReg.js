const mongoose = require('mongoose')

const donorSchema = new mongoose.Schema({
     fullname:{
        type:String,
        trim:true
     },
     email:{
        type:String,
        unique:true,
        lowercase:true
     },
     contact:{
        type:Number,
        unique:true
     },
     address:{
        type:String,
     },
     city:{
        type:String
     },
     bgroup:{
        type:String
     }
},{timestamps:true})

module.exports = mongoose.model('Donor',donorSchema);
