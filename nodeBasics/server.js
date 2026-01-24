// all this code is used in old versioned style. Without express and other frameworks
// we created simple server with native node.js modules
// routes.js file is imported here to handle different routes

// const http = require('http');
// // const handleRoutes = require('./routes');
// // import handleRoutes from './routes.js';
// // import * as fs from 'node:fs';
// // import { http } from 'http';
// const routes = require('./routes');

// console.log(routes.someText);

// const server = http.createServer(routes.handler);

// server.listen(3000);

// express.js version:
const express = require('express');

const app = express();

app.use('/test', (req, res, next) => {
    console.log('2nd middleware');
    res.send('<h1>test page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('1st middleware');
    res.send('<h1>Express server works!</h1>');
});


app.listen(3000);


