const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.headers, req.method);
    // process.exit();

    res.write('<body><h1>fghfjfghjfgjfjhfhjgfjgjjj</h1></body>');
    res.end();
});

server.listen(3000);