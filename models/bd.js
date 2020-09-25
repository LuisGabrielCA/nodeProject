const Sequelize = require('sequelize')
const sequelize = new Sequelize('bdcpteste', 'luisg1', 'bduser01', {
  host: 'mysql669.umbler.com',
  dialect: 'mysql',
  dialectOptions: {
    useUTC: false
  },
  timezone: '-3:00'
})

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}
