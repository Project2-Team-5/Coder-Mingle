const {Profile} = require("../models")

const profileData = [
    {
        UserId: 1,
        birthdate: "1980-04-29",
        gender: "male",
        pref_gender: "female",
        bio: "This is where someone will talk about themselves."
    },
    {
        UserId: 2,
        birthdate: "1982-01-04",
        gender: "male",
        pref_gender: "male",
        bio: "This is where someone will talk about themselves."
    },
    {
        UserId: 3,
        birthdate: "1992-03-20",
        gender: "male",
        pref_gender: "both",
        bio: "This is where someone will talk about themselves."
    },
    {
        UserId: 4,
        birthdate: "1998-06-14",
        gender: "female",
        pref_gender: "male",
        bio: "This is where someone will talk about themselves."
    },
    {
        UserId: 5,
        birthdate: "1999-04-08",
        gender: "female",
        pref_gender: "female",
        bio: "This is where someone will talk about themselves."
    },
    {
        UserId: 6,
        birthdate: "2000-10-06",
        gender: "female",
        pref_gender: "both",
        bio: "This is where someone will talk about themselves."
    },
    {
        UserId: 7,
        birthdate: "1983-09-29",
        gender: "male",
        pref_gender: "male",
        bio: "This is where someone will talk about themselves."
    },
    {
        UserId: 8,
        birthdate: "1985-08-04",
        gender: "female",
        pref_gender: "female",
        bio: "This is where someone will talk about themselves."
    }
]

const seedProfiles = () => Profile.bulkCreate(profileData)

module.exports = seedProfiles