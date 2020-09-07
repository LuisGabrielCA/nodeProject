const express = require('express')
const router = express.Router()

router.get('/home', function (req, res) {
  res.render('../views/home')
})

module.exports = router
