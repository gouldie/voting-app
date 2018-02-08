const Users = require('../../models/User');

module.exports = (app) => {
  app.get('/polls', (req, res) => {
    if (!req.session.user) {
      return res.status(401).send()
    }

    return res.send("you are authorised!")
  })

  app.get('/api/user', (req, res) => {
    return res.send('test')
    if (req.session.user) {
      return res.json({
        username
      })
    } else {
      return res.send(null)
    }
  })

  app.post('/api/register', (req, res, next) => {
    const username = req.body.username
    const password = req.body.password

    Users.findOne({ username }, (err, user) => {
      if (err) {
        return res.send({ err: 'An error occurred. Please try again.'})
      }

      if (user) {
        return res.send({ err: 'Username taken'})
      }

      Users.create({ username, password }, () => {
        return res.send()
      })
    })
  });

  app.post('/api/signin', (req, res, next) => {
    const username = req.body.username
    const password = req.body.password

    Users.findOne({ username, password }, (err, user) => {
      if (err) {
        return res.send({ err: 'An error occurred. Please try again.'})
      }

      if (!user) {
        return res.send({ err: 'Incorrect username or password'})
      }

      req.session.user = user
      return res.send()
    })
  });

  app.get('/api/logout', (req, res) => {
    req.session.destroy(() => {
      return res.send("logged out")
      res.redirect('/');              
    });
  });
};