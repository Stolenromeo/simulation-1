const express= require('express')
const bodyPars= require('body-parser')
const Ctrl= require('./controller')
const massive= require('massive')
require('dotenv').config()

const app=express();

app.use(bodyPars.json())
const port=4000

massive(process.env.CONNECTION_STRING).then(db=> app.set('db', db)).catch(err=>{console.log("there was an error connecting to DB:", err)
})

app.listen(port, ()=>{
    console.log('Hey, Listen!', port)
})
