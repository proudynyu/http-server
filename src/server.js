const http = require('http')
const handlerMethod = require('./handlerMethod')

const server = http.createServer(handlerMethod)

module.exports = server
