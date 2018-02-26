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