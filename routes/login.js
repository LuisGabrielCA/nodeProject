const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', function (req, res) {
  res.render('../views/login')
})

router.post('/', (req, res, next) => {
  passport.authenticate('loca-vai', {
    successRedirect: '/home/home',
    failureRedirect: '/'
  })(req, res, next)
})

module.exports = router
