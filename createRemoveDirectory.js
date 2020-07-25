let fs = require('fs');
// There are sync versions of mkdir and rmdir also


// fs.readFile('readMe.txt', 'utf-8', function(err, data) {
//     console.log(data);
//     fs.mkdir('stuff', function() {
//         fs.writeFileSync('./stuff/newFile.cpp', data);
//     });
// });

fs.unlink('./stuff/newFile.cpp', function() {
    fs.rmdirSync('./stuff');
});