const express = require('express');
const app = express();
const cors =require('cors');
const bodyParser = require('body-parser')
const {startDatabase,isConnected} = require('./DB/Connection')
const {userRoutes} = require('./Route/User.routes')
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use('/',userRoutes)
app.get('/',(req,res)=>{
    res.send("Welcome to the amazing world of counter app 🧮")
})
app.get('/home',(req,res)=>{
    res.json({ message : (isConnected)?'DataBase is connected':'Database is not connected'})
})

startDatabase()
.then(
app.listen(3000,async()=>{
    console.log("Starting Server .....🚀");
    console.log("Server started running on port 3000 🏃‍♂️")
}))