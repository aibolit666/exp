const fs = require('fs')
const path = require('path')

const util = require('util')

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

const pathToAdmins = path.join(__dirname, '../data/admins.json')

function getAdmins() {
  return readFile(pathToAdmins, 'utf-8')
    .then(jsonAdmins => JSON.parse(jsonAdmins))
}

function login(login, pass) {
  return getAdmins()
    .then(admins => {
      const admin = admins.find(admin => admin.password === pass && admin.username === login)

      if (admin) {
        return process.env.SECRET_TOKEN
      } else {
        return Promise.reject('Invalid username or password')
      }
    })
}

module.exports = {
  login,
  getAdmins
}