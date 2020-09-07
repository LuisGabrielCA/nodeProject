const express = require('express')
const router = express.Router()
const cadastro = require('./models/cadastro')

// formulario procurar cadastro
router.get('/search', function (req, res) {
  res.render('../views/search')
})

// procurar cadastro (resultado unico)
router.get('/searchResult', function (req, res) {
  var i = req.query.idusuarios
  var n = req.query.nome
  var t = req.query.telefone
  var c = req.query.celular

  if (i === '' && n === '' && t === '' && c === '') {
    res.render('search')
  }

  if (i !== '' && n === '' && t === '' && c === '') {
    cadastro.findAll({
      where: {
        idusuarios: req.query.idusuarios

      }
    }).then(function (cadastro) {
      res.render('searchResult', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (i === '' && n !== '' && t === '' && c === '') {
    cadastro.findAll({
      where: {
        nome: req.query.nome

      }
    }).then(function (cadastro) {
      res.render('searchResult', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (i === '' && n === '' && t !== '' && c === '') {
    cadastro.findAll({
      where: {
        telefone: req.query.telefone

      }
    }).then(function (cadastro) {
      res.render('searchResult', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (i === '' && n === '' && t === '' && c !== '') {
    cadastro.findAll({
      where: {
        celular: req.query.celular

      }
    }).then(function (cadastro) {
      res.render('searchResult', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else {
    res.render('search')
  }
})

module.exports = router
