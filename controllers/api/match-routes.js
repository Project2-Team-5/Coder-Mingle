const router = require('express').Router();
const {User,Profile,Post,Match} = require("../../models")

router.get("/first",(req,res)=>{
    User.findAll({
        include:[{model: User, as: "match_one"}]
    }).then(dbMatch=>{
        if(dbMatch.length){
            res.json(dbMatch)
        }
        else {
            res.status(404).json({message:"No Matches Found"})
        }
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

router.get("/second",(req,res)=>{
    User.findAll({
        include:[{model: User, as: "match_two"}]
    }).then(dbMatch=>{
        if(dbMatch.length){
            res.json(dbMatch)
        }
        else {
            res.status(404).json({message:"No Matches Found"})
        }
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

module.exports = router