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
const config = require('./config'); // Importamos puerto y ruta de MongoDB

/**
 * @name:           connect
 * @param:          config.db:  Ruta necesaria para la creacion de la base de datos.
 * @param:          err:        Objeto error al levantar la conexion
 * @param:          res:        Objeto response HTTP para el servidor con express.
 * @description:    Esta funcion ayuda a realizar la creación y conexión de la base de
 *                  datos, anclado al puerto necesario. Ademas, ayuda a levantar el 
 *                  servidor utilizando express.
 **/
moongose.connect(config.db, (err, res) => {
    if (err) return console.log(`Error al intentar conectar con la base de datos:${err}`);
    console.log("Conexión a la base de datos establecida");
    app.listen(config.port, () => { // Creamos nuestro servidor
        console.log(`API REST de TRIBARGO corriendo en http://localhost:${config.port}`);
    });
});