const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cadastro = require('./models/cadastro')

// template
app.set('view engine', 'ejs')

// bodyParser
app.use(bodyParser.urlencoded({ extend: false }))
app.use(bodyParser.json())

// statics
app.use('/public', express.static('public'))

// rotas
app.get('/home', function (req, res) {
  res.render('../views/home')
})

app.get('/addUser', function (req, res) {
  res.render('../views/addUser')
})

app.post('/cadUsuario', function (req, res) {
  cadastro.create({
    nome: req.body.nome,
    telefone: req.body.telefone,
    celular: req.body.celular,
    bairro: req.body.bairro,
    regiao: req.body.regiao,
    sexo: req.body.sexo,
    dtnascimento: req.body.dtnascimento,
    email: req.body.email,
    endereco: req.body.endereco,
    estadocivil: req.body.estadocivil,
    filhos: req.body.filhos,
    qtFilhos: req.body.qtFilhos,
    origem: req.body.origem,
    observacao: req.body.observacao

  }).then(function () {
    res.render('../views/addUserSucess')
  }).catch(function (erro) {
    res.send('ERRO:' + erro)
  })
})

app.get('/delUser/:idusuarios', function (req, res) {
  cadastro.destroy({
    where: { idusuarios: req.params.idusuarios }
  }).then(function () {
    res.render('../views/delUser')
  }).catch(function (erro) {
    res.send('Cadastro não deletado: ' + erro)
  })
})

app.get('/updateUser/:idusuarios', async function (req, res) {
  const usuario = await cadastro.findAll({

    where: {
      idusuarios: req.params.idusuarios
    }
  })
  res.render('../views/updateUser', { usuario: usuario[0] })
})

app.post('/controllerUpdate/', (req, res) => {
  cadastro.update(
    {
      nome: req.body.nome,
      telefone: req.body.telefone,
      celular: req.body.celular,
      bairro: req.body.bairro,
      regiao: req.body.regiao,
      sexo: req.body.sexo,
      dtnascimento: req.body.dtnascimento,
      email: req.body.email,
      endereco: req.body.endereco,
      estadocivil: req.body.estadocivil,
      filhos: req.body.filhos,
      qtFilhos: req.body.qtFilhos,
      origem: req.body.origem,
      observacao: req.body.observacao
    },
    { where: { idusuarios: req.body.idusuarios } }
  ).then(function () {
    res.render('../views/updateUserSucess')
  }).catch(function (erro) {
    res.send('Cadastro não alterado: ' + erro)
  })
})

app.get('/listUser/:idusuarios', async function (req, res) {
  const user = await cadastro.findAll({
    where: {
      idusuarios: req.params.idusuarios
    }
  })
  res.render('../views/listUser', { user: user[0] })
})

// PROCURAR CADASTRO
app.get('/search', function (req, res) {
  res.render('../views/search')
})

app.get('/searchResult', function (req, res) {
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

// Filtros
app.get('/filterBr', function (req, res) {
  res.render('../views/filterBr')
})

app.get('/resultFilter', function (req, res) {
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
  // bairro
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
  // fim bairro

  // região
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
  // fim regiao

  // sexo

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
  // fim sexo

  // estado civil
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
  // fim estado civil

  // filhos
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

var port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('Umbler listening on port %s', port)
})
