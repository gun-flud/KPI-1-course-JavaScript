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

// new version with express framework and body-parser middleware

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/add', (req, res, next) => {
//     console.log('2nd middleware');
//     res.send('<body><form action="/message" method="POST"><input type="text" name="testInput"><button type="submit">Submit</button></form></body>');
// });

// app.post('/message', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// });

// app.use('/test', (req, res, next) => {
//     console.log('2nd middleware');
//     res.send('<h1>test page</h1>');
// });

// app.use('/', (req, res, next) => {
//     console.log('1st middleware');
//     res.send('<h1>Express server works!</h1>');
// });


// app.listen(3000);




const express = require('express');
const bodyParser = require('body-parser');

const adminRout = require('./routes/adminRout');
const clientRout = require('./routes/clientRout');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRout, clientRout);
// app.use('/admin', adminRout); // фільтир, буде опрацьовувати запити з 'http..../admin/:value'

// app.use(adminRout);
// app.use(clientRout);

app.use((req, res, next) => {
    res
    .status(404)
    .send('<h1>404</h1>');
})


app.listen(3000);


