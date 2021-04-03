var pg = require('pg');


//Configuracion de la base de datos
var configPg = {
    user: 'postgres',
    host: 'localhost',
    database: 'IoT',
    password: '12345',
    dialect: 'postgres',
    port: 5432
};

var pool = new pg.Pool(configPg);

module.exports = pool;