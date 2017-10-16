var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var port = 5000;
var calculateRouter = require('./router/calculate_router.js')

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/calculate', calculateRouter);

app.listen(port, function() {
    console.log('listening to port: ', port)
})

