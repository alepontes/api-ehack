const produto = require('./produtoModel');
const fs = require('fs');
const multer = require('multer');


exports.save = function (req, callback) {

    const body = req.body;
    let titulo = body.titulo;
    let preco = body.preco;
    let tipo = body.tipo
    let descricao = body.descricao;
    let endereco = body.endereco;
    let date = body.date;
    let img_path = req.file.path.replace("uploads\\", "http://localhost:3000/");

    new produto({
        "titulo": titulo,
        "preco": preco,
        "descricao": descricao,
        "date": date,
        "tipo": tipo,
        "endereco":endereco,
        "img": img_path
    }).save((err, resp) => {
        if (!err)
            callback(resp);
        else
            callback(err);
    });

}//save

exports.delete = function (id_produto, callback) {

    let ban = id_produto === 'simtenhocerteza' ? {} : { _id: id_produto };

    //METODO PARA APAGAR IMGS DEVE SER IMPLEMENTADO :(

    produto.remove(ban, (err, resp) => {
        if (!err)
            callback();
        else
            callback(err);
    });

}//delete


function new_name(nome, n) {
    //NOTA: Erro se arquivo tiver mais de um ponto "."

    n = n ? n : 10;

    let array = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmonpqrstuvwxyz0123456789';
    let rand = '';

    for (let i = 0; i < n; i++)
        rand += array.charAt(Math.random() * (array.length + 1));

    if (nome) {
        let p = nome.indexOf('.');
        let end = nome.length;
        let extenc = nome.substring(p, end);
        nome = rand.concat(extenc);
        return nome;
    } else {
        return;
    }

} //new_name

