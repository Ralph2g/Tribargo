'use strict'

/**
 * @author:      Diaz Medina Jesus Kaimorts 
 * @version:     1.0
 * @description: Este script tiene como objetivo encargarse de la 
 *               autenticación del registro e inicio de sesion por
 *               cada uno de los usuarios en nuestra API REST de TRIBARGO
 **/

const User = require('./auth.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/properties');
const ResponseHTTP = require('../controllers/codes_http');

/**
 * @name:           createUser
 * @param:          req:    Objeto HTTP request.
 * @param:          res:    Objeto HTTP response.
 * @param:          next:   Middleware
 * @description:    Realiza el registro de un usuario utilizando tokens
 *                  y servicios (funciones) que nos ayuden a repetir 
 *                  determinadas acciones.
 **/
function createUser(req, res, next) {
    // Estos son los datos que se le solicitan a la hora del registro
    const newUser = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        sexo: req.body.sexo,
        fecha_nacimiento: req.body.fecha_nacimiento,
        presupuesto: req.body.presupuesto,
        correo: req.body.correo,
        contrasenha: req.body.contrasenha
    };

    User.create(newUser, (err, user) => {
        if (err)
            return res.status(ResponseHTTP.server_error_codes['ISE']).send({ message: `Server error:${err}` });
        const expireIn = 24 * 60 * 60; // La sesión expira en 1 día
        const accessToken = jwt.sign({ id: user.id },
            config.SECRET_TOKEN, {
                expiresIn: expireIn
            });
        // Respuesta hacia nuestro front-end
        res.send({ user });
    });
}

/**
 * @name:           loginUser
 * @param:          req:    Objeto HTTP request.
 * @param:          res:    Objeto HTTP response.
 * @param:          next:   Middleware
 * @description:    Realiza el inicio de sesion de un usuario utilizando tokens
 *                  y servicios (funciones) que nos ayuden a repetir 
 *                  determinadas acciones.
 **/
function loginUser(req, res, next) {
    // Estos son los datos que se pedirán para inciar sesion
    const userData = {
        correo: req.body.correo,
        contrasenha: req.body.contrasenha
    };

    // Se busca en la base de datos para ver si el usuario existe.
    User.findOne({ correo: userData.correo }, (err, user) => {
        if (err)
            return res.status(ResponseHTTP.server_error_codes['ISE']).send({ message: `Server error: ${err}` });

        if (!user) // El correo no existe o esta mal
            res.status(ResponseHTTP.client_error_codes['Conflict']).send({ message: 'Something is wrong' }); // El usuario no se encontró
        else {
            const resultPassword = userData.contrasenha; // Recuperamos la contraseña del usuario

            /**
             * @summary:    Verificamos si la contraseña es la correcta.
             *              Si el resultPassword esta descifrado, nos va a 
             *              devolver un valor de 'false' en caso que no coincida
             *              y 'true' en el caso de que sí.
             */
            if (resultPassword) {
                const expireIn = 24 * 60 * 60; // La sesión expira en 1 día
                const accessToken = jwt.sign({ id: user.id },
                    config.SECRET_TOKEN, {
                        expiresIn: expireIn
                    });
                res.send({ userData });
            } else { // La contraseña no es la correcto
                res.status(ResponseHTTP.client_error_codes['Conflict']).send({ message: 'Something is wrong' }); // El usuario no es correcto
            } //cierra else resultPassword
        } //cierra else de user
    });
}

module.exports = {
    createUser,
    loginUser
}