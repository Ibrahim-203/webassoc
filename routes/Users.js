const express = require('express')
const router = express.Router()
const {Users} = require("../models");

const {sign} = require('jsonwebtoken')

router.get('/',async (req,res)=>{
    const lisOfPosts = await Users.findAll();
   res.json(lisOfPosts);
})

// Async means that we are waiting for the successfuly of the request
router.post('/',async (req,res)=>{
    const newUsers = req.body;
    await Users.create(newUsers);
    res.json(newUsers);
}) 

router.post('/login',async (req,res)=>{
    const {username, password} = req.body;
    const user = await Users.findOne({where:{username:username, password:password}})

    if(user){
        const accessToken = sign({username:user.username, id:user.id},"ImportanteSecretKey")
        res.json(accessToken )
    }else{
        res.json({error:"User doesn't exist"})
    }
}) 

module.exports = router