'use strict';

const express = require('express');
const router = express.Router();

const {Client} = require('pg');

const client = require('../../db/index');
//const connectionString = 'postgresql://postgres:root@localhost:5432/shop';
//const client = new Client({connectionString});
client.connect();

router.get('/', (req, res, next) => {
    const re = [];

    client.query('SELECT nome FROM cliente', (err, result) => {
        if(err){
            //done();
            console.log(err);
            return res.status(400).send('error no banco');
        }
        result.rows.map( r => {
            re.push(r.nome);
        });
        //client.end();
        res.status(200).send({'nome':re});;

        
    });
});

router.get('/:id', (req, res, next) => {
    const re = [];

    client.query('SELECT nome FROM cliente WHERE id=$1',[req.params.id], (err, result) => {
        if(err){
            //done();
            console.log(err);
            return res.status(400).send('error no banco');
        }
        result.rows.map( r => {
            re.push(r.nome);
        });
        //client.end();
        res.status(200).send({'nome':re});

        
    });
});

module.exports = router;