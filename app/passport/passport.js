'use strict'

/**
 * @name        passport.js
 * @author      Jesus Kaimorts Diaz Medina 
 * @version     1.1
 * @description El script es el encargado de poder registrarse
 *              con gmail, twitter y facebook utilizando la 
 *              libreria passport
 */

const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = {}