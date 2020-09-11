const bd = require('./bd')

const cadastro = bd.sequelize.define('usuarios', {

  idusuarios: {
    type: bd.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: bd.Sequelize.STRING,
    validate: {
      notEmpty: {
        msg: 'CAMPO NOME NÃO PODE SER VAZIO'
      }
    }
  },
  telefone: {
    type: bd.Sequelize.STRING
  },
  celular: {
    type: bd.Sequelize.STRING,
    validate: {
      notEmpty: {
        msg: 'CAMPO CELULAR NÃO PODE SER VAZIO'
      }
    }
  },
  bairro: {
    type: bd.Sequelize.STRING
  },
  regiao: {
    type: bd.Sequelize.STRING
  },
  sexo: {
    type: bd.Sequelize.STRING
  },
  dtDia: {
    type: bd.Sequelize.STRING
  },
  dtMes: {
    type: bd.Sequelize.STRING
  },
  dtAno: {
    type: bd.Sequelize.STRING
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
  qtFilhos: {
    type: bd.Sequelize.STRING
  },
  origem: {
    type: bd.Sequelize.STRING
  },
  observacao: {
    type: bd.Sequelize.STRING
  },
  status: {
    type: bd.Sequelize.STRING
  }

})

module.exports = cadastro
