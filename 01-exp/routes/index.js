const express = require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router()

router.get('/', (req, res) => {
  res.set('Content-Type', 'application/json')
  fs.createReadStream(path.join(__dirname, '../data/cities.json')).pipe(res)
})

router.get('/:id', (req, res) => {
  fs.readFile(path.join(__dirname, '../data/cities.json'), 'utf-8', (err, cities) => {

    if (err) {
      res.status(500)
      res.end('error')
      return
    }

    const citiesJson = JSON.parse(cities)

    const city = citiesJson.find(city => city.id === +req.params.id)

    if (city) {
      res.json(city)
    } else {
      res.status(404)
      res.end('end')
    }
  })
})

module.exports = router