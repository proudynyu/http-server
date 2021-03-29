const server = require('./src/server')
const { host, port } = require('./src/config')

server.listen(port)
