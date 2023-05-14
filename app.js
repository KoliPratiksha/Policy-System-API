
require('dotenv/config')
const mongoose = require('mongoose')
const express = require('express')
const User_route = require('./route/userroute')
const Policy_route = require('./route/policyroute')
const cors = require('cors')

const app = express()

// midleware
app.use(express.json())
app.use(cors())

app.use('/api/user',User_route)
app.use('/api/policy',Policy_route)

// default 
app.get('/',(req,res)=>{
    res.send("This is home")
})

app.listen(process.env.PORT,()=>{
    console.log("Listening on port 5000");
})

async function main(){
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
      console.log(error.message);
    }
}
main()