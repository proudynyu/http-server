const middlewares = require('./middlewares')

module.exports = function routes(req, res) {
  switch(req.url) {
    case '/':
      middlewares.getHome(req, res)
      break
  }
}