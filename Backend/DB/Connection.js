const mongoose = require('mongoose')
require('dotenv').config();

const startDatabase = async () =>{
    try{
        const connect = await mongoose.connect(process.env.MongoDB_URI)
        console.log("Connected to MongoDB Database 🧑‍💻")
    }
    catch(err){
        console.log(err)
    }
}
const isConnected = async ()=>{
    return(mongoose.connection.readystate === 1)
}

module.exports={startDatabase,isConnected} ;