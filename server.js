let http = require('http');

let server = http.createServer();

server.on('request', (req, res) => {
    console.log(`The request url is ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end('Hey!!!');
});

server.listen(5000, '127.0.0.1');
console.log('listening on port 5000');