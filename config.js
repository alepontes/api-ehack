let express = require('express');
let bodyParser = require('body-parser');
let port = '3000';// process.env.PORT
let admin = module.exports = express();


admin.listen(port);
admin.use(bodyParser.json());
admin.use(bodyParser.urlencoded({ extended: true }));


admin.use(function (req, res, next) {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Origin', 'null');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

