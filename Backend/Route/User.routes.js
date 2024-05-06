const express = require('express')
const userRoutes = express.Router();
const userModal = require('../model/user.model')

userRoutes.get('/api/fetchall',async(req,res)=>{
    try{
        const users = await userModal.find();
        res.status(200).send(users)
    }catch(err){
        console.log(err);
        res.status(500).send(err)
    }
})
userRoutes.get('/api/fetchbyid/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const user = await userModal.findOne({id:id});
        res.status(200).send(user)
    }catch(err){
        console.log(err);
        res.status(500).send(err)
    }
})
userRoutes.post('/api/adduser',async(req,res)=>{
    try{
        const {id,username,hobby} = req.body;
        const user = await userModal.create({id,username,hobby})
        res.status(201).send(`Successfully added user ${user}`)
    }catch(err){
        console.log(err);
        res.status(500).send(err)
    }
})
module.exports= {userRoutes}