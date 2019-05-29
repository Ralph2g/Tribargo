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
'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BarSchema = new Schema({
    nombre: String,//Nombre del BAR
    ubucacion: String,//BAR
    latitud:Number,
    longitud:Number,
    descripcion:String,//BAR
    puntuacion:Number,//bar
    costo:Number,//bar
    musica: {//BAR
        type: String,
        enum: ['rock', 'salsa', 'cumbia', 'bachata',
            'reggaeton', 'rap', 'trap', 'banda',
            'nortenho', 'corrido', 'disco', 'electronica',
            'hip hop', 'merengue', 'ranchera', 'rock and roll'
        ]
    },
    snaks:{
        type:String,
        enum:['alitas','Hamburguesas','Papas','Boneless',
            'pizza','deditos de queso','Hot-Dogs'

        ]
    },
    infow:String,
    imagen:String,//bar
    promocion: {//BAR
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
    },
    correo: String,//PAra usuario
    contrasenha: String,//PAra el login del usuario
    edad: Number,//Para el registro del bar
    venta_alcohol: Boolean, //PAra el registro del bar
    empresa: {//REGISTRO
        nombre: String,
        duenho: String,
        rfc: String,
        giro: String,
        permisos: {
            type: String,
            default: Boolean
        }
    },
});

module.exports = mongoose.model('Bar', BarSchema);