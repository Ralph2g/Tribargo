'use strict'

/**
 * @author:         Diaz Medina Jesus Kaimorts 
 * @version:        1.0
 * @description:    Este script tiene como objetivo establecer la lógica
 *                  de negocios de la API REST de TRIBAGO.
 **/

const mongoose = require('mongoose');
const authSchema = require('../models/user');
const ResponseHTTP = require('../controllers/codes_http');

/**
 * @name:           authSchema.statics
 * @description:    Es un diccionario estático en el cual se 
 *                  vinculan las funciones de inicio de sesion
 *                  y de registro, con el esquema creado en el
 *                  @package /model/user.js con el fin de poder
 *                  almacenar y recuperar informacion de los 
 *                  usuarios desde la coleccion User en la base 
 *                  de datos.
 **/
authSchema.statics = {
    /**
     * @name  create
     * @param {UserSchema} data 
     * @param {Object Callback} cb 
     */
    create: function(data, cb) {
        const user = new this(data);
        user.save(cb);
    },
    /**
     * @name  login
     * @param {QueryDB} query 
     * @param {Object Callback} cb 
     */
    login: function(query, cb) {
        this.find(query, cb);
    }
}

/**
 * @summary:    El nombre de la coleccion en la base de datos que 
 *              se asigna es 'Users', usando el schema authSchema
 */
const authModel = mongoose.model('Users', authSchema);
module.exports = authModel;