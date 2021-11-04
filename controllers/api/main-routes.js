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

// GET all users for homepage. Code in progress
router.get('/', async (req, res) => {
    try {
      const dbSurveyData = await User.findAll({
        include: [
          {
            model: Survey,
            attributes: ['first_name', 'last_name', 'gender', 'birthdate', 'worker', 'language', 'relationship', 'goal', 'ideal_date'],
          },
        ],
      });
  
      const allUsers = dbSurveyData.map((user) =>
        user.get({ plain: true })
      );
  
      res.render('main', {
        allUsers,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;

module.exports = router;
