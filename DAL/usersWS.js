const axios = require('axios')

const url = 'https://jsonplaceholder.typicode.com/users?_limit=2';

const getUsersFromWS = async () => {
    return axios.get(url)
}

module.exports = {getUsersFromWS}