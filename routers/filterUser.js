const express = require('express')
const router = express.Router()
const cadastro = require('./models/cadastro')

// filtrar
router.get('/filterBr', function (req, res) {
  res.render('../views/filterBr')
})

// resultado filtro
router.get('/resultFilter', function (req, res) {
  var b = req.query.bairro
  var r = req.query.regiao
  var s = req.query.sexo
  var est = req.query.estadocivil
  var f = req.query.filhos

  if (b === '' && r === '' && s === '' && est === '' && f === '') {
    cadastro.findAll().then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  }

  if (b !== '' && r !== '' && s !== '' && est !== '' && f !== '') {
    cadastro.findAll({
      where: {
        bairro: req.query.bairro,
        regiao: req.query.regiao,
        sexo: req.query.sexo,
        estadocivil: req.query.estadocivil,
        filhos: req.query.filhos

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  }
  if (b === '' && r !== '' && s !== '' && est !== '' && f !== '') {
    cadastro.findAll({
      where: {
        regiao: req.query.regiao,
        sexo: req.query.sexo,
        estadocivil: req.query.estadocivil,
        filhos: req.query.filhos

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b !== '' && r === '' && s === '' && est === '' && f === '') {
    cadastro.findAll({
      where: {
        bairro: req.query.bairro

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b !== '' && r !== '' && s === '' && est === '' && f === '') {
    cadastro.findAll({
      where: {
        bairro: req.query.bairro,
        regiao: req.query.regiao

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b !== '' && r !== '' && s !== '' && est === '' && f === '') {
    cadastro.findAll({
      where: {
        bairro: req.query.bairro,
        regiao: req.query.regiao,
        sexo: req.query.sexo

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b !== '' && r !== '' && s !== '' && est !== '' && f === '') {
    cadastro.findAll({
      where: {
        bairro: req.query.bairro,
        regiao: req.query.regiao,
        sexo: req.query.sexo,
        estadocivil: req.query.estadocivil

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b !== '' && r === '' && s !== '' && est !== '' && f === '') {
    cadastro.findAll({
      where: {
        bairro: req.query.bairro,
        sexo: req.query.sexo,
        estadocivil: req.query.estadocivil

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b !== '' && r === '' && s === '' && est !== '' && f === '') {
    cadastro.findAll({
      where: {
        bairro: req.query.bairro,
        estadocivil: req.query.estadocivil

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b !== '' && r === '' && s === '' && est !== '' && f !== '') {
    cadastro.findAll({
      where: {
        bairro: req.query.bairro,
        estadocivil: req.query.estadocivil,
        filhos: req.query.filhos

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b !== '' && r === '' && s !== '' && est === '' && f === '') {
    cadastro.findAll({
      where: {
        bairro: req.query.bairro,
        sexo: req.query.sexo

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b !== '' && r === '' && s === '' && est === '' && f !== '') {
    cadastro.findAll({
      where: {
        bairro: req.query.bairro,
        filhos: req.query.filhos

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b !== '' && r !== '' && s === '' && est === '' && f !== '') {
    cadastro.findAll({
      where: {
        bairro: req.query.bairro,
        regiao: req.query.regiao,
        filhos: req.query.filhos

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b !== '' && r !== '' && s === '' && est !== '' && f === '') {
    cadastro.findAll({
      where: {
        bairro: req.query.bairro,
        regiao: req.query.regiao,
        estadocivil: req.query.estadocivil

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b !== '' && r === '' && s !== '' && est === '' && f !== '') {
    cadastro.findAll({
      where: {
        bairro: req.query.bairro,
        sexo: req.query.sexo,
        filhos: req.query.filhos

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b !== '' && r !== '' && s !== '' && est === '' && f !== '') {
    cadastro.findAll({
      where: {
        bairro: req.query.bairro,
        regiao: req.query.regiao,
        sexo: req.query.sexo,
        filhos: req.query.filhos

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  }

  if (b !== '' && r === '' && s !== '' && est !== '' && f !== '') {
    cadastro.findAll({
      where: {
        bairro: req.query.bairro,
        sexo: req.query.sexo,
        estadocivil: req.query.estadocivil,
        filhos: req.query.filhos

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r !== '' && s === '' && est === '' && f === '') {
    cadastro.findAll({
      where: {
        regiao: req.query.regiao

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b !== '' && r !== '' && s === '' && est === '' && f === '') {
    cadastro.findAll({
      where: {
        bairro: req.query.bairro,
        regiao: req.query.regiao

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b !== '' && r !== '' && s !== '' && est === '' && f === '') {
    cadastro.findAll({
      where: {
        bairro: req.query.bairro,
        regiao: req.query.regiao,
        sexo: req.query.sexo

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b !== '' && r !== '' && s !== '' && est !== '' && f === '') {
    cadastro.findAll({
      where: {
        bairro: req.query.bairro,
        regiao: req.query.regiao,
        sexo: req.query.sexo,
        estadocivil: req.query.estadocivil

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r !== '' && s !== '' && est !== '' && f === '') {
    cadastro.findAll({
      where: {
        regiao: req.query.regiao,
        sexo: req.query.sexo,
        estadocivil: req.query.estadocivil

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r !== '' && s === '' && est !== '' && f === '') {
    cadastro.findAll({
      where: {
        regiao: req.query.regiao,
        estadocivil: req.query.estadocivil

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r !== '' && s === '' && est !== '' && f !== '') {
    cadastro.findAll({
      where: {
        regiao: req.query.regiao,
        estadocivil: req.query.estadocivil,
        filhos: req.query.filhos

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r !== '' && s !== '' && est === '' && f === '') {
    cadastro.findAll({
      where: {
        regiao: req.query.regiao,
        sexo: req.query.sexo

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r !== '' && s === '' && est === '' && f !== '') {
    cadastro.findAll({
      where: {
        regiao: req.query.regiao,
        filhos: req.query.filhos

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r !== '' && s !== '' && est === '' && f !== '') {
    cadastro.findAll({
      where: {
        regiao: req.query.regiao,
        sexo: req.query.sexo,
        filhos: req.query.filhos

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  }

  if (b !== '' && r !== '' && s === '' && est !== '' && f !== '') {
    cadastro.findAll({
      where: {
        regiao: req.query.regiao,
        bairro: req.query.bairro,
        estadocivil: req.query.estadocivil,
        filhos: req.query.filhos

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r === '' && s !== '' && est === '' && f === '') {
    cadastro.findAll({
      where: {
        sexo: req.query.sexo

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r !== '' && s !== '' && est === '' && f === '') {
    cadastro.findAll({
      where: {
        sexo: req.query.sexo,
        regiao: req.query.regiao

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r === '' && s !== '' && est !== '' && f === '') {
    cadastro.findAll({
      where: {
        sexo: req.query.sexo,
        estadocivil: req.query.estadocivil

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r === '' && s !== '' && est !== '' && f !== '') {
    cadastro.findAll({
      where: {
        sexo: req.query.sexo,
        estadocivil: req.query.estadocivil,
        filhos: req.query.filhos

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r === '' && s !== '' && est === '' && f !== '') {
    cadastro.findAll({
      where: {
        sexo: req.query.sexo,
        filhos: req.query.filhos

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r !== '' && s !== '' && est === '' && f !== '') {
    cadastro.findAll({
      where: {
        sexo: req.query.sexo,
        regiao: req.query.regiao,
        filhos: req.query.filhos

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r !== '' && s !== '' && est !== '' && f === '') {
    cadastro.findAll({
      where: {
        sexo: req.query.sexo,
        regiao: req.query.regiao,
        estadocivil: req.query.estadocivil

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  }

  if (b !== '' && r !== '' && s !== '' && est === '' && f !== '') {
    cadastro.findAll({
      where: {
        regiao: req.query.regiao,
        sexo: req.query.sexo,
        bairro: req.query.bairro,
        filhos: req.query.filhos

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r === '' && s === '' && est !== '' && f === '') {
    cadastro.findAll({
      where: {
        estadocivil: req.query.estadocivil

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r !== '' && s === '' && est !== '' && f === '') {
    cadastro.findAll({
      where: {
        estadocivil: req.query.estadocivil,
        regiao: req.query.regiao

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r !== '' && s !== '' && est !== '' && f === '') {
    cadastro.findAll({
      where: {
        estadocivil: req.query.estadocivil,
        regiao: req.query.regiao,
        sexo: req.query.sexo

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b !== '' && r === '' && s !== '' && est !== '' && f === '') {
    cadastro.findAll({
      where: {
        bairro: req.query.bairro,
        sexo: req.query.sexo,
        estadocivil: req.query.estadocivil

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r === '' && s !== '' && est !== '' && f === '') {
    cadastro.findAll({
      where: {
        estadocivil: req.query.estadocivil,
        sexo: req.query.sexo

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r === '' && s === '' && est !== '' && f !== '') {
    cadastro.findAll({
      where: {
        estadocivil: req.query.estadocivil,
        filhos: req.query.filhos

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r !== '' && s === '' && est !== '' && f !== '') {
    cadastro.findAll({
      where: {
        estadocivil: req.query.estadocivil,
        regiao: req.query.regiao,
        filhos: req.query.filhos

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r === '' && s !== '' && est !== '' && f !== '') {
    cadastro.findAll({
      where: {
        estadocivil: req.query.estadocivil,
        sexo: req.query.sexo,
        filhos: req.query.filhos

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r !== '' && s !== '' && est !== '' && f !== '') {
    cadastro.findAll({
      where: {
        estadocivil: req.query.estadocivil,
        regiao: req.query.regiao,
        sexo: req.query.sexo,
        filhos: req.query.filhos

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  }

  if (b !== '' && r !== '' && s !== '' && est !== '' && f === '') {
    cadastro.findAll({
      where: {
        regiao: req.query.regiao,
        sexo: req.query.sexo,
        estadocivil: req.query.estadocivil,
        bairro: req.query.bairro

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r === '' && s === '' && est === '' && f !== '') {
    cadastro.findAll({
      where: {
        filhos: req.query.filhos

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r !== '' && s === '' && est === '' && f !== '') {
    cadastro.findAll({
      where: {
        filhos: req.query.filhos,
        regiao: req.query.regiao

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r !== '' && s !== '' && est === '' && f !== '') {
    cadastro.findAll({
      where: {
        filhos: req.query.filhos,
        regiao: req.query.regiao,
        sexo: req.query.sexo

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r !== '' && s !== '' && est !== '' && f !== '') {
    cadastro.findAll({
      where: {
        filhos: req.query.filhos,
        regiao: req.query.regiao,
        sexo: req.query.sexo,
        estadocivil: req.query.estadocivil

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r === '' && s !== '' && est !== '' && f !== '') {
    cadastro.findAll({
      where: {
        filhos: req.query.filhos,
        sexo: req.query.sexo,
        estadocivil: req.query.estadocivil

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r === '' && s === '' && est !== '' && f !== '') {
    cadastro.findAll({
      where: {
        filhos: req.query.filhos,
        estadocivil: req.query.estadocivil

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r === '' && s !== '' && est === '' && f !== '') {
    cadastro.findAll({
      where: {
        filhos: req.query.filhos,
        sexo: req.query.sexo

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  } else if (b === '' && r !== '' && s === '' && est !== '' && f !== '') {
    cadastro.findAll({
      where: {
        filhos: req.query.filhos,
        regiao: req.query.regiao,
        estadocivil: req.query.estadocivil

      }
    }).then(function (cadastro) {
      res.render('resultFilter', { cadastro: cadastro })
    }).catch(function (erro) {
      res.send('ERRO: ' + erro)
    })
  }
})

module.exports = router
