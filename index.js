const http = require('http')
const app = require('./src/app.js')

const server = http.createServer(app)

const PORT = process.env.PORT || 3001

server.listen(PORT, () => console.log(`server on port in ${PORT}`))
