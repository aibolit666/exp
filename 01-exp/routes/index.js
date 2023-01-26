const express = require('express')

const controllers = require('../controllers/cities')

const router = express.Router()

router.get('/', (req, res) => {
  controllers.getCities()
    .then(cities => res.json(cities))
    .catch(err => {
      console.log(err);
      res.status(500)
      res.end('error')
    })
})

router.get('/:id', (req, res) => {
  controllers.getCity(+req.params.id)
    .then(city => res.json(city))
    .catch(err => {
      console.log(err);
      res.status(500)
      res.end('error')
    })
})

module.exports = router