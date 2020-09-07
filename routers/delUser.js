const express = require('express')
const router = express.Router()
const cadastro = require('./models/cadastro')

// deletar cadastro
router.get('/delUser/:idusuarios', function (req, res) {
  cadastro.destroy({
    where: { idusuarios: req.params.idusuarios }
  }).then(function () {
    res.render('../views/delUser')
  }).catch(function (erro) {
    res.send('Cadastro não deletado: ' + erro)
  })
})

module.exports = router
