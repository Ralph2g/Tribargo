'use strict'

/**
 * @name:           script_principal
 * @author:         Diaz Medina Jesus Kaimorts
 * @version         1.0
 * @description:    En este script se realizan las configuraciones necesarias para
 *                  poder levantar el servidor usando express y realizar la
 *                  conexion a la base de datos en mongodb con moongose. 
 *                  Ademas, se importan los scripts perminentes para la API REST
 *                  de TRIBAGO, asi como los puertos y rutas de configuracion.
 **/

const moongose = require('mongoose'); // Importamos Mongoose - MongoDB
const app = require('./app'); // Importamos configuracion de la aplicacion
const config = require('./config/properties'); // Importamos puerto y ruta de MongoDB
const database = require('./config/db');

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