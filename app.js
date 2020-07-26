let express = require('express');
// express returns a function, which we need to call

let app = express();

app.get('/', (req, res) => {
    res.send('this is homepage');
});

app.get('/contacts', (req, res) => {
    res.send('this is contacts page');
});

app.get('/aboutus', (req, res) => {
    res.send('this is about us page');
});

app.listen(5000);