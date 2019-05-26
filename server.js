'use strict'

/**
 * @name            index.js
 * @author          Diaz Medina Jesus Kaimorts
 * @version         1.1
 * @description:    En este script se realizan las configuraciones necesarias para
 *                  poder levantar el servidor usando express y realizar la
 *                  conexion a la base de datos en mongodb con moongose. 
 *                  Ademas, se importan los scripts perminentes para la API REST
 *                  de TRIBAGO, asi como los puertos y rutas de configuracion.
 **/
//const express = require('express');
const app = require('./app/app.index'); // Importamos configuracion de la aplicacion
const config = require('./app/config/config.properties'); // Importamos puerto y ruta de MongoDB
const database = require('./app/config/config.database');
//const path = require('path');

/**
 * @name:           database
 * @description:    Esta funcion ayuda a realizar la creación y conexión de la base de
 *                  datos, anclado al puerto necesario. 
 **/
database();

/**
 * @name:           app.listen
 * @param:          config.port:  Ruta necesaria para la creacion de la base de datos.
 * @description:    Esta funcion ayuda a levantar el servidor creado con express. 
 **/
app.listen(config.port, () => { // Creamos nuestro servidor
    console.log(`API REST by TRIBARGO running on http://localhost:${config.port}`);
});

/**
 * @description     Esta seccion es de suma importancia, ya que ayuda a poder comunidar la parte
 *                  del backend con el front end. Sin importar que usuario sea, y tampoco que 
 *                  direccion escriba, siempre aparecerá el index.html
 */
/*
app.use(express.static(__dirname + '/frontend')); // Es para poder navegar a traves del back y front end sin problemas, tomando el directorio raiz
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/frontend/app/views/index.html')); // Es para poder acceder al contenido del back sin problemas.
});
*/