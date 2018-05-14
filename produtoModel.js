var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Add unique: true
 * titulo
 */


var ProdutoSchema = new Schema({

    titulo: {
        type: String
    },

    preco: {
        type: Intl
    },

    descricao: {
        type: String
    },

    tipo: {
        type: String
    },

    date: {
        type: Date
    },

    endereco: {
        type: String
    },

    img: {
        type: String
    }


});

module.exports = mongoose.model('Produto', ProdutoSchema);


