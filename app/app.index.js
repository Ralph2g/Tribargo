'use strict'

/**
 * @author       Diaz Medina Jesus Kaimorts 
 * @version      1.1
 * @description: Este script tiene como objetivo encargarse de la 
 *               importar los middlewares necesarios para el correcto
 *               funcionamiento de nuestra aplicación API REST de TRIBAGO
 **/

const express = require('express'); // Importamos Express
const bodyParser = require('body-parser'); // Importamos Body-parser
const cors = require('cors'); // Importamos cors
const passport = require('passport'); // Es para que pueda iniciar sesion con Facebook, Twitter y Google
const morgan = require('morgan');
const app = express(); // Agregamso express a nuestra aplicación
const api = require('./routes/routes.api'); // Son las rutas para el CRUD de las colecciones
const social = require('./passport/passport')(app, passport);

/* ========= Importamos los middleware ========= */
app.use(cors());
app.options('*', cors()); //Se aceptarán todas las peticiones que entren al server
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // En las peticiones, el cuerpo del mensaje puede ser en formato JSON
app.use(morgan('dev'));

/** ========== Rutas ========= **/
app.use('/api', api); // Usa los archivos de configuracion del CRUD de bebida


module.exports = app;