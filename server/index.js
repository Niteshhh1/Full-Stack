const express = require('express')
const cors = require('cors')
const DBConnect = require('./DB/DBConnect')
const donorRouter = require('./routes/donorAuth')
const patientRouter = require('./routes/patientAuth')

const app = express();
app.use(cors())
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Chor hon!")
})

app.use('/api',donorRouter)
app.use('/api',patientRouter)
DBConnect();

app.listen(5000)