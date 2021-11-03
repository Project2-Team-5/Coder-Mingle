const express = require('express');
const router = express.Router();
const {Survey,User} = require('../../models');

router.get("/",(req,res) => {
    User.findAll({
        include:[Survey]
    }).then(dbUser=>{
        if(dbUser.length){
            res.json(dbUser)
        }
        else {
            res.status(404).json({message:"No Users Found"})
        }
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})


module.exports = router;