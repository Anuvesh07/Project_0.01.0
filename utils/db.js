const mongoose =require('mongoose')
const dotenv = require('dotenv').config()


//export a function that connect to mongodb
const db = () =>{
    mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("connected to mongodb")
})
.catch(()=>{
    console.log("Error connecting with mongodb")
})
}

module.exports =db;