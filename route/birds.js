var express = require('express')
var router = express.Router()

router.use(function timeLog(req, res, next) {
  console.log('time', Date.now())
  next()
})
router.get('/', (req, res) => {
  res.send('bird index page')
})
router.get('/about', (req, res) => res.send('bird/about page'))

module.exports = router
