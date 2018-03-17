module.exports = (app, passport) => {
  app.get('/api/auth', (req, res) => {
    if (req.isAuthenticated()) {
      return res.send(req.user.username)
    } else {
      return res.send(null)
    }
  })

  app.post('/api/register', function(req, res, next) {
    passport.authenticate('register', function(err, user, info) {
      if (err || !user) return res.json(info)
      req.login(user, err => res.json({ success: true }))
    })(req, res, next)
  })

  app.post('/api/login', function(req, res, next) {
    passport.authenticate('login', function(err, user, info) {
      if (err || !user) return res.json(info)
      req.login(user, err => res.json({ success: true }))
    })(req, res, next);
  })

  app.get('/api/logout', (req, res) => {
    req.session.destroy(() => {
      return res.send("logged out")
      res.redirect('/');              
    });
  });
};