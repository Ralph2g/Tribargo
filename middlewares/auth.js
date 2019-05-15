'use strict'

/**
 * @author:      Diaz Medina Jesus Kaimorts 
 * @version:     1.0
 * @description: Este script tiene como objetivo establecer los middlware
 *               de auntenticación que nos pemita proteger ciertas rutas
 *               de necesarios API REST de TRIBAGO.
 **/

const services = require('../services/index');
const ResponseHTTP = require('../controllers/codes_http');

/**
 * @name:           isAuth
 * @param:          req:    Objeto HTTP request.
 * @param:          res:    Objeto HTTP response.
 * @description:    Es un middleware de autenticación el cual permite
 *                  pasar la funcionalidad al controlador final con 
 *                  el objetivo de que la ruta sea visible o valida
 *                  solamente si el usuario está autenticado.
 * @summary         Esta clase no sirve, ya que a la hora de realizar
 *                  la autorizacion de usuario y poder entrar, no es posible
 *                  ingresar a la cuenta. Es mas, ni siquiera se crea.
 */
function isAuth(req, res, next) {
    if (!req.headers.authorization) { //Comprobar si en los headers de la peticion existe el atributo authorization
        return res.status(ResponseHTTP.client_error_codes['Forbidden']).send({ message: `No tienes autorización.` });
    }

    const token = req.headers.authorization.split(' ')[1]; // Se obtiene el token de la cabecera
    services.decodeToken(token)
        .then(response => {
            req.usuario = response
            next()
        }) // Aqui va la promesa exitosa
        .catch(response => {
            res.status(response.status)
        })
}

module.exports = isAuth;