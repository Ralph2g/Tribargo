'use strict'

/**
 * @name            config.properties.js
 * @author          Diaz Medina Jesus Kaimorts
 * @version         1.1
 * @description:    Este es el archivo de configuracion de propiedades utilizada
 *                  para poder levantar los servicios necesarios a la hora de la 
 *                  reación y conexión de la base de datos y al levantar el 
 *                  servidor con express.
 **/

module.exports = {
    port: process.env.PORT || 3001, // El puerto puede ser una variable de entorno o el 3000
    db: process.env.MONGODB || 'mongodb://localhost:27017/tribargo',
    DAYS_TOKEN: 14,
    SECRET_TOKEN: 'ZIuDo7T9%VMY7}zgP'
}