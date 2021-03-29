const server = require('./src/server')
const { host, port } = require('./src/config')

console.log('Server is listening on port: ', port)
server.listen(port)
