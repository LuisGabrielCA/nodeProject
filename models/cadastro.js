const bd = require('./bd')

const Cadastro = bd.sequelize.define('usuarios', {

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
    type: bd.Sequelize.STRING
  },
  bairro: {
    type: bd.Sequelize.STRING,
    validate: {
      notEmpty: {
        msg: 'CAMPO BAIRRO NÃO PODE SER VAZIO'
      }
    }
  },
  regiao: {
    type: bd.Sequelize.STRING,
    validate: {
      notEmpty: {
        msg: 'CAMPO REGIAO NÃO PODE SER VAZIO'
      }
    }
  },
  sexo: {
    type: bd.Sequelize.STRING,
    validate: {
      notEmpty: {
        msg: 'CAMPO SEXO NÃO PODE SER VAZIO'
      }
    }
  },
  dtnascimento: {
    type: bd.Sequelize.STRING,
    validate: {
      notEmpty: {
        msg: 'CAMPO DATA DE NASCIMENTO NÃO PODE SER VAZIO'
      }
    }
  },
  email: {
    type: bd.Sequelize.STRING
  },
  endereco: {
    type: bd.Sequelize.STRING,
    validate: {
      notEmpty: {
        msg: 'CAMPO ENDERECO NÃO PODE SER VAZIO'
      }
    }
  },
  estadocivil: {
    type: bd.Sequelize.STRING,
    validate: {
      notEmpty: {
        msg: 'CAMPO ESTADO CIVIL NÃO PODE SER VAZIO'
      }
    }
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
  }

})

module.exports = Cadastro
