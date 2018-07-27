const express= require('express')
const bodyPars= require('body-parser')
const Ctrl= require('./controller')
const massive= require('massive')
require('dotenv').config()

const app=express();
const port=4000

app.use(bodyPars.json())

massive(process.env.CONNECTION_STRING).then(db=> app.set('db', db)).catch(err=>{console.log("there was an error connecting to DB:", err)
})

app.get('/api/products',Ctrl.read)
app.put('/api/products/:id',Ctrl.update)
app.post('/api/products',Ctrl.create)
app.delete('/api/products/:id',Ctrl.delete)

app.listen(port, ()=>{
    console.log('Hey, Listen!', port)
})
