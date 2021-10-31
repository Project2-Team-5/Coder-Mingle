const {User} = require("../models")

const userData = [
    {
        first_name: "Viriato",
        last_name: "Davidson",
        username: "Viriato123",
        email: "Viriato@Davidson.com",
        password: "password"
    },
    {
        first_name: "Aritz",
        last_name: "Toller",
        username: "Aritz123",
        email: "Aritz@Toller.com",
        password: "password"
    },
    {
        first_name: "Mor",
        last_name: "Pinto",
        username: "Mor123",
        email: "Mor@Pinto.com",
        password: "password"
    },
    {
        first_name: "Eugeneia",
        last_name: "Lind",
        username: "Eugeneia123",
        email: "Eugeneia@Lind.com",
        password: "password"
    },
    {
        first_name: "Silvia",
        last_name: "Fausti",
        username: "Silvia123",
        email: "Silvia@Fausti.com",
        password: "password"
    },
    {
        first_name: "Morwenna",
        last_name: "Simmon",
        username: "Morwenna123",
        email: "Morwenna@Simmon.com",
        password: "password"
    }
]

const seedUsers = () => User.bulkCreate(userData,{individualHooks:true})

module.exports = seedUsers