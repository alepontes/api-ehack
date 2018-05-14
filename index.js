const express = require('express');
const db = require('./db_config'); // DB CONFIG
const app = require('./config'); //APP CONFIG
const router = require('./router');

//MAIN
app.get('/', (req, res) => {
    let rtn = {
        api: 'Bem vindo a API Ehack'
    };
    res.json(rtn);
});


//ROUTER
app.use('/', router);


//MIDIA
app.use(express.static('uploads'));
