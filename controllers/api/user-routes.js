const router = require('express').Router();
const {User,Post,Survey} = require("../../models")
const sendError = require("../../utils/mail-settings.js")

router.get("/",(req,res) => {
    User.findAll({
        include:[Survey]
    }).then(dbUser=>{
        if(dbUser.length){
            res.json(dbUser)
        }
        else {
            res.status(404).json({message:"No Users Found"})
        }
    }).catch(err=>{
        sendError(err)
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})


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
      sendError(err)
      res.status(400).json(err);
    }
  });

// Create survey
router.post('/survey', async (req, res) => {
  try {
    const userData = await Survey.create({
      profile_pic: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
      userId: req.session.user_id,
      gender: req.body.gender,
      pref_gender: req.body.genderPref, 
      goal: req.body.datingFor,
      relationship: req.body.relationshipType,
      language: req.body.language,
      birthdate: req.body.birthdate,
      programmer_type: req.body.programmerType,
      worker: req.body.workerType,
      ideal_date: req.body.idealDate,
      bio:req.body.bio
    })
    console.log(userData)
    res.json(userData)
  } 
  catch(err) {
    sendError(err)
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
      sendError(err)
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