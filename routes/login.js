const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', function (req, res) {
  res.render('../views/login')
})

router.post('/', (req, res, next) => {
  passport.authenticate('local-login', {
    successRedirect: '/home/home',
    failureRedirect: '/'
  })(req, res, next)
})

module.exports = router
