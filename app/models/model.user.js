'use strict'

/**
 * @author          Diaz Medina Jesus Kaimorts
 * @version         1.1
 * @description:    Este script contiene los schemas
 *                  utilizados para poder crear las
 *                  colecciones y sus documentos en 
 *                  la base de datos de Mongo.
 **/

/** =========== Importacion de paquetes =========== **/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true); // Esto lo deemos especificar si no da un warning

/** =========== Esquema de Usuario =========== **/
const UserSchema = new Schema({
    nombre: { type: String, required: true, trim: true },
    apellido: { type: String, required: true, trim: true },
    sexo: { type: String, enum: ['femenino', 'masculino'], trim: true, required: true },
    fecha_nacimiento: { type: Date, trim: true, required: true },
    edad: { type: Number, required: true, default: 18 },
    presupuesto: { type: Number, required: true, default: 200 },

    // Estas son las bebidas
    cerveza: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },
    whisky: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },
    ron: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },
    vodka: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },
    cognac: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },
    vino: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },
    brandi: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },
    tequila: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },

    // Estos son los generos musicales.
    reggaeton: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },
    salsa: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },
    banda: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },
    rock: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },
    cumbia: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },
    nortenha: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },
    trap: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },
    electronica: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },
    house: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },
    hiphop: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },
    rap: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },
    merengue: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },
    ranchera: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },
    disco: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },
    bachata: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },
    corrido: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },

    // Promociones
    chicas_gratis: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },
    dos_x_uno: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },
    cumpleanhero: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },
    sin_cover: { type: Number, enum: [1, 0], default: 1 /*, required: true*/ },

    // Estos son los posibles bares.
    bar: {
        type: String,
        enum: ['Brazilian Terraza & Grill', 'Los Vegetarianos', 'Made in Brazil',
            'Hilaria:  Gastrobar y Jardín Cervecero', 'Bechamel', 'Restaurante La Terraza',
            'Terraza Madera', 'Salon Corona Madero', 'Salon Corona Gante', 'Mr.Duck',
            'La Nativa', 'Menage Mexico', 'Rock Son Madero', 'El Hoyo de Frank', 'Bar La Gioconda',
            'El Bajon', 'Don Batiz Centro', 'La Casa de la Guera Rodriguez', 'Terraza 5a Bar',
            'Dobermann Centro'
        ],
        /*required: true,*/
        trim: true
    },

    username: { type: String, lowercase: true, required: true, unique: true },
    correo: { type: String, lowercase: true, required: true, unique: true, trim: true },
    contrasenha: { type: String, required: true }
}, {
    timestamps: true // Guarda nuestra fecha de creacion y de actualización
});

module.exports = UserSchema;