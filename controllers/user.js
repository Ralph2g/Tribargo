'use strict'

/**
 * @author:      Diaz Medina Jesus Kaimorts 
 * @version:     1.0
 * @description: Este script tiene como objetivo encargarse de la 
 *               autenticación del registro e inicio de sesion por
 *               cada uno de los usuarios en nuestra API REST de TRIBARGO
 **/

const ResponseHTTP = require('./codes_http');
const Persona = require('../models/persona');
const service = require('../services/index');

/**
 * @name:           signUp
 * @param:          req:    Objeto HTTP request.
 * @param:          res:    Objeto HTTP response.
 * @description:    Realiza el registro de un usuario utilizando tokens
 *                  y servicios (funciones) que nos ayuden a repetir 
 *                  determinadas acciones.
 **/
function signUp(req, res) {
    const usuario = new Persona({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        edad: req.body.edad,
        sexo: req.body.sexo,
        fecha_nacimiento: req.body.fecha_nacimiento,
        presupuesto: req.body.presupuesto,
    });

    usuario.save((err) => {
        if (err) res.status(ResponseHTTP.server_error_codes['ISE']).send({ message: `Error al crear al usuario: ${err}` });
        return res.status(ResponseHTTP.accept_codes['OK']).send({ token: service.createToken(usuario) });
    });
}

/**
 * @name:           signIn
 * @param:          req:        Objeto HTTP request
 * @param:          res:        Objeto HTTP response
 * @param:          usuario:    A este se le crea un token    
 * @description:    Busca en la base de datos, en la coleccion Persona, los
 *                  los usuarios que tengan el email pasemos en la peticion. 
 *                  Si el usuario existe, se dará acceso creando un token 
 *                  el cual viajará en la cabecera.                  
 **/
function signIn(req, res) {
    Persona.find({ correo: req.body.correo }, (err, usuario) => {
        if (err) return res.status(ResponseHTTP.server_error_codes['ISE']).send({ message: `Hubo en error: ${err}` });
        if (!usuario) return res.status(ResponseHTTP.client_error_codes['NotFound']).send({ message: `El usuario no existe` });

        req.usuario = usuario; // El usuario si existe.
        return res.status(ResponseHTTP.accept_codes['OK']).send({
            message: `Te has logueado correctamente`,
            token: service.createToken(usuario)
        });
    });
}

module.exports = {
    signUp,
    signIn
}