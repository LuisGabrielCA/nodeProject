const Sequelize = require('sequelize')
const sequelize = new Sequelize('bdcp', 'luisg', 'bduser01', {
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
