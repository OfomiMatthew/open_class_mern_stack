const http = require('http')
const app = require('./app')
const PORT = process.env.PORT || 3000
app.set('port',PORT)
http.createServer(app).listen(PORT)
