const router = require('express').Router();
const {User,Image} = require("../../models")

// Shows all the images by user
router.get("/",(req,res)=>{
    User.findAll({
        include:[Image]
    }).then(dbImage=>{
        if(dbImage.length){
            res.json(dbImage)
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