const Users = require('../../models/User');

module.exports = (app) => {
  app.get('/polls', (req, res) => {
    if (!req.session.user) {
      return res.status(401).send()
    }

    return res.send("you are authorised!")
  })

  app.get('/api/user', (req, res) => {
    if (req.session.user) {
      return res.json({
        username
      })
    } else {
      return null
    }
  })

  app.post('/api/register', (req, res, next) => {
    const username = req.body.username
    const password = req.body.password

    Users.findOne({ username }, (err, user) => {
      if (err) {
        return res.status(500).send()
      }

      if (user) {
        return res.send("user already exists")
      }

      Users.create({ username, password }, () => {
        return res.send('user created')
      })
    })
  });

  app.post('/api/login', (req, res, next) => {
    const username = req.body.username
    const password = req.body.password

    Users.findOne({ username, password }, (err, user) => {
      if (err) {
        return res.status(500).send()
      }

      if (!user) {
        return res.status(404).send()
      }

      req.session.user = user
      return res.send("you are logged in")
    })
  });

  app.get('/api/logout', (req, res) => {
    req.session.destroy(() => {
      return res.send("logged out")
      res.redirect('/');              
    });
  });
};