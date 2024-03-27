const express = require('express')
const router = express.Router()
const {Users} = require("../models");

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

module.exports = router