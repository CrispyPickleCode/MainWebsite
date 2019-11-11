const http = require('http');
const config = require('./config');
const app = require('./app');

const server = http.createServer(app);

console.log('Starting server at port ' + config.port + '...');
server.listen(config.port);
