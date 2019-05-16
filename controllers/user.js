'use strict'

/**
 * @author:      Diaz Medina Jesus Kaimorts 
 * @version:     1.0
 * @description: Este script tiene como objetivo encargarse de la 
 *               autenticación del registro e inicio de sesion por
 *               cada uno de los usuarios en nuestra API REST de TRIBARGO
 **/

const User = require('../middlewares/auth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/properties');
const ResponseHTTP = require('./codes_http');
const MongodbError = require('./mongodb_error_codes');

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
        /**
         * @summary:    No se le va a pasar la contraseña como texto plano,
         *              para esto es necesario cifrarla utilizando bcrypt.
         **/
        contrasenha: bcrypt.hashSync(req.body.contrasenha)
    };

    /**
     * @summary:    Dado que nosotros no se necesita la contraseña cifrada
     *              en en forma de JSON Web Token en el front-end, sino que 
     *              necesito el TokenID.
     */
    User.create(newUser, (err, user) => {
        // Este usuario ya está registrado
        if (err && err.code == MongodbError.nonSequential_error['DuplicateKey'])
            return res.status(ResponseHTTP.client_error_codes['Conflict']).send('Email already exists.');

        if (err)
            return res.status(ResponseHTTP.server_error_codes['ISE']).send({ message: `Server error: ${err}` });

        const expiresIn = 24 * 60 * 60; // La sesión expira en 1 día

        const accessToken = jwt.sign({ id: user.id },
            config.SECRET_TOKEN, {
                expiresIn: expiresIn
            });

        /**
         * @summary:    El 'dataUser', es el 'user' que nos devuelve cuando
         *              se ha guardado en la base de datos. Esta es la 
         *              respuesta hacia nuestro front-end
         */
        const dataUser = {
            nombre: user.nombre,
            correo: user.correo,
            accessToken: accessToken,
            expiresIn: expiresIn
        };
        res.send({ dataUser });

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
            /**
             * @description:    userData.contrasenha - Se recupera desde el front-end (lo que usuario teclea)
             *                  user.contrasenha - Se obtiene directamente de la base de datos.
             */
            const resultPassword = bcrypt.compareSync(userData.contrasenha, user.contrasenha); // Recuperamos la contraseña del usuario

            /**
             * @summary:    Verificamos si la contraseña es la correcta.
             *              Si el resultPassword esta descifrado, nos va a 
             *              devolver un valor de 'false' en caso que no coincida
             *              y 'true' en el caso de que sí.
             */
            if (resultPassword) {
                const expiresIn = 24 * 60 * 60; // La sesión expira en 1 día

                const accessToken = jwt.sign({ id: user.id },
                    config.SECRET_TOKEN, {
                        expiresIn: expiresIn
                    });

                /**
                 * @summary:    El 'dataUser', es el 'user' que nos devuelve cuando
                 *              se ha guardado en la base de datos. Esta es la 
                 *              respuesta hacia nuestro front-end
                 */
                const dataUser = {
                    nombre: user.nombre,
                    correo: user.correo,
                    accessToken: accessToken,
                    expiresIn: expiresIn
                };
                res.send({ dataUser });

            } else { // La contraseña no es la correcta
                res.status(ResponseHTTP.client_error_codes['Conflict']).send({ message: 'Something is wrong' }); // El usuario no es correcto
            } //cierra else resultPassword
        } //cierra else de user
    });
}

/**
 * @name:           greeting
 * @param:          req:    Objeto HTTP request.
 * @param:          res:    Objeto HTTP response.
 * @description:    Esta funcion manda un saludo
 **/
function greeting(req, res) {
    res.send('Hello from greeting function');
}

module.exports = {
    createUser,
    loginUser,
    greeting
}