var LocalStrategy   = require('passport-local').Strategy;
var User = require('../models/User')
var bCrypt = require('bcrypt-nodejs')

module.exports = function(passport){
	passport.use('login', new LocalStrategy({
      passReqToCallback : true
    },
    function(req, username, password, done) {
      User.findOne({ username },
        function(err, user) {
          if (err) return done(null, false, { success: false, message: 'Internal server error' })
          if (!user) return done(null, false, { success: false, message: 'User not found' })
          if (!isValidPassword(user, password)) return done(null, false, { success: false, message: 'Invalid password' })
          return done(null, user)
        }
      )
    })
  )

  var isValidPassword = function(user, password) {
    return bCrypt.compareSync(password, user.password)
  }
}