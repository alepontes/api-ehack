const express = require('express');
const router = express.Router();
const adminController = require('./adminController')
const clientController = require('./clientController')
const Multer = require('multer');

const multer = Multer({
    storage: Multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, './uploads');
        },
        filename: (req, file, callback) => {
            callback(null, new_name(file.originalname));
        }
    }),
    limits: {
        fileSize: 5 * 1024 * 1024 //limite 5mb
    }
});


const verifica = (req, res, next) => {

    //AQUI OS CAMPOSE DEVEM SER VERIFICADOS
    //Deveriam, pelo menos 

    let a = req.body.endereco;
    req.body.endereco = (a) => { 
        a = a.replace(' ', '+');
        a = a.replace('-', '+')
        a = a.replace(',', '+')
        return a;
    }

    if (false) // Exe: retornar erro
        res.json({ "Err": "Qualquer Erro" }).status()

    next();
}

router.post('/admin', verifica, multer.single('img'), (req, res) => {
    //ADD ITEM
    adminController.save(req, (resp) => {
        res.json(resp);
    });
});


router.delete('/admin/:id_produto', (req, res) => {
    //REMOVE ITEM
    const id_produto = req.params.id_produto;
    adminController.delete(id_produto, (resp) => {
        res.json(resp);
    });
});


router.get('/client', (req, res) => {
    //LISTA ITENS
    clientController.list(req, (resp) => {
        res.json(resp);
    });
});


router.get('/client/:id_produto', (req, res) => {
    //PEGAR ITEM
    let id_produto = req.params.id_produto;
    clientController.getById(id_produto, (resp) => {
        res.json(resp);
    });
});


function new_name(nome, n) {
    //NOTA: Erro se arquivo tiver mais de um ponto "."

    n = n ? n : 10;

    let array = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmonpqrstuvwxyz0123456789';
    let rand = '';

    for (let i = 0; i < n; i++)
        rand += array.charAt(Math.random() * (array.length + 1));

    console.log(rand)

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


module.exports = router;