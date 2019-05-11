'use strict'

const express = require('express');
const BebidaCtrl = require('../controllers/bebida');

const api = express.Router();

api.get('/bebida', BebidaCtrl.getBebidas);
api.post('/bebida', BebidaCtrl.saveBebida);
api.get('/bebida/:bebidaID', BebidaCtrl.getBebida);
api.put('/bebida/:bebidaID', BebidaCtrl.updateBebida);
api.delete('/bebida/:bebidaID', BebidaCtrl.deleteBebida);

module.exports = api