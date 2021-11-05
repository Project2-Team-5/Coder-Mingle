const router = require('express').Router();
const {User, Image, Matched_With, Survey, First_Match, Second_Match} = require("../../models")
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

//When a pending match is approved this moves them from the first_match to second_match tables.
router.delete("/pending/aprove",(req,res)=>{
    First_Match.destroy({
        where: {
            user_1:req.session.user_id,
            user_2:req.body.user_2
        }
    }).then(delMatch=>{
        Second_Match.create({
            user_1:req.session.user_id,
            user_2:req.body.user_2
        }).then(createMatch=>{
            res.json(delMatch + createMatch)
        }).catch(err=>{
            console.log(err)
            res.status(500).json({message:"An Error Occured",err:err})
        })
    }).catch(err=>{
        sendError(err)
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

//When a pending match is rejected this removes the match from the first_match table
router.delete("/pending/reject",(req,res)=>{
    First_Match.destroy({
        where: {
            user_1:req.session.user_id,
            user_2:req.body.user_2
        }
    }).then(delMatch=>{
        res.json(delMatch)
    }).catch(err=>{
        sendError(err)
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

//When an approved match is removed this deletes it from the second match table.
router.delete("/approved",(req,res)=>{
    Second_Match.destroy({
        where: {
            user_1:req.session.user_id,
            user_2:req.body.user_2
        }
    }).then(delMatch=>{
        res.json(delMatch)
    }).catch(err=>{
        sendError(err)
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

module.exports = router