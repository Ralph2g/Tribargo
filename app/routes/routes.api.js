'use strict'

/**
 * @author          Diaz Medina Jesus Kaimorts
 * @version         1.1
 * @description:    En este script se encuentran los metodos necesarios para
 *                  poder asignar el comportamiento del CRUD utilizando los
 *                  distintos modelos creados, los cuales están contenidos,
 *                  en el @package models. Se divide por secciones cada uno 
 *                  de los modelos.             
 **/

const express = require('express');
const api = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/config.properties');
const ResponseHTTP = require('../config/config.http_codes');

/**
 * @summary:    Esquemas de las bases de datos
 */
const BebidaCtrl = require('../controllers/controller.bebida');
const Users = require('../controllers/controller.user');
const BarCtrl =require('../controllers/controller.bar');

/** |=========== CRUD en la coleccion BEBIDA ===========|
 * @description:    Utilizando la api dada por ROUTER de 
 *                  express, utilazamos las funciones para
 *                  poder crear el CRUD de la colección 
 *                  'Bebida' en la base de datos.
 */
api.get('/bebida', BebidaCtrl.getBebidas);
api.post('/bebida', BebidaCtrl.saveBebida);
api.get('/bebida/:bebidaID', BebidaCtrl.getBebida);
api.put('/bebida/:bebidaID', BebidaCtrl.updateBebida);
api.delete('/bebida/:bebidaID', BebidaCtrl.deleteBebida);

/** |=========== Registro e inicio de sesión ===========|
 * @description:    Las funciones que a continación se muestran, permiten
 *                  el registro e inicio de sesión del usuario utilizando
 *                  el esquema previamente diseñado en el @package 
 *                  /models/persona.js, de manera segura, cifrando la 
 *                  contraseña de cada usuario
 **/
api.post('/register', Users.createUser);
api.post('/login', Users.loginUser);

api.use(function(req, res, next) {
    var token = req.body.token || req.body.query || req.headers['x-access-token'];
    if (token) { //  Verificamos el Token
        jwt.verify(token, config.SECRET_TOKEN, function(err, decoded) {
            if (err) {
                res.status(ResponseHTTP.client_error_codes['Conflict']).send({ message: 'Token invalid' }); // El usuario no se encontró
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.status(ResponseHTTP.client_error_codes['Conflict']).send({ message: 'No Token provided' }); // El usuario no es correcto
    }
});

/**
 * @name:           startSession
 * @param:          req:    Objeto HTTP request.
 * @param:          res:    Objeto HTTP response.
 * @description:    Esta funcion recupera la sesion a partir del web token
 **/
api.post('/mysession', function(req, res) {
    res.send(req.decoded);
});


/** |=========== CRUD en la coleccion Bar ===========|
 * @description:    Utilizando la api dada por ROUTER de 
 *                  express, utilazamos las funciones para
 *                  poder crear el CRUD de la colección 
 *                  'Bar' en la base de datos.
 */
api.get('/bebida', BebidaCtrl.getBebidas);

api.post('/bar', BarCtrl.addBar);//Crea un bar

//api.use(Users.verifyToken); // Es el middleware para poder iniciar sesion
//api.get('/mysession', Users.startSession); // Iniciar sesion con el web token

module.exports = api;