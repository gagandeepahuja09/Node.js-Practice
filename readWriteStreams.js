let fs = require('fs');

let myReadStream = fs.createReadStream(__dirname + '/Intro2.js');
let myWriteStream = fs.createWriteStream(__dirname + '/Intro3.js');

// myReadStream.on('data', chunk => {
//     console.log('new chunk received');
//     myWriteStream.write(chunk);
// });

// Rather than doing all this manually, we can use pipes
myReadStream.pipe(myWriteStream);