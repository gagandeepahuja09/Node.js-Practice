let http = require('http');
let fs = require('fs');

let server = http.createServer();

server.on('request', (req, res) => {
    console.log(`The request url is ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    let myReadStream = fs.createReadStream(__dirname + '/Intro2.js');
    // res is also a writeable stream. We can read stream and write it to res
    myReadStream.pipe(res);
});

server.listen(5000, '127.0.0.1');
console.log('listening on port 5000');