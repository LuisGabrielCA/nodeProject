const express = require('express')
const router = express.Router()
const loginbd = require('../models/loginbd')

router.get('/findLogin', function (req, res) {
  loginbd.findAll().then(function (loginbd) {
    res.render('findLogin', { loginbd: loginbd })
  }).catch(function (erro) {
    res.send('ERRO: ' + erro)
  })
})

router.get('/delLogin/:id', function (req, res) {
  const id = req.params.id

  loginbd.destroy({
    where: { id: id && id !== 1 }
  }).then(function () {
    res.render('../views/delUser')
  }).catch(function (erro) {
    res.send('Cadastro não deletado: ' + erro)
  })
})

module.exports = router
