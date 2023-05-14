const mongoose = require('mongoose')

const policyschema = mongoose.Schema({
    PolicyName:{
        type:String,
        required:true
    },
    YearOfLaunch:{
        type:Number,
        required:true
    },
    Sector:{
        type:String,
        required:true
    },
    createdat:{
        type:Date,
        default:Date.now()
    }
    
})

module.exports = mongoose.model('policy',policyschema)