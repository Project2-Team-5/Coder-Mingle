const router = require('express').Router();
const {User} = require("../../models")

// Shows the first matches
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

// Shows the second matches
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

// Shows the people someone has already matched with
router.get("/matchedwith",(req,res)=>{
    User.findAll({
        include:[{model: User, as: "matched_with"}]
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