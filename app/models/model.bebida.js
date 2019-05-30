'use strict'

/**
 * @author:       Diaz Medina Jesus Kaimorts
 * @version:      1.1
 * @description: En este script se encuentra el modelo Bebida, el cual será
 *               utilizando para poder crear la coleccion Bebida en la base
 *               de datos de MongoDB.
 *               Se utiliza un diccionario para facilitar la lectura de las
 *               distintas consultas que se le harán utilizando el script Bebida
 *               dentro del @package controllers
 **/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//  Esta es una coleccion - equivalente a una tabla
const BebidaSchema = new Schema({
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