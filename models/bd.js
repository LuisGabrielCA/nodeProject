const Sequelize = require('sequelize')
const sequelize = new Sequelize('bdproject', 'root', 'bduser01', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}
