const router = require('express').Router();
const { User, Survey, Image, Matched_With } = require('../models');
const withAuth = require('../utils/auth');
const getCurrentUserOrById = require('../utils/userUtil')
const sendError = require("../utils/mail-settings.js")
const newMatches = require("../utils/newMatches")
const sequelize = require('../config/connection')
const Sequelize = require('sequelize');
const Op = Sequelize.Op

// landing page, direct to login page if not login
router.get('/', async (req, res) => {
  if(req.session.logged_in){
  res.redirect('/profile');
  } else {
    res.render('homepage');
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

  router.get('/profile/edit', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Survey }],
      });      
      
      const user = userData.get({ plain: true });
      console.log(user)
      // render to handlebar "profileEdit"
      res.render('profileEdit',{
        user,
        logged_in: req.session.logged_in,
        helpers: {
          radioBtnHelper: function (currentValue, selectedValue) { 
            return currentValue == selectedValue ? "checked" : ""
          }
        }
      });
    } catch (err) {
      sendError(err)
      res.status(500).json(err);
    }
  });

  // Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    newMatches(req,res)
    let userId = getCurrentUserOrById(req)
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(userId, {
      attributes: { exclude: ['password'] },
      include: [Survey,Image],
    });      
    
    const user = userData.get({ plain: true });
    console.log(user)
    res.render('profile',{
      user,
      logged_in: req.session.logged_in,
      isSelf: userId === req.session.user_id,
      selectedUserId: userId
    });
  } catch (err) {
    // sendError(err)
    console.log(err)
    res.status(500).json(err);
  
  }
});

  router.put('/profile', withAuth, async (req, res) => {
    try {
      // update profile based on its user id
      Survey.update(
        // update the field
        req.body,
        {
          // update condition 
          where: {
            user_id:req.session.user_id
          }
        }
      ).then((updateProfile)=>{
        res.status(200).json(updateProfile);     
      })

    } catch (err) {
      sendError(err)
      res.status(400).json(err);
    }
  });
  
  router.get('/', (req, res) => {
  res.render('homepage');
  })

// Get & return survey data
  router.get('/survey', withAuth, (req, res) => {
      res.render('survey');
  });

////////// Test code for main page
router.get('/main', async (req, res) => {
  try {
    const allUserData = await User.findAll({
      include: [
        {
          model: Survey,
          attributes: ['birthdate', 'gender', 'pref_gender', 'bio', 'relationship', 'goal', 'language', 'worker', 'ideal_date', 'profile_pic', 'programmer_type'],
        },
      ],
    });

    const users = allUserData.map((user) =>
      user.get({ plain: true })
    );
    console.log(users)
    res.render('mainPage', {
      users,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

////////////

  router.get("/userimages",withAuth, (req,res) => {
    let userId = getCurrentUserOrById(req)
    Image.findAll({
      where: {
        userId: userId
      }
    }).then(imgData=>{
      const hbsImg = imgData.map(img=>img.get({plain:true}))
      res.render("userimages",{
        img:hbsImg,
        isSelf: userId == req.session.user_id
      })
    })
  })

  router.get("/userimages/:id", withAuth, (req,res)=>{
    let userId = getCurrentUserOrById(req)
    Image.findByPk(req.params.id)
    .then(imgData=>{
      const hbsImg = imgData.get({plain:true})
      res.render("userimagesbyid",{
        img:hbsImg,
        isSelf: userId == imgData.userId
      });
    }); 
  })

// Gets the pending and aproved matches and renders them
router.get("/matching", withAuth, (req,res)=>{
  newMatches(req,res)
  User.findOne({
    where: {
      id:req.session.user_id
    },
    include:[{model: User, as: "match_one"}]
  }).then(userData=>{
    const hbsUser = userData.match_one.map(data=>data.get({plain:true}))
    const userId = []
    for (let i = 0; i < hbsUser.length; i++) {
      userId.push(hbsUser[i].id)        
    }
    Survey.findAll({
      where: {
        user_id: {
          [Op.in]:userId
        }
      },
      include:[User]
    }).then(surveyData=>{
      const hbsSurvey = surveyData.map(survey=>survey.get({plain:true}))
      User.findOne({
        where: {
          id:req.session.user_id
        },
        include:[{model: User, as: "match_two"}]
      }).then(twoData=>{
        const hbsTwo = twoData.match_two.map(two=>two.get({plain:true}))
        const twoID = []
        for (let i = 0; i < hbsTwo.length; i++) {
          twoID.push(hbsTwo[i].id)               
        }
        Survey.findAll({
          where: {
            user_id: {
              [Op.in]:twoID
            }
          },
          include:[User]
        }).then(twoSurveyData=>{
          const hbsTwoSurvey = twoSurveyData.map(twosurvey=>twosurvey.get({plain:true}))
          res.render("matching",{
            pending:hbsSurvey,
            approved:hbsTwoSurvey,
            logged_in: req.session.logged_in
          })
        })
      })
    })
  })
})

//Shows the profile of an approved match
router.get("/matching/:id", withAuth, (req,res)=>{
  User.findOne({
      where: {
          id:req.params.id
      },
      include: [Survey],
      attributes:{
          include: [
              [sequelize.fn('date_format', sequelize.col('birthdate'), '%m-%d-%Y'), 'birthdate']
          ]
      }
  }).then(userData=>{
      const hbsUser = userData.get({plain:true})
      res.render("appmatch",{
          user:hbsUser,
          logged_in: req.session.logged_in
      })
  })
})

//Shows the profile of a pending match
router.get("/pending/:id", withAuth, (req,res)=>{
  User.findOne({
    where: {
      id:req.params.id
    },
    include: [Survey],
    attributes:{
      include: [
          [sequelize.fn('date_format', sequelize.col('birthdate'), '%m-%d-%Y'), 'birthdate']
      ]
    }
  }).then(userData=>{
    const hbsUser = userData.get({plain:true})
    res.render("pending",{
      user:hbsUser,
      logged_in:req.session.logged_in,
    })
  })
})


  module.exports = router;