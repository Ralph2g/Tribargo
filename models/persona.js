'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonaSchema = Schema({
    nombre: String,
    apellido: String,
    correo: String,
    contrasenha: String,
    edad: {
        type: Number,
        default: 18
    },
    sexo: {
        type: String,
        enum: ['F', 'M']
    },
    fecha_nacimiento: {
        dia: String,
        mes: String,
        anho: String
    },
    presupuesto: Number,
    buddies: {
        there_budy: Boolean,
        num_budies: Number
    }
});

module.exports = mongoose.model('Persona', PersonaSchema);