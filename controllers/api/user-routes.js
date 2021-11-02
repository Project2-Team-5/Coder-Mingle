const router = require('express').Router();
const {User, Survey} = require("../../models");

// sign up a new user
router.post('/', async (req, res) => {
    try {
      console.log(req.body);

      const userData = await User.create(req.body);
  
      console.log(userData);

      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
router.post('/survey', async (req, res) => {
  try {
    const userData = await Survey.create({
      user_id: req.session.user_id,
      pref_gender: req.body.genderPref, 
      dating_for: req.body.datingFor,
      relationship_type: req.body.relationshipType,
      programmer_type: req.body.programmerType,
      worker_type: req.body.workerType,
      ideal_date: req.body.idealDate
    })
    console.log(userData)
    res.json(userData)
  } 
  catch(err) {
    console.log(err)
  }
})

// login an existing user
  router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { username: req.body.username } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });

// logout current user
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

  
module.exports = router