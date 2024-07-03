const User = require('../models/usersModel')
const usersWS = require('../DAL/usersWS')
const usersJson = require('../DAL/usersJson')

const getAllUsers = async () => {
    // WS
    const {data:dataWS} = await usersWS.getUsersFromWS()

    // Json
    const {users:dataUserJson} = await usersJson.getJsonUsers()

    // MongoDB
    const dataUser = await User.find()

    const response = dataWS.map(user => {
        const phoneFilter = dataUserJson.find((jsUser) => jsUser.id === user.id)
        const addresFilter = dataUser.find((wsUser) => wsUser.id === user.id)

        return {
            "id": user.id,
            "name": user.name,
            "email": user.email,
            "phone": phoneFilter.phone,
            "address": {
                "city": addresFilter.city,
                "country": addresFilter.country
            }
        }
    })

    return response
}

module.exports = {getAllUsers}