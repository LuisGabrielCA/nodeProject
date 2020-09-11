const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const add = require('./routes/add')
const del = require('./routes/del')
const edit = require('./routes/edit')
const filter = require('./routes/filter')
const list = require('./routes/list')
const search = require('./routes/search')
const home = require('./routes/home')
const login = require('./routes/login')
const find = require('./routes/findAll')
const addlogin = require('./routes/addLogin')

const session = require('express-session')
const passport = require('passport')

const { eAdmin } = require('./helpers/eAdmin')
// const user = require('./models/user')

require('./config/loginAuth')(passport)

// SESSION
app.use(session({
  secret: '310164',
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

// MIDDLEWARE
app.use((req, res, next) => {
  res.locals.user = req.user || null
  next()
})

// TEMPLATE
app.set('view engine', 'ejs')

// BODYPARSER
app.use(bodyParser.urlencoded({ extend: false }))
app.use(bodyParser.json())

// STATICS
app.use('/public', express.static('public'))

// ROTAS
app.use('/add', eAdmin, add)

app.use('/del', eAdmin, del)

app.use('/edit', eAdmin, edit)

app.use('/filter', eAdmin, filter)

app.use('/list', eAdmin, list)

app.use('/search', eAdmin, search)

app.use('/', login)

app.use('/addLogin', eAdmin, addlogin)

app.use('/home', eAdmin, home)

app.use('/find', eAdmin, find)

// OUTROS
app.listen(8080)
