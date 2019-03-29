require('./config') //definimos el entorno de ejecucion lo primero

const express = require('express');
//Llamar a la ruta
const router = require('./routes')

const app = express();
app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(router);

//configuramos el port en environment.js para que lo elija dependiendo del entorno
const port = process.env.port || 3000;

//const fs = require('fs'); // modulo del core de node


//console.log(process.env.NODE_ENV);






//abrimos servidor en puerto
app.listen(port, () => console.log('Servidor levantado en: http://localhost:' + port));
//app.listen(port, () => console.log(`http://localhost:$(port)/`); 