let fs = require('fs');

// // Synchronous
// let readMe = fs.readFileSync('readMe.txt', 'utf8');
// console.log(readMe);
fs.writeFileSync('readMe.txt', 'I have changed the text of file by Node.js fs module fn writeFileSync');

// Asynchronous
fs.readFile('readMe.txt', 'utf8', function(err, data) {
    console.log(data);
});

console.log('test');
console.log('test');
console.log('test');
console.log('test');
console.log('test');console.log('test');console.log('test');console.log('test');console.log('test');