const Sequelize = require('sequelize')
const sequelize = new Sequelize('bduser', 'luisg', 'bduser01', {
  host: 'mysql669.umbler.com',
  dialect: 'mysql'
})

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}
