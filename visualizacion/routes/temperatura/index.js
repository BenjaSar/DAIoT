//Contiene todos los endpoints de dispositivos
var express = require('express');
var routerTemperatura = express.Router();
var pg =  require('../../db');
const format = require('pg-format');

//Get '/' : muestra todas las temperaturas obtenidas
routerTemperatura.get('/', function (req, res) {
    pg.connect(function(err, client, done){
        if (err) throw new Error(err);
        var temp = format('Select * from sensort')
        client.query(temp, function(err, result){
            if (err) throw new Error(err);
            res.status(200).json(result.rows); 
        })
    });
});

//Se pone a disposición la variable routerTemperatura
module.exports =  routerTemperatura;  
