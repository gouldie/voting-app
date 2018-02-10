const Users = require('../../models/User');

const isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}

module.exports = (app, passport) => {
  app.get('/api/auth', (req, res) => {
    if (req.isAuthenticated()) {
      return res.send(req.user.username)
    } else {
      return res.send(null)
    }
  })

  app.post('/api/register', passport.authenticate('register', {
    successRedirect: '/'
  }))

  app.post('/api/login', passport.authenticate('login', {
    successRedirect: '/'
  }))

  app.get('/api/logout', (req, res) => {
    req.session.destroy(() => {
      return res.send("logged out")
      res.redirect('/');              
    });
  });
};