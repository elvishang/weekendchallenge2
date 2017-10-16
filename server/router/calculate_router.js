var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
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

module.exports = router;