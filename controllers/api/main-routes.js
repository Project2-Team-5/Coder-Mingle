const express = require('express');
const router = express.Router();
const {Main, User} = require('../../models');
const sendError = require("../../utils/mail-settings.js")

router.get("/",(req,res)=>{
    User.findAll().then(userData=>{
        res.json(userData)
    }).catch(err=>{
        sendError(err)
        console.log(err);
        res.status(500).json({err})
    })
})

router.get("/:id",(req,res)=>{
    User.findByPk(req.params.id).then(singleUser=>{
        if(singleUser){
            res.json(singleUser)
        } else {
            res.status(404).json({err:"no user found"})
        }
    }).catch(err=>{
        sendError(err)
        console.log(err);
        res.status(500).json({err})
    })
})

router.post("/",(req,res)=>{
    User.create({
        flavor:req.body.flavor,
        image:req.body.image
    }).then(newLacroix=>{
        res.json(newLacroix)
    }).catch(err=>{
        sendError(err)
        console.log(err);
        res.status(500).json({err})
    })
})

// router.put("/:id",(req,res)=>{
//     LaCroix.update({
//         flavor:req.body.flavor,
//         image:req.body.image
//     },{
//         where:{
//             id:req.params.id
//         }
//     }).then(updatedData=>{
//         if(updatedData[0]){
//             res.json(updatedData)
//         } else {
//             res.status(404).json({err:"no such flavor found!"})
//         }
//     }).catch(err=>{
//         console.log(err);
//         res.status(500).json({err})
//     })
// })

// router.delete("/:id",(req,res)=>{
//     LaCroix.destroy({
//         where:{
//             id:req.params.id
//         }
//     }).then(deletedLacroix=>{
//         if(deletedLacroix){
//             res.json(deletedLacroix)
//         } else {
//             res.status(404).json({err:"no such flavor found!"})
//         }
//     }).catch(err=>{
//         console.log(err);
//         res.status(500).json({err})
//     })
// })

module.exports = router;