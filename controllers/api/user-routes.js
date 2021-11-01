const router = require('express').Router();
const {User,Profile,Post,Match} = require("../../models")

router.get("/",(req,res) => {
    User.findAll({
        include:[Profile]
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

module.exports = router