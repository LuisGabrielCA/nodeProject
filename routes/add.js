const express = require('express')
const router = express.Router()
const cadastro = require('../models/cadastro')

// formulario add cadastro
router.get('/formAddUser', function (req, res) {
  res.render('../views/formAddUser')
})

// cadastrar usuario
router.post('/addUser', function (req, res) {
  cadastro.create({
    nome: req.body.nome,
    telefone: req.body.telefone,
    celular: req.body.celular,
    bairro: req.body.bairro,
    regiao: req.body.regiao,
    sexo: req.body.sexo,
    dtDia: req.body.dtnascimento.length ? req.body.dtnascimento.split('/')[0] : '',
    dtMes: req.body.dtnascimento.split('/')[1],
    dtAno: req.body.dtnascimento.split('/')[2],
    email: req.body.email,
    endereco: req.body.endereco,
    estadocivil: req.body.estadocivil,
    filhos: req.body.filhos,
    qtFilhos: req.body.qtFilhos,
    origem: req.body.origem,
    observacao: req.body.observacao,
    status: 'ATIVO'

  }).then(function () {
    res.render('../views/addUserSucess')
  }).catch(function (erro) {
    res.send('ERRO:' + erro)
  })
})

module.exports = router
