const express = require('express')
const router = express.Router()
const cadastro = require('./models/cadastro')

router.get('/listUser/:idusuarios', async function (req, res) {
  const user = await cadastro.findAll({
    where: {
      idusuarios: req.params.idusuarios
    }
  })
  res.render('../views/listUser', { user: user[0] })
})

module.exports = router
