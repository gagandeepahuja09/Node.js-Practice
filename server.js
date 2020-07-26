let http = require('http');
let fs = require('fs');

let server = http.createServer();

server.on('request', (req, res) => {
    console.log(`The request url is ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/html'});
    if(req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/intro') {
        res.writeHead(200, { 'Content-Type': 'text/plain'});
        fs.createReadStream(__dirname + '/Intro2.js').pipe(res);
    }
    else if(req.url === '/data') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let obj = {
            name: 'Gagandeep',
            place: 'Bareilly',
            job: 'Software Engineer',
            age: 21,
        }
        // We can't directly do like this => we need to convert this to either string or chunk
        res.end(JSON.stringify(obj));
    }
    else {
        res.writeHead(404,{ 'Content-Type': 'text/html' });
        let page = fs.readFileSync('404.html');
        res.end(page);
    }
});

server.listen(5000, '127.0.0.1');
console.log('listening on port 5000');