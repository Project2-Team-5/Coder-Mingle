const router = require('express').Router();
const {Survey} = require('../../models');

// This is test code
router.get('/main', async (req, res) => {
  try {
    const dbSurveyData = await Survey.findAll({
      include: [
        {
          model: Survey,
          attributes: ['first_name', 'last_name', 'birthdate', 'gender', 'pref_gender', 'bio', 'relationship', 'goal', 'language', 'worker', 'ideal_date', 'profile_pic', 'prorammer_type'],
        },
      ],
    });

    const surveys = dbSurveyData.map((survey) =>
      survey.get({ plain: true })
    );

    res.render('main', {
      surveys,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one survey response
router.get('/survey/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the gallery
    try {
      const dbSurveyData = await Survey.findByPk(req.params.id, {
        include: [
          {
            model: Survey,
            attributes: [
              'first_name', 
              'last_name',
              'birthdate',
              'gender',
              'pref_gender',
              'bio',
              'relationship',
              'goal',
              'language',
              'worker',
              'ideal_date',
              'profile_pic',
              'prorammer_type'
            ],
          },
        ],
      });
      const survey = dbSurveyData.get({ plain: true });
      res.render('survey', { survey, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
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
