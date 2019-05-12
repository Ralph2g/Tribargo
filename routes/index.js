'use strict'

/**
 * @author:      Diaz Medina Jesus Kaimorts
 * @version:     1.0
 * @description: En este script se encuentran los metodos necesarios para
 *               poder asignar el comportamiento del CRUD utilizando los
 *               distintos modelos creados, los cuales están contenidos,
 *               en el @package models. Se divide por secciones cada uno 
 *               de los modelos.        
 **/

const express = require('express');
const BebidaCtrl = require('../controllers/bebida');
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

module.exports = api;