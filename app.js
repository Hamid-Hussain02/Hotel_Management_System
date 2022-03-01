const bodyParser =require('body-parser')
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken')

const userRoutes =require('./routers/user')

const multiParty =require('connect-multiparty')

require('dotenv').config();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(multiParty())

PORT = process.env.PORT || 3000;



app.use('/api/users',userRoutes)

app.listen(PORT, () => {
    console.log(`listing on http://127.0.0.1:${process.env.PORT}`)
})

// app.post('/api/posts',veriftyToken,(req,res)=>{
//     jwt.verify(req.token,'secretKey',(err,authData)=>{
//         if(err){
//             res.sendStatus(403)
//         }else{
//             res.json({
//                 message:"jlsdjf",
//                 authData
//             })
//         }
//     })
   
// })

// app.post('/api/login',(req,res)=>{
//     jwt.sign({},'secretKey',(err,token)=>{
//         res.json({token:token})
//     })
// })

// function veriftyToken(req,res,next){
//     const bearerHeader = req.headers['authorization'];
//     console.log("innnnn")
//     if(typeof bearerHeader !== 'undefined'){
//         console.log("in")
//         const brearer =  bearerHeader.split(' ')
//         const brearerToken= brearer[1]
//         req.token=brearerToken
//         next()
//     }else{
//         res.sendStatus(403)
//     }
// }
