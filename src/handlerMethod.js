const getRoutes = require('./getRoutes')

module.exports = function handlerMethod(req, res) {
  const method = req.method
  if (method === 'GET') {
    getRoutes(req, res)
  }
  if (method === 'POST') {

  }
  if (method === 'DELETE') {

  }
  if (method === 'PUT') {

  }
}