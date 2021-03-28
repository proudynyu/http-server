const http = require('http')
const handlerMethod = require('./handlerMethod')

const server = http.createServer((req, res) => {
  handlerMethod(req, res)
})

module.exports = server