const express = require('express')

const controllers = require('../controllers/cities')
const auth = require('../middlewares/auth')

const router = express.Router()

// router.post(auth)

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

router.post('/', auth, (req, res) => {
  controllers.addCity(req.body)
    .then(() => {
      res.status(200)
      res.end('Saved')
    })
    .catch(err => {
      console.log(err)
      res.status(500)
      res.end('error')
    })
})

module.exports = router