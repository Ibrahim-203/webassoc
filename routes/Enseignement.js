const express = require('express')
const router = express.Router()
const {Enseignements} = require("../models");

router.get('/',async (req,res)=>{
    const lisOfEnseignements = await Enseignements.findAll();
   res.json(lisOfEnseignements);
})

router.post('/',async (req,res)=>{
    const newEnseignement = req.body;
    await Enseignements.create(newEnseignement);
    res.json("Enseignement enregistrer");
}) 
router.delete('/:id',async (req,res)=>{
   const id = req.params.id
    await Enseignements.destroy({
        where : {
            id: id,
        }
    })
    res.json("Enseignement supprimer")
})  
 
module.exports = router 