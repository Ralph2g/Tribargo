'use strict'

/**
 * @author:         Diaz Medina Jesus Kaimorts
 * @version:        1.0
 * @description:    En este script se encuentran los metodos necesarios para
 *                  poder asignar el comportamiento del CRUD utilizando los
 *                  distintos modelos creados, los cuales están contenidos,
 *                  en el @package models. Se divide por secciones cada uno 
 *                  de los modelos.
 * @summary:        Se debe de checar el ingreso de los usuarios             
 **/

const express = require('express');
const BebidaCtrl = require('../controllers/bebida');
const UsuarioCtrl = require('../controllers/user');
const auth = require('../middlewares/auth');
const api = express.Router();

/* |=========== CRUD en la coleccion BEBIDA ===========| */
api.get('/bebida', BebidaCtrl.getBebidas);
api.post('/bebida', BebidaCtrl.saveBebida);
api.get('/bebida/:bebidaID', BebidaCtrl.getBebida);
api.put('/bebida/:bebidaID', BebidaCtrl.updateBebida);
api.delete('/bebida/:bebidaID', BebidaCtrl.deleteBebida);

// es de prueba este
api.get('/private', auth, (req, res) => {
    res.status(200).send({ message: 'Tienes acceso.' });
});

/**
 * @summary:        Este CRUD no funciona bien. 
 *                  Ignorar esta implementacion
 */
/* |=========== CRUD en la coleccion Persona ===========| */

api.post('/signup', UsuarioCtrl.signUp);
api.post('/signin', UsuarioCtrl.signIn);

module.exports = api;