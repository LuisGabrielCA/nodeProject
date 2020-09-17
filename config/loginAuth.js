const LocalStrategy = require('passport-local').Strategy
const User = require('../models/loginbd')
// const bcrypt = require('bcryptjs')

module.exports = function (passport) {
  passport.use('local-login',
    new LocalStrategy(
      { usernameField: 'login', passwordField: 'senha' },
      (login, senha, done) => {
        // Match user
        User.findOne({ where: { login: login } }).then((user) => {
          if (!user) {
            return done(null, false)
          } else {
            User.findOne({ where: { senha: senha } }).then((pass) => {
              if (!pass) {
                return done(null, false)
              } else {
                return done(null, user)
              }
            })
          }
          // Match password

          /* bcrypt.compare(senha, User.senha, (err, isMatch) => {
            console.log(User.senha)
            console.log(senha)
            if (err) return done(err)
            if (isMatch) {
              return done(null, user)
            } else {
              return done(null, false)
            }
          }) */
        })
      }
    )
  )

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser(function (id, done) {
    User.findOne({ where: { id: id } }).then((user) => {
      done(null, user)
    })
  })
}
