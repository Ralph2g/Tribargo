'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//  Esta es una coleccion - equivalente a una tabla
const BebidaSchema = Schema({
    nombre: String,
    marca: String,
    categoria: {
        type: String,
        enum: ['cerveza', 'vino',
            'whisky', 'ron',
            'cognac', 'brandi'
        ]
    },
    presentacion: {
        type: String,
        enum: ['1L', '750ML', '350ML',
            'cubeta', 'misil3L', 'triton5L',
            'pozole', 'carton750ML', 'carton1L'
        ]
    },
    imagen: String,
    precio: {
        type: Number,
        default: 0
    },
    disponibilidad: Number,
    descripcion: String
});

module.exports = mongoose.model('Bebida', BebidaSchema);