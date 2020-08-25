const bd = require('./bd')

const Cadastro = bd.sequelize.define('usuarios', {

  idusuarios: {
    type: bd.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: bd.Sequelize.STRING
  },
  telefone: {
    type: bd.Sequelize.INTEGER
  },
  celular: {
    type: bd.Sequelize.INTEGER
  },
  bairro: {
    type: bd.Sequelize.STRING
  },
  regiao: {
    type: bd.Sequelize.STRING
  },
  sexo: {
    type: bd.Sequelize.CHAR
  },
  dtnascimento: {
    type: bd.Sequelize.DATE
  },
  email: {
    type: bd.Sequelize.STRING
  },
  endereco: {
    type: bd.Sequelize.STRING
  },
  estadocivil: {
    type: bd.Sequelize.STRING
  },
  filhos: {
    type: bd.Sequelize.STRING
  },
  origem: {
    type: bd.Sequelize.STRING
  },
  observacao: {
    type: bd.Sequelize.STRING
  }

})

module.exports = Cadastro
