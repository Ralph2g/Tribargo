'use strict'

/**
 * @name            config.database.js
 * @author          Diaz Medina Jesus Kaimorts
 * @version         1.1
 * @description:    Este es el archivo de configuracion de la base de datos utilizada
 *                  para poder realizar la conexión de la base de datos.
 **/

const mongoose = require('mongoose');
const properties = require('./config.properties');

module.exports = () => {
    mongoose.connect(properties.db, { useNewUrlParser: true })
        .then(() => console.log(`Mongo connected on ${properties.db}`))
        .catch(err => console.log(`Connection has an error: ${err}`))

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Mongo is disconnected');
            process.exit(0);
        });
    });
}