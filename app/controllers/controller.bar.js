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
//Declaramos nuestro conjunto de generos musicales validos
var setMusic = new Set(['rock', 'salsa', 'cumbia', 'bachata',
'reggaeton', 'rap', 'trap', 'banda',
'nortenho', 'corrido', 'disco', 'electronica',
'hip hop', 'merengue', 'ranchera', 'rock and roll'
])
//Variable global de asignación
var asingError = 0;
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
        newBar.ubicacion = req.body.location
        newBar.latitud = req.body.latitude
        newBar.longitud = req.body.longitude
        newBar.descripcion = req.body.description
        newBar.puntuacion = req.body.score
        newBar.costo = req.body.price
        newBar.musica =(function () {

            let musica = [];
            musica = req.body.music.split(",")
            musica.forEach(genero => {
                console.log(setMusic);
                
                if (!setMusic.has(genero))
                return asingError = 1;
                
            });
            return musica
        }(req.body.music,asingError,setMusic));
        console.log(asingError);
        newBar.snacks = req.body.snacks
        newBar.infow = req.body.infow
        newBar.imagen = req.body.image
        newBar.likes = req.body.likes
        newBar.promocion = req.body.promo
        newBar.save( (err, barStored) =>{
            console.log(asingError);
            
            if (err || (asingError == 1)){
                //Se resetea el valor 
                asingError =0;
                return res.status(ReponseHTTP.server_error_codes['ISE']).send({ message: `Error al almacenar el bar: ${err}` });
            }
            return res.status(ReponseHTTP.accept_codes['OK']).send({ newBar: barStored });
        });
    }
/**
 * @name:           getBars
 * @param:          req:    Objeto HTTP request.
 * @param:          res:    Objeto HTTP response.
 * @description:    Obtiene todos los elementos de la coleccion
 *                  Bar de la base de datos
 **/
function getBars( req, res ){
    Bar.find({}, (err,bares) =>{
        console.log(req);
        
        if (err) return res.status(ReponseHTTP.server_error_codes['ISE']).send({ message: `Error al realizar la petición:${err}` });
        if (!bares) return res.status(ReponseHTTP.client_error_codes['NotFound']).send({ message: `No existen bares en la base de datos` })
        res.status(ReponseHTTP.accept_codes['OK']).send({ bares })
    });
}



module.exports = {
    addBar,
    getBars
}


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZTY1YmRjZmEzNWVhM2Y0ODkyNWIwYiIsImNvcnJlbyI6ImZvbGxvd2VydEBnbWFpbC5jb20iLCJub21icmUiOiJmb2xsb3dlcnQiLCJzZXhvIjoiTWFzY3VsaW5vIiwiZWRhZCI6MTgsImlhdCI6MTU1OTExNzI0OCwiZXhwIjoxNTU5MjAzNjQ4fQ.wuv1dZyjWi-XjUMlEIvHYcG0gh9053aihybuhO_HgIg