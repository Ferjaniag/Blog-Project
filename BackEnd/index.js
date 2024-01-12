const express = require("express")
const cors = require('cors');
const bodyParser = require("body-parser") 
const dotenv = require('dotenv')
const mongoose=require('mongoose')


var app=express() ; 
app.use(bodyParser.json()) 
app.use(express.json());
app.use(cors());
app.use('/getPhoto',express.static('./uploads')) ;


dotenv.config()

mongoose.connect(process.env.DB_URL).then(() => {

    console.log("Connceted to database")

}).catch((err) => {

    console.log(err)
})


const server=app.listen(process.env.PORT,(err)=>{
    if (err) {console.log(err) }
    else {
        console.log(`Listen en port : ${process.env.PORT}`)
    }
    
    })


    // Use Routes Here

    const comment=require('./Routes/comment') 
    const user=require('./Routes/user')
    const tweet=require('./Routes/tweet')

    app.use(comment) 
    app.use(user)
    app.use(tweet)
    



