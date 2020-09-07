const express = require('express')
const router = express.Router()
const cadastro = require('./models/cadastro')

// formulario editar cadastro
router.get('/updateUser/:idusuarios', async function (req, res) {
  const usuario = await cadastro.findAll({

    where: {
      idusuarios: req.params.idusuarios
    }
  })
  res.render('../views/updateUser', { usuario: usuario[0] })
})

// editar cadastro
router.post('/controllerUpdate/', (req, res) => {
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

module.exports = router
