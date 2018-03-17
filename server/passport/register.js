var LocalStrategy = require('passport-local').Strategy
var User = require('../models/User')
var bCrypt = require('bcrypt-nodejs')

module.exports = function(passport) {
	passport.use('register', new LocalStrategy({
      passReqToCallback : true
    },
    function(req, username, password, done) {
      findOrCreateUser = () => {
        User.findOne({ username }, (err, user) => {
          if (err) return done(null, false, { success: false, message: 'Internal server error' })
          if (user) return done(null, false, { success: false, message: 'User already exists' })
          var newUser = new User()

          newUser.username = username
          newUser.password = createHash(password)

          newUser.save((err) => {
            if (err) {
              console.log('Error in Saving user: ' + err) 
              throw err 
            }
            console.log('User Registration succesful')
            return done(null, newUser)
          })
        })
      }
        
      process.nextTick(findOrCreateUser);
    })
  )

  var createHash = function(password) {
      return bCrypt.hashSync(password)
  }
}