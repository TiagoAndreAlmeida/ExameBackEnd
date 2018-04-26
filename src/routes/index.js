'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../controllers/index');
//const connectionString = 'postgresql://postgres:root@localhost:5432/shop';
//const client = new Client({connectionString});

//rota de teste
router.get('/', (controller.get));

router.get('/:id', controller.getId);

module.exports = router;