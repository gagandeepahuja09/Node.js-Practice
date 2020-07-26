let http = require('http');
let fs = require('fs');

let server = http.createServer();

server.on('request', (req, res) => {
    console.log(`The request url is ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/html'});
    // let myReadStream = fs.createReadStream(__dirname + '/index.html');
    // let myReadStream = fs.createReadStream(__dirname + '/Intro2.js');
    // res is also a writeable stream. We can read stream and write it to res
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let obj = {
        name: 'Gagandeep',
        place: 'Bareilly',
        job: 'Software Engineer',
        age: 21,
    }
    // We can't directly do like this => we need to convert this to either string or chunk
    res.end(JSON.stringify(obj));
});

server.listen(5000, '127.0.0.1');
console.log('listening on port 5000');