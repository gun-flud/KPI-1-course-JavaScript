const http = require('http');
// const handleRoutes = require('./routes');
// import handleRoutes from './routes.js';
// import * as fs from 'node:fs';
// import { http } from 'http';
const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);