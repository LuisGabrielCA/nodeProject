const Sequelize = require('sequelize')
const sequelize = new Sequelize('bdproject', 'root', 'bduser01', {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    useUTC: false, // for reading from database
    dateStrings: true,
    typeCast: true
  },
  timezone: '+03:00'
})

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}
