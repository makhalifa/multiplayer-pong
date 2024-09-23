const http = require('http');
const io = require('socket.io');

const apiServer = require('./app');
const httpServer = http.createServer(apiServer);
const ioServer = io(httpServer);

const sockets = require('./sockets');

const PORT = 4000;
httpServer.listen(PORT);
console.log(`Listening on port ${PORT}...`);

sockets.listen(ioServer);
