var mongoose = require('mongoose');

let port = `27017`
let uri = `mongodb://localhost:${port}`;

mongoose.connect(uri, (err, res) => {
    if (!err)
        console.log('Conectado a ' + uri);
    else
        console.log('Erro ao conectar com ' + uri);
});