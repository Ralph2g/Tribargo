'use strict'

/**
 * @author:      Diaz Medina Jesus Kaimorts
 * @version:     1.0
 * @description: En este script se encuentra el modelo Bar, el cual será
 *               utilizando para poder crear la coleccion Bar en la base
 *               de datos de MongoDB.
 *               Se utiliza un diccionario para facilitar la lectura de las
 *               distintas consultas que se le harán utilizando el script bar
 *               dentro del @package controllers
 **/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BarSchema = Schema({
    nombre: String,
    correo: String,
    contrasenha: String,
    edad: Number,
    venta_alcohol: Boolean,
    direccion: String,
    empresa: {
        nombre: String,
        duenho: String,
        rfc: String,
        giro: String,
        permisos: {
            type: String,
            default: Boolean
        }
    },
    musica: {
        type: String,
        enum: ['rock', 'salsa', 'cumbia', 'bachata',
            'reggaeton', 'rap', 'trap', 'banda',
            'nortenho', 'corrido', 'disco', 'electronica',
            'hip hop', 'merengue', 'ranchera', 'rock and roll'
        ]
    },
    promocion: {
        type: String,
        enum: ['chicas_gratis', 'cumpleanhero',
            '2x1', 'sin_cover'
        ],
        descripcion: String,
        precio: Number,
        fecha: {
            dia: String,
            mes: String,
            anho: String
        }
    }
});

module.exports = mongoose.model('Bar', BarSchema);