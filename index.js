const server = require('./src/server')
const { host, port } = require('./src/config')

server.listen(port)

// to study
// https://medium.com/bb-tutorials-and-thoughts/how-to-write-simple-nodejs-rest-api-with-core-http-module-dcedd2c1256