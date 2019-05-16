'use strict'

/**
 * @author:         Diaz Medina Jesus Kaimorts
 * @version:        1.0
 * @description:    En este script se encuentran los metodos necesarios para
 *                  poder asignar el comportamiento del CRUD utilizando los
 *                  distintos modelos creados, los cuales están contenidos,
 *                  en el @package models. Se divide por secciones cada uno 
 *                  de los modelos.             
 **/

const express = require('express');
const api = express.Router();

/**
 * @summary:    Esquemas de las bases de datos
 */
const BebidaCtrl = require('../controllers/bebida');
const Users = require('../controllers/user');

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
 *                  /models/persona.js 
 **/
api.post('/register', Users.createUser);
api.post('/login', Users.loginUser);
api.get('/saludo', Users.greeting);

module.exports = api;