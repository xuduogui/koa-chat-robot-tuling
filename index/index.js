let app = require('../app')
let http = require('http')

let port = normalizePort(process.env.PORT || '80')

let server = http.createServer(app.callback())

server.listen(port, '0.0.0.0')

function normalizePort(val) {
    let port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}