const Poll = require('../../models/Poll')

module.exports = (app) => {
  app.post('/api/poll', (req, res) => {
    if (!req.isAuthenticated()) {
      res.redirect('/')
    } else {
      // todo: validate
      Poll.create({ userId: req.user._id, title: req.body.title, options: req.body.options}, (err, poll) => {
        if (err) {
          // send back err response
          res.status(500).send('An error occurred')
        }

        res.status(200).send('Successfully submitted poll')
      })
    }
  })

  app.get('/api/polls', (req, res) => {
    Poll.find({}, (err, polls) => {
      return res.send({
        polls
      })
    })
  })
}
