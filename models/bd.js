const Sequelize = require('sequelize')
const sequelize = new Sequelize('bdproject', 'root', 'bduser01', {
  host: 'localhost',
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
