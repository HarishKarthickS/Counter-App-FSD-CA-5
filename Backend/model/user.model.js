const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id:{type:Number,required:true,unique:true},
    username:{type:String,required:true},
    hobby:{type:String,required:true}
},
{
    timestamps:true
})

module.exports = mongoose.model('users',UserSchema)