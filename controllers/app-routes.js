const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// landing page, direct to login page if not login
router.get('/', async (req, res) => {
  if(req.session.logged_in){
  res.redirect('/profile');
  } else {
    res.render('landingPage');
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        // include: [{ model: User }],
      });      

      const user = userData.get({ plain: true });
      console.log(user)
      res.render('profile',{
        user,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // router.get('/profile/:id', async (req, res) => {
  //   try {
  //     const profileData = await Profile.findByPk(req.params.id, {
  //       include: [
  //         {
  //           model: User,
  //           attributes: ['username'],
  //         },
  //       ],
  //     });
  
  //     const profileOwner = profileData.get({ plain: true });
  
  //     res.render('profile', {
  //       ...profileOwner,
  //       logged_in: req.session.logged_in
  //     });
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });
  
  router.get('/login', (req, res) => {
    // TODO: should redirect to main page, this is for testing purpose
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });


  module.exports = router;