const router = require('express').Router();
const { User, Survey, Image, Matched_With } = require('../models');
const withAuth = require('../utils/auth');
const getCurrentUserOrById = require('../utils/userUtil')

// landing page, direct to login page if not login
router.get('/', async (req, res) => {
  if(req.session.logged_in){
  res.redirect('/profile');
  } else {
    res.render('homepage');
  }
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
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    let userId = getCurrentUserOrById(req)
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(userId, {
      attributes: { exclude: ['password'] },
      include: [Survey,Image],
    });      
    
    const user = userData.get({ plain: true });
    res.render('profile',{
      user,
      logged_in: req.session.logged_in,
      isSelf: userId === req.session.user_id,
      selectedUserId: userId
    });
  } catch (err) {
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
      res.status(400).json(err);
    }
  });
  
  router.get('/', (req, res) => {
  res.render('homePage');
  })

// Get & return survey data
  router.get('/survey', (req, res) => {
    if (req.session.logged_in) {
      res.render('survey');
      return;
    }
  
    res.render('login');
  });

  router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });

  // Get survey data, return to main
  router.get("/users",(req,res)=>{
    userData.findAll().then(userData=>{
        console.log(userData)
        console.log("=================")
        const allUserData = userData.map(item=>item.get({plain:true}))
        console.log(allUserData)
        return res.render("./main")
    })
})

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
        isSelf: userId === req.session.user_id
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
        isSelf: userId === imgData.userId
      });
    }); 
  })

  router.get("/matching", (req,res)=>{
    console.log(req.session.user_id)
    User.findByPk( req.session.user_id, {
        include:[{
            model: User, through: Matched_With, as: "matched_with",        
        }]
    }).then(user=>{
        if(user.matched_with.length){
            let matchUserList = user.matched_with.map( async matchUser => {
                let survey = await Survey.findByPk(matchUser.id)
                let matchUserReturn = {
                    profile_pic: survey.profile_pic,
                    fullname: matchUser.first_name + ' ' + matchUser.last_name,
                    userId: matchUser.id
                }
                // console.log(matchUserReturn);
                return matchUserReturn;
            })

            Promise.all(matchUserList).then(result => { 
              res.render("matching",{
                  userList: result,
                })
              }
            )
        }
        else {
            res.status(404).json({message:"No Matches Found"})
        }
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})


  module.exports = router;