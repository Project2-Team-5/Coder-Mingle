const router = require('express').Router();
const {User, Image, Matched_With, Survey} = require("../../models")
const sendError = require("../../utils/mail-settings.js")

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
        sendError(err)
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
        sendError(err)
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

// Shows the people someone has already matched with
router.get("/matchedwith", (req,res)=>{
    console.log(req.session.user_id)
    User.findByPk( req.session.user_id, {
        include:[{
            model: User, through: Matched_With, as: "matched_with",        
        }]
    }).then(user=>{
        if(user.matched_with.length){
            let matchUserList = user.matched_with.map( async matchUser => {
                let survey = await Survey.findOne({user_id: matchUser.id})
                let matchUserReturn = {
                    profile_pic: survey.profile_pic,
                    fullname: matchUser.first_name + ' ' + matchUser.last_name,
                    userId: matchUser.id
                }
                console.log(matchUserReturn);
                return matchUserReturn;
            })

            Promise.all(matchUserList).then(result => 
                res.json(result)
            )
        }
        else {
            res.status(404).json({message:"No Matches Found"})
        }
    }).catch(err=>{
        sendError(err)
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

module.exports = router