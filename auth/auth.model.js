'use strict'

/**
 * @description:    Se define el modelo de datos que se utilza en
 *                  nuestra coleccion (tabla) de la base de datos
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    /**
     * @summary:        En esta parte se definen las propiedades
     *                  del esquema (tabla) en la base de datos.
     */
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    correo: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    contrasenha: {
        type: String,
        required: true,
        trim: true,
    }
}, {
    timestamps: true // Guarda nuestra fecha de creacion y de actualización
});