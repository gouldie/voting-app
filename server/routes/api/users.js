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

  app.post('/api/login', function(req, res, next) {
    passport.authenticate('login', function(err, user, info) {
      if (err) return res.status(500).json(info)
      if (!user) return res.json(info)
      req.login(user, (err) => {
        console.log('err', err)
        return res.json({ success: true })
      })
    })(req, res, next);
  })

  app.get('/api/logout', (req, res) => {
    req.session.destroy(() => {
      return res.send("logged out")
      res.redirect('/');              
    });
  });
};