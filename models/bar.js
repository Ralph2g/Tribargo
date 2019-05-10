'use strict'

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