const express = require('express')
const router = express.Router()

const usersBLL = require('../BLL/usersBLL')

router.get('/', async (req,res) => {
    try {
        const allUsers = await usersBLL.getAllUsers()
        res.send(allUsers) 
    } catch (error) {
        res.status(500).send(error)  
    }
})

module.exports = router