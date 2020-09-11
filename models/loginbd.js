const bd = require('./bd')

const loginbd = bd.sequelize.define('userlogins', {
  id: {
    type: bd.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  login: {
    type: bd.Sequelize.STRING

  },
  senha: {
    type: bd.Sequelize.STRING

  },
  eAdmin: {
    type: bd.Sequelize.INTEGER

  }

})

module.exports = loginbd
