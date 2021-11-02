const {Survey} = require("../models")

const surveyData = [
    {
        UserId: 1,
        birthdate: "1980-04-29",
        gender: "male",
        pref_gender: "female",
        bio: "This is where someone will talk about themselves.",
        relationship: "Marriage and kids",
        goal: "Long-term relationship",
        language: "JavaScript",
        worker: "Work and energy drinks all night, everynight",
        ideal_date: "Stay in, get takeout, watch a movie or play video games",
        profile_pic: 1
    },
    {
        UserId: 2,
        birthdate: "1982-01-04",
        gender: "male",
        pref_gender: "male",
        bio: "This is where someone will talk about themselves.",
        relationship: "Marriage but no kids",
        goal: "Just looking for something casual",
        language: "C++",
        worker: "Hard worker but I need my social life balance",
        ideal_date: "Go out to a nice restaurant or picnic and stare into each other’s eyes",
        profile_pic: 2
    },
    {
        UserId: 3,
        birthdate: "1992-03-20",
        gender: "male",
        pref_gender: "both",
        bio: "This is where someone will talk about themselves.",
        relationship: "Kids but no marital commitment",
        goal: "I need programming help",
        language: "Python",
        worker: "Bare minimum to get the work done then do other hobbies",
        ideal_date: "Go out with a group of friends for a game night or drinks",
        profile_pic: 3
    },
    {
        UserId: 4,
        birthdate: "1998-06-14",
        gender: "female",
        pref_gender: "male",
        bio: "This is where someone will talk about themselves.",
        relationship: "None of the above",
        goal: "None of the above",
        language: "HTML",
        worker: "None of the above",
        ideal_date: "Hit the club, take some shots, initiate the bender",
        profile_pic: 4
    },
    {
        UserId: 5,
        birthdate: "1999-04-08",
        gender: "female",
        pref_gender: "female",
        bio: "This is where someone will talk about themselves.",
        relationship: "Marriage and kids",
        goal: "Long-term relationship",
        language: "JavaScript",
        worker: "Work and energy drinks all night, everynight",
        ideal_date: "Stay in, get takeout, watch a movie or play video games",
        profile_pic: 5
    },
    {
        UserId: 6,
        birthdate: "2000-10-06",
        gender: "female",
        pref_gender: "both",
        bio: "This is where someone will talk about themselves.",
        relationship: "Marriage but no kids",
        goal: "Just looking for something casual",
        language: "C++",
        worker: "Hard worker but I need my social life balance",
        ideal_date: "Go out to a nice restaurant or picnic and stare into each other’s eyes",
        profile_pic: 6
    },
    {
        UserId: 7,
        birthdate: "1983-09-29",
        gender: "male",
        pref_gender: "male",
        bio: "This is where someone will talk about themselves.",
        relationship: "Kids but no marital commitment",
        goal: "I need programming help",
        language: "Python",
        worker: "Bare minimum to get the work done then do other hobbies",
        ideal_date: "Go out with a group of friends for a game night or drinks",
        profile_pic: 7
    },
    {
        UserId: 8,
        birthdate: "1985-08-04",
        gender: "female",
        pref_gender: "female",
        bio: "This is where someone will talk about themselves.",
        relationship: "None of the above",
        goal: "None of the above",
        language: "HTML",
        worker: "None of the above",
        ideal_date: "Hit the club, take some shots, initiate the bender",
        profile_pic: 8
    }
]

const seedSurvey = () => Survey.bulkCreate(surveyData)

module.exports = seedSurvey