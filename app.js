const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const cadUser = require('./routes/cadUser')
const delUser = require('./routes/delUser')
const editUser = require('./routes/editUser')
const filterUser = require('./routes/filterUser')
const listUser = require('./routes/listUser')
const searchUser = require('./routes/searchUser')
const home = require('./routes/home')

// TEMPLATE
app.set('view engine', 'ejs')

// BODYPARSER
app.use(bodyParser.urlencoded({ extend: false }))
app.use(bodyParser.json())

// STATICS
app.use('/public', express.static('public'))

// ROTAS
app.use('/cadUser', cadUser)

app.use('/delUser', delUser)

app.use('/editUser', editUser)

app.use('/filterUser', filterUser)

app.use('/listUser', listUser)

app.use('/searchUser', searchUser)

app.use('/home', home)

// OUTROS
var port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('Umbler listening on port %s', port)
})
