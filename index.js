//require requires commonjs as type
//import requires module as type
//go to .env or .env.sample to know the whole kundly/sensetive data of a project (443 23 80)
//route starts with /
//use dotenv to import env variables
//study about cors
//express now aceepts json by the app.use(express.json())
//accepts {%20} mean urlencoding
//mongoose help you talk to the database its kind of a oda or orm
//remove all thing after the ? in the mongodb dirver url as its not important to load the drivers 

const cors =require('cors')
const dotenv =require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const db = require('./utils/db');

app.use(cors({
    origin:process.env.BASE_URL,
    Credentials: true,
    methods:['GET','POST','DELETE','OPTIONS'],
    allowedHeaders:['Content-Type','Authorization']
}
))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//running database
db()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(process.env.PORT)
})