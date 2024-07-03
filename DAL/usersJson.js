const jsonfile = require('jsonfile')
const dataPath = 'data/users.json'

const getJsonUsers = () => {
    return jsonfile.readFile(dataPath)
}

module.exports = {getJsonUsers}