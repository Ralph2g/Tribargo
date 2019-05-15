'use strict'

/**
 * @author:      Diaz Medina Jesus Kaimorts 
 * @version:     1.0
 * @description: Este script tiene como objetivo encargarse de la 
 *               autenticación del registro e inicio de sesion por
 *               cada uno de los usuarios en nuestra API REST de TRIBARGO
 * @summary      Esta clase necesita ser cambiada, ya que a la hora de realizar
 *               el inicio de sesión y registro no hace nada y no crea la cuenta
 *               del usuario que se ha intentado registrar
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
const signUp = (req, res) => {
    const usuario = new Persona({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        contrasenha: req.body.contrasenha,
        edad: req.body.edad,
        sexo: req.body.sexo,
        fecha_nacimiento: req.body.fecha_nacimiento,
        presupuesto: req.body.presupuesto
    });

    usuario.avatar = usuario.gravatar();

    usuario.save((err) => {
        if (err) res.status(ResponseHTTP.server_error_codes['ISE']).send({ message: `Error al crear al usuario: ${err}` });
        return res.status(ResponseHTTP.accept_codes['Created']).send({ token: service.createToken(usuario) });
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
const signIn = (req, res) => {

    Persona.findOne({ correo: req.body.correo }, (err, usuario) => {
        if (err) return res.status(ResponseHTTP.server_error_codes['ISE']).send({ msg: `Error al ingresar en la aplicación: ${err}` });
        if (!usuario) return res.status(ResponseHTTP.client_error_codes['NotFound']).send({ msg: `No existe el usuario: ${req.body.correo}` });
    });

    return usuario.comparePassword(req.body.contrasenha, (err, isMatch) => {
        if (err) return res.status(ResponseHTTP.server_error_codes['ISE']).send({ msg: `Error al ingresar: ${err}` });
        if (!isMatch) return res.status(ResponseHTTP.client_error_codes['NotFound']).send({ msg: `Error de contraseña: ${req.body.correo}` });

        req.usuario = usuario;

        return res.status(ResponseHTTP.server_error_codes['ISE']).send({
            msg: 'Has ingresado de manera exitosa',
            token: service.createToken(usuario)
        });
    }).select('_id email +password');
}

module.exports = {
    signUp,
    signIn
}