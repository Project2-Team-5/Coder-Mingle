const {User, Survey} = require("../models")



const userData = [
    {
        first_name: "Jonathan",
        last_name: "Newman",
        username: "specsnstats",
        email: "specs@stats.com",
        password: "password",
        has_survey: true
    },
    {
        first_name: "Kellie",
        last_name: "Kumasaka",
        username: "kale3",
        email: "kellie@kale.com",
        password: "password",
        has_survey: true
    },
    {
        first_name: "Sherry",
        last_name: "Zheng",
        username: "sherryzheng2018",
        email: "sherry@sherry.com",
        password: "password",
        has_survey: true
    },
    {
        first_name: "Ryan",
        last_name: "Allen",
        username: "pines",
        email: "ryan@pines.com",
        password: "password",
        has_survey: true
    },
    {
        first_name: "Charlotte",
        last_name: "Hulseman",
        username: "chulseman",
        email: "char@char.com",
        password: "password",
        has_survey: true
    },
    {
        first_name: "Amay",
        last_name: "Sharma",
        username: "asharma",
        email: "amay@amay.amay",
        password: "password",
        has_survey: true
    },
    {
        first_name: "Eliezer",
        last_name: "Gonzales",
        username: "egonzales",
        email: "eli@eli.com",
        password: "password",
        has_survey: true
    },
    {
        first_name: "Julian",
        last_name: "Voros",
        username: "jvoros",
        email: "julian@julian.com",
        password: "password",
        has_survey: true
    },
    {
        first_name: "Zach",
        last_name: "Smith",
        username: "zsmith",
        email: "zach@zach.com",
        password: "password",
        has_survey: true
    },
    {
        first_name: "Louis",
        last_name: "Coleman",
        username: "coleloui",
        email: "louis@louis.com",
        password: "password",
        has_survey: true
    },
    {
        first_name: "Brett",
        last_name: "Belka",
        username: "bbelka",
        email: "brett@brett.com",
        password: "password",
        has_survey: true
    },
    {
        first_name: "Michael",
        last_name: "Baynon",
        username: "mbaynon",
        email: "mike@mike.com",
        password: "password",
        has_survey: true
    }
]

const seedUsers = () => User.bulkCreate(userData,{individualHooks:true})

module.exports = seedUsers