const router = require('express').Router();
const {User,Image,Survey} = require("../../models")

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

// Adds new images to the the images table
router.post("/",(req,res)=>{
    if(!req.session.logged_in) {
        res.redirect('/login');
        return
    }
    Image.create({
        url:req.body.url,
        userId:req.session.user_id
    }).then(newImg=>{
        res.json(newImg)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

// Updates the user's profile picture
router.put("/",(req,res)=>{
    if(!req.session.logged_in) {
        res.redirect('/login');
        return
    }
    Survey.update(
        {
            profile_pic:req.body.profile_pic,
        },
        {
            where: {
                user_id:req.session.user_id
            }
        }
    ).then(updateImg=>{
        res.json(updateImg)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

//Deletes a user's picture
router.delete("/",(req,res)=>{
    if(!req.session.logged_in) {
        res.redirect('/login');
        return
    }
    Image.destroy({
        where: {
            id:req.body.id
        }
    }).then(delImg=>{
        res.json(delImg)
    }).catch(err=>{
        consol.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

module.exports = router