const express = require('express')

const controllers = require('../controllers/auth')

const router = express.Router()

router.post('/', (req, res) => {
  controllers.login(req.body.username, req.body.password)
    .then(token => {
      res.status(200)
      res.end(token)
    })
    .catch(err => {
      res.status(400)
      res.end(err)
    })
})

module.exports = router