'use strict'

const moongose = require('mongoose'); // Importamos Mongoose - MongoDB
const app = require('./app'); // Importamos configuracion de la aplicacion
const config = require('./config'); // Importamos puerto y ruta de MongoDB

moongose.connect(config.db, (err, res) => {
    if (err) return console.log(`Error al intentar conectar con la base de datos:${err}`);
    console.log("Conexión a la base de datos establecida");
    app.listen(config.port, () => { // Creamos nuestro servidor
        console.log(`API REST de TRIBARGO corriendo en http://localhost:${config.port}`);
    });
});