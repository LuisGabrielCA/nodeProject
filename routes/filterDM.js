const express = require('express')
const router = express.Router()
const cadastro = require('../models/cadastro')

// filtrar
router.get('/filterDM', function (req, res) {
  res.render('../views/filterDM')
})

// resultado filtro
router.get('/resultFilterDM', function (req, res) {
  var d = req.query.dtDia
  var m = req.query.dtMes

  if (d === '' && m === '') {
    res.render('resultFilterDM')
  }

  if (d !== '' && m !== '') {
    cadastro.findAll({
      where: {
        dtDia: req.query.dtDia,
        dtMes: req.query.dtMes

      }
    }).then(function (cadastro) {
      res.render('resultFilterDM', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  }
  if (d !== '' && m === '') {
    cadastro.findAll({
      where: {
        dtDia: req.query.dtDia

      }
    }).then(function (cadastro) {
      res.render('resultFilterDM', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (d === '' && m !== '') {
    cadastro.findAll({
      where: {
        dtMes: req.query.dtMes

      }
    }).then(function (cadastro) {
      res.render('resultFilterDM', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  }
})
module.exports = router
