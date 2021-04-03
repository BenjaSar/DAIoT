// Punto de entrada  al  API Server 
var express = require('express')
var cors = require('cors')
var app = express()
var port = 3000;

var corsOption = {origin: '*', optionSuccesStatus: 200};

app.use(cors(corsOption));

var temperatura = require('./routes/temperatura', temperatura);

app.use(express.json());
app.use('/api/temperatura', temperatura); //middleware

app.listen(port, () =>{

    console.log(`La api se encuentra levantada en el puerto ${port}`)
});



