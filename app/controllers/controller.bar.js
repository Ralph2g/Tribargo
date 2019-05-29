'use strict'

/**
 * @author:      Garcia garcia Rafael 
 * @version:     1.0
 * @description: Este script tiene como objetivo encargarse del envio  
 *               y recibimiento de los datos de los bares a la base de datos
 **/

const Bar = require('../models/model.bar');
const config = require('../config/config.properties');
const ReponseHTTP = require('../config/config.http_codes');

/**
 * @name:           saveBar
 * @param:          req:    Objeto HTTP request.
 * @param:          res:    Objeto HTTP response.
 * @description:    Guarda una bebida en la coleccion
 *                  bar de la base de datos
 **/

function addBar( req, res ){
    //instanciamos el objeto que recibimos 
        let newBar = new Bar()
        newBar.nombre = req.body.name
        newBar.ubucacion = req.body.location
        newBar.latitud = req.body.latitude
        newBar.longitud = req.body.longitude
        newBar.descripcion = req.body.description
        newBar.puntuacion = req.body.score
        newBar.costo = req.body.price
        newBar.musica = req.body.music
        newBar.snacks = req.body.snacks
        newBar.descripcion = req.body.description
        newBar.infow = req.body.infow
        newBar.imagen = req.body.image
        newBar.save( (err, barStored) =>{
            if (err) 
                res.status(ReponseHTTP.server_error_codes['ISE']).send({ message: `Error al almacenar el bar: ${err}` });
                console.log(res.status(ReponseHTTP.accept_codes['OK']));
            res.status(ReponseHTTP.accept_codes['OK']).send({ newBar: barStored });
        });
    }

module.exports = {
    addBar
}


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZTY1YmRjZmEzNWVhM2Y0ODkyNWIwYiIsImNvcnJlbyI6ImZvbGxvd2VydEBnbWFpbC5jb20iLCJub21icmUiOiJmb2xsb3dlcnQiLCJzZXhvIjoiTWFzY3VsaW5vIiwiZWRhZCI6MTgsImlhdCI6MTU1OTExNzI0OCwiZXhwIjoxNTU5MjAzNjQ4fQ.wuv1dZyjWi-XjUMlEIvHYcG0gh9053aihybuhO_HgIg