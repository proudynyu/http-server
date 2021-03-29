const middlewares = require('./middlewares')

module.exports = routes = {
  '/:get': (req, res) => middlewares.getHome(req, res),

  default: (req, res) => {
    res.write('Hello!')
    res.end()
  },
}
