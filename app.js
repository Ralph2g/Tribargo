'use strict'

/**
 * @author:      Diaz Medina Jesus Kaimorts 
 * @version:     1.0
 * @description: Este script tiene como objetivo encargarse de la 
 *               importar los middlewares necesarios para el correcto
 *               funcionamiento de nuestra aplicación API REST de TRIBAGO
 **/

const express = require('express'); // Importamos Express
const bodyParser = require('body-parser'); // Importamos Body-parser
const app = express(); // Agregamso express a nuestra aplicación
const api = require('./routes/index'); // Son las rutas para el CRUD de las colecciones

/* ========= Importamos los middleware ========= */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // En las peticiones, el cuerpo del mensaje puede ser en formato JSON
app.use('/api', api); // Usa los archivos de configuracion del CRUD de bebida

module.exports = app;