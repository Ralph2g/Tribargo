'use strict'

/**
 * @author:         Diaz Medina Jesus Kaimorts 
 * @version:        1.0
 * @description:    Este script tiene como objetivo establecer servicios
 *                  que ayuden a distintos modelos y controladores de nuestra
 *                  API REST para el comportamiento de la aplicacion TRIBARGO.
 *                  Este script también tiene como fin la creacion de tokens
 *                  para la validacion de usuarios y la decondificacion de éstos.
 * @summary:        IMPORTANTE: No se debe de tomar en cuenta esta clase. 
 *                  Ya que hay conflictos a la hora de crear las cuentas 
 *                  de los usuarios.
 **/

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');
const ResponseHTTP = require('../controllers/codes_http');

/**
 * @name:           createToken
 * @param:          usuario
 * @description:    Crea un token a partir un id del usuario
 *                  dado por MongoDB y lo cifra por seguridad
 */
function createToken(usuario) {
    const num_days = config.DAYS_TOKEN;
    const payload = {
        sub: usuario._id, //ID del usuario, el de MongoDB.
        iat: moment().unix(), //Indica cuando fue creado el token en formato unix
        exp: moment().add(num_days, 'days').unix() // Indica cuando el token va a expirar en formato unix
    }; // Son los datos que viajan en el cliente y servidor

    return jwt.encode(payload, config.SECRET_TOKEN); //Codificamos el token creado
}

/**
 * @name:           decodeToken 
 * @param:          token
 * @description:    Es un middleware de autenticación el cual permite
 *                  pasar la funcionalidad al controlador final con 
 *                  el objetivo de que la ruta sea visible o valida
 *                  solamente si el usuario está autenticado.
 */
function decodeToken(token) {
    /**
     * @param:  resolve:    Para devolver la promesa cimpletada y token codificado.
     * @param:  reject:     Es por si surge algún error.
     */
    const decoded = new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, config.SECRET_TOKEN);
            if (!payload.exp <= moment().unix()) { // Si el token ya caducó
                reject({
                    status: ResponseHTTP.client_error_codes['Unauthorized'],
                    message: 'El Token ha expirado'
                });
            }
            resolve(payload.sub);

        } catch (err) {
            reject({
                status: ResponseHTTP.server_error_codes['ISE'],
                message: 'Token inválido'
            });
        }
    }); //Se crea una promesa en javascript

    return decoded;
}

module.exports = {
    createToken,
    decodeToken
};