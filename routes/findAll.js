const express = require('express')
const router = express.Router()
const cadastro = require('../models/cadastro')

router.get('/findAll', function (req, res) {
  cadastro.findAll().then(function (cadastro) {
    res.render('findAll', { cadastro: cadastro })
  }).catch(function (erro) {
    res.send('ERRO: ' + erro)
  })
})

module.exports = router
