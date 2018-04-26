'use strict';
const { Client } = require('pg');
/*
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'shop',
    password: 'root',
    port: 5432,
}) */
const connectionString = 'postgresql://postgres:root@localhost:5432/exames';
const client = new Client({connectionString});

module.exports = client;