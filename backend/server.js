const express= require('express')
const dotenv= require('dotenv').config()
const router=express.Router()






const app=express()

app.get('/',function(req,res){
   res.send('hi')
})

const port=process.env.PORT || 5000
app.listen(port,()=>console.log(port))