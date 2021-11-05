// An API route to show us any logged errors.

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

router.get("/session",(req,res)=>{
    res.json(req.session)
})

module.exports = router