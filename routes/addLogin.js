const express = require('express')
const router = express.Router()
const loginbd = require('../models/loginbd')

// formulario add cadastro
router.get('/addLogin', function (req, res) {
  res.render('../views/addLogin')
})

// cadastrar usuario
router.post('/addLogin', function (req, res) {
  loginbd.create({
    login: req.body.login,
    senha: req.body.senha,
    eAdmin: req.body.eAdmin

  }).then(function () {
    res.render('../views/addLoginSucess')
  }).catch(function (erro) {
    res.send('ERRO:' + erro)
  })
})

module.exports = router
