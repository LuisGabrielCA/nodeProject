const express = require('express')
const router = express.Router()
const cadastro = require('../models/cadastro')

// filtrar
router.get('/filterStatus', function (req, res) {
  res.render('../views/filterStatus')
})

// resultado filtro
router.get('/resultFilterStatus', function (req, res) {
  var s = req.query.status

  if (s === '') {
    res.render('resultFilterStatus')
  } else {
    cadastro.findAll().then(function (cadastro) {
      res.render('resultFilterStatus', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  }
})

module.exports = router
