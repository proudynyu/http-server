const routes = require('./routes')

const DEFAULT_HEADER = {
  'Content-Type': 'application/json',
}

module.exports = async function handlerMethod(req, res) {
  const { url, method } = req
  const [path, route, slug] = url.split('/')

  req.queryString = slug

  const key = `/${route}:${method}`

  res.writeHead(200, DEFAULT_HEADER)

  const handlerRoute = routes[key] || routes.default
  return await handlerRoute(req, res)
}
