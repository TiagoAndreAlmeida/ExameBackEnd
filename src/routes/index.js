'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../controllers/index');
//const connectionString = 'postgresql://postgres:root@localhost:5432/shop';
//const client = new Client({connectionString});

//rota de teste
router.get('/', controller.get);

//rota de exame
router.get('/:id', controller.getId);

//inserir um novo exame
router.post('/', controller.post);

//deleta um exame
router.delete('/:id', controller.delete);

module.exports = router;