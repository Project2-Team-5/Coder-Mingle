const router = require('express').Router();
const errors = require("../../utils/errorlog.json")

router.get("/",(req,res)=>{
    if (errors.length) {
        res.json(errors)
    }
    else {
        res.status(404).json({message:"No Errors Found"})
    }
})

module.exports = router