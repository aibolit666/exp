const fs = require('fs')
const path = require('path')

const util = require('util')

const readFile = util.promisify(fs.readFile)

function getCities() {
  return readFile(path.join(__dirname, '../data/cities.json'), 'utf-8')
    .then(jsonCities => JSON.parse(jsonCities))
}

function getCity(id) {
  return getCities().then(cities => cities.find(city => city.id === id))
}

module.exports = { getCities, getCity }