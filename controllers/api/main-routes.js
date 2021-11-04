const express = require('express');
const router = express.Router();
const {Survey,User} = require('../../models');


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
  