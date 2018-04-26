'use strict';

const client = require('../../db/index');

client.connect();
//rota de teste
exports.get = (req, res, next) => {
    const re = [];

    client.query('SELECT nome FROM exame', (err, result) => {
        if(err){
            //done();
            console.log(err.stack);
            res.status(400).send({'erro':err});
        }else{
            result.rows.map( r => {
                re.push(r.nome);
            });
            res.status(200).send({'nomes':re});
        }
    });
};

exports.getId = (req, res, next) => {

    client.query('SELECT * FROM exame WHERE nome=$1',[req.params.id], (err, result) => {
        if(err){
            console.log(err.stack);
            res.status(400).send('error no banco');
        }else{
            res.status(200).send(
                result.rows[0]
            );
        }
    });
};