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


const BarSchema = new Schema({
    nombre: String,//Nombre del BAR
    ubicacion: String,//BAR
    latitud:Number,
    longitud:Number,
    descripcion:String,//BAR
    puntuacion:Number,//bar
    costo:Number,//bar
    likes:Number,//bar
    musica: [String],
    
    /* {//BAR
        type: Array,
        enum: ['rock', 'salsa', 'cumbia', 'bachata',
            'reggaeton', 'rap', 'trap', 'banda',
            'nortenho', 'corrido', 'disco', 'electronica',
            'hip hop', 'merengue', 'ranchera', 'rock and roll'
        ]
    }, */
    snacks: {
        type:[String],
       /*  enum:['alitas','Hamburguesas','Papas','Boneless',
        'pizza','deditos de queso','Hot-Dogs'
    ] */
    
    },
    /* {
        type:String,
        enum:['alitas','Hamburguesas','Papas','Boneless',
            'pizza','deditos de queso','Hot-Dogs'
        ]
    }, */
    infow:String,
    imagen:String,//bar
    promocion:[String],
    /*  {//BAR
        type: String,
        enum: ['chicas_gratis', 'cumpleanhero',
            '2x1', 'sin_cover'
        ]
    }     */
});

module.exports = mongoose.model('Bar', BarSchema);