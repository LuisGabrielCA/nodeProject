const express = require('express')
const router = express.Router()
const cadastro = require('../models/cadastro')

router.get('/listUser/:idusuarios', function (req, res) {
  const user = cadastro.findAll({
    where: {
      idusuarios: req.params.idusuarios
    }
  })
  res.render('../views/listUser', { user: user[0] })
})

module.exports = router
