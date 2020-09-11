const express = require('express')
const router = express.Router()
const cadastro = require('../models/cadastro')

router.get('/listUser/:idusuarios', async function (req, res) {
  const usuario = await cadastro.findAll({
    where: {
      idusuarios: req.params.idusuarios
    }
  })
  res.render('../views/listUser', { usuario: usuario[0] })
})

module.exports = router
