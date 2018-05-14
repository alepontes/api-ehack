const produto = require('./produtoModel');



exports.list = function (req, callback) {


    let pesq = req.query.pesquisa;
    let tipo = req.query.tipo;
    let preco_max = req.query.preco_max;
    let preco_min = req.query.preco_min;
    let ordem = req.query.ordem;

    produto.find({}, (err, resp) => {
        if (!err)
            callback(resp);
        else
            callback(err);
    });

}//list



exports.getById = function (id_produto, callback) {

    produto.find({ _id: id_produto }, (err, resp) => {
        if (!err)
            callback(resp);
        else
            callback();
    });
}