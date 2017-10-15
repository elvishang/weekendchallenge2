var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, function() {
    console.log('listening to port: ', port)
})

app.post('/calcuate', function (req, res) {
    var x = parseInt(req.body.x, 10),
        y = parseInt(req.body.y, 10),
        type = req.body.type, 
        result;

        console.log(req.body);
    switch(type) {
        case 'Add':
        result = x + y;
        break;
        case 'Subtract':
        result = x - y;
        break;
        case 'Multiplication':
        result = x * y;
        break;
        case 'Division':
        result = x / y;
        break;
    }

    res.send(result + '');
});