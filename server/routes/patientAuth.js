const express = require('express');
const router = express.Router();

router.post('/patient/form',(req,res)=>{
     const data = req.body;
     console.log(data);
     res.status(200).json({data,Message:"Chal gya ye bhi"})
})

module.exports = router