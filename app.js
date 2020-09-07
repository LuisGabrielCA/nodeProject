const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const add = require('./routes/add')
const del = require('./routes/del')
const edit = require('./routes/edit')
const filter = require('./routes/filter')
const listUser = require('./routes/listUser')
const search = require('./routes/search')
const home = require('./routes/home')

// TEMPLATE
app.set('view engine', 'ejs')

// BODYPARSER
app.use(bodyParser.urlencoded({ extend: false }))
app.use(bodyParser.json())

// STATICS
app.use('/public', express.static('public'))

// ROTAS
app.use('/add', add)

app.use('/del', del)

app.use('/edit', edit)

app.use('/filter', filter)

app.use('/listUser', listUser)

app.use('/search', search)

app.use('/home', home)

// OUTROS
var port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('Umbler listening on port %s', port)
})
