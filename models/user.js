'use strict'

/**
 * @author:         Diaz Medina Jesus Kaimorts
 * @version:        1.0
 * @description:    En este script se encuentra el modelo User, el cual será
 *                  utilizando para poder crear el Schema pertenciente a la 
 *                  coleccion Persona en la base de datos de MongoDB.
 *                  Se utiliza un diccionario para facilitar la lectura de las
 *                  distintas consultas que se le harán utilizando el script Persona
 *                  dentro del @package /middleware
 **/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true); // Esto lo debemos especificar si no da un warning

const userSchema = new Schema({
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
    edad: {
        type: Number,
        required: true,
        default: 18
    },
    sexo: {
        type: String,
        required: true,
        enum: ['Femenino', 'Masculino'],
        trim: true
    },
    fecha_nacimiento: {
        type: String,
        trim: true
    },
    presupuesto: Number,
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

module.exports = userSchema;