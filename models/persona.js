'use strict'

/**
 * @author:      Diaz Medina Jesus Kaimorts
 * @version:     1.0
 * @description: En este script se encuentra el modelo Persona, el cual será
 *               utilizando para poder crear la coleccion Persona en la base
 *               de datos de MongoDB.
 *               Se utiliza un diccionario para facilitar la lectura de las
 *               distintas consultas que se le harán utilizando el script Persona
 *               dentro del @package controllers
 **/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
const bcrypt = require('bcrypt-nodejs');

const PersonaSchema = Schema({
    nombre: String,
    apellido: String,
    correo: { // Vamos a estandarizar el correo
        type: String,
        unique: true,
        lowercase: true
    },
    avatar: String, // Es la URL donde esta almacenado y se guarda esta en la BD
    contrasenha: {
        type: String,
        select: false // Cada vez que hagamos un get de un usuario, la contrasenha nos e envie
    },
    signupDate: { // Es la fecha en el que el usuario se da de alta en el sistema
        type: Date,
        default: Date.now() // Nos da la fecha al momento
    },
    lastLogin: Date, // Cada vez que el usuario se logue, actualizamos. Para tener un control de acceso
    edad: {
        type: Number,
        default: 18
    },
    sexo: {
        type: String,
        enum: ['F', 'M']
    },
    fecha_nacimiento: Date,
    presupuesto: Number,
    buddies: {
        there_budy: false,
        num_budies: 0
    }
});

/** ================ IMPORTANTE ================
 * @description:    Se utilizaran funciones que se puedan ejecutar 
 *                  antes o despues de que el modelo haya sido 
 *                  almacenado en la base de datos
 *==============================================*
 **/

/**
 * @name:           cyphering
 * @param:          correo
 * @param:          contrasenha
 * @description:    Antes de que se guarde, se ejecuta la funcion
 *                  para que pueda pasar del middleware, con el fin 
 *                  de crear una hash que para cifrar la contrasenha
 */
PersonaSchema.pre('save', (next) => {
    let usuario = this;
    if (!usuario.isModified('contrasenha')) return next();

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);
        bcrypt.hash(usuario.contrasenha, salt, null, (err, hash) => {
            if (err) return next(err);
            usuario.contrasenha = hash;
            next();
        });
    });
});

/**
 * @name:           createAvatar
 * @param:          correo
 * @description:    Antes de que se guarde, se crea un gravatar
 *                  al usuario utilizando el cifrado de MD5.
 **/
PersonaSchema.methods.gravatar = function() {
    if (!this.correo) { // Si no tiene un correo registrado en el gavatar, se crea uno por defecto
        return `https://gravatar.com/avatar/?s=200&d=retro`;
    }
    // gravatar crea por default un hash md5
    const md5 = crypto.createHash('md5').update(this.correo).digest('hex');
    return `https://gravatar.com/avatar/${md5}?s=200&d=retro`;
}

module.exports = mongoose.model('Persona', PersonaSchema);