const fs = require('fs');
// import * as fs from 'fs';


const handleRoutes = (req, res) => {
    // console.log(req.url, req.headers, req.method);
    if (req.url === '/test') {
        res.write('<body><form action="/message" method="POST"><input type="text" name="testInput"><button type="submit">Submit</button></form></body>');
        return res.end();
       
    }
    if (req.url === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return (req.on('end', () => {
            const buffer = Buffer.concat(body).toString();
            const message = buffer.split('=')[1];
            console.log(message);

            fs.writeFile('index.txt', message, err => {
                if (err) throw err;
                res.statusCode = 302;
                res.setHeader('Location', '/test' );
                return res.end();
                // console.log('The file has been saved!');
            });     
        }));
    }
    // process.exit();

    res.write('<body><h1>fghfjfghjfgjfjhfhjgfjgjjj</h1></body>');
    res.end();
}

// module.exports = handleRoutes;

// exports.smth = handleRoutes;
// exports.smth2 = 'text';

// export default handleRoutes;


// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some text';

exports.handler = handleRoutes;
exports.someText = 'Some hard coded text';