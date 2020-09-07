const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const cadUser = require('./routers/cadUser')
const delUser = require('./routers/delUser')
const editUser = require('./routers/editUser')
const filterUser = require('./routers/filterUser')
const listUser = require('./routers/listUser')
const searchUser = require('./routers/searchUser')
const home = require('./routers/home')

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

app.use('searchUser', searchUser)

app.use('/home', home)

// OUTROS
var port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('Umbler listening on port %s', port)
})
