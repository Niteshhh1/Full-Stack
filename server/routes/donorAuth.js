const express = require('express');
const Donor = require('../models/donorReg')
const router = express.Router();

router.post('/register', async (req,res)=>{
    try {
        const {fullname,email,contact,address,city,bgroup} = req.body;
        
        const existingUser = await Donor.findOne({email})
        if(existingUser)
        return res.status(409).json({message:"User already Registered"})

        const newDonor = new Donor({fullname,email,contact,address,city,bgroup});

        const saveDonor = await newDonor.save();

        return res.status(200).json({user:saveDonor,message:"Registered successfully"})

    } catch (error) {
        console.log("Nahi chala");
       return res.send(500).json({message:"Registration failed"})
    }
})

router.post('/login',async (req,res)=>{
    const {email} = req.body
     
    const donor = await Donor.findOne({email});

    if(!donor)
    return res.status(404).json({message:"User not found"})

    res.status(200).json({
      message: "Login successful",
      user: {
        id: donor._id,
        fullname: donor.fullname,
        email: donor.email,
        contact: donor.contact,
        address: donor.address,
        city: donor.city,
        bgroup: donor.bgroup
      }
    });
})

module.exports = router