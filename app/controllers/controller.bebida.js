'use strict'

/**
 * @author       Diaz Medina Jesus Kaimorts 
 * @version      1.1
 * @description: En este script se encuentran las funciones
 *               necesarias para poder acceder a la base de datos
 *               creada con MongoDB.
 *               Se utilizan metodos de HTTP para poder realizar
 *               las consultas necesarias y dar un CRUD a la aplicacion 
 **/

const Bebida = require('../models/model.bebida');
const ReponseHTTP = require('../config/config.http_codes');
/**
 * @name:           getBebidas
 * @param:          req:    Objeto HTTP request.
 * @param:          res:    Objeto HTTP response.
 * @description:    Obtiene todos los elementos de la coleccion
 *                  bebida de la base de datos
 **/
function getBebidas(req, res) {
    console.log(req.body);
    Bebida.find({}, (err, bebidas) => {
        if (err) return res.status(ReponseHTTP.server_error_codes['ISE']).send({ message: `Error al realizar la petición:${err}` });
        if (!bebidas) return res.status(ReponseHTTP.client_error_codes['NotFound']).send({ message: `No existen los productos` })
        res.status(ReponseHTTP.accept_codes['OK']).send({ bebidas });
    });
}

/**
 * @name:           getBebida
 * @param:          req:    Objeto HTTP request.
 * @param:          res:    Objeto HTTP response.
 * @description:    Obtiene un elemento de la coleccion
 *                  bebida de la base de datos.
 **/
function getBebida(req, res) {
    let bebidaID = req.params.bebidaID; // Obtenemos la ID de la bebida

    Bebida.findById(bebidaID, (err, bebida) => {
        if (err) return res.status(ReponseHTTP.server_error_codes['ISE']).send({ message: `Error al realizar la petición:${err}` });
        if (!bebida) return res.status(ReponseHTTP.client_error_codes['NotFound']).send({ message: `El producto no existe` })

        // res.status(accept_codes['OK']).send({ bebida: bebida }) es lo mismo que lo de abajo
        res.status(ReponseHTTP.accept_codes['OK']).send({ bebida })
    });
}

/**
 * @name:           saveBebida
 * @param:          req:    Objeto HTTP request.
 * @param:          res:    Objeto HTTP response.
 * @description:    Guarda una bebida en la coleccion
 *                  bebida de la base de datos
 **/
function saveBebida(req, res) {
    console.log("POST /api/bebida");
    console.log(req.body);

    /* Asignamos lo atributos de la bebida */
    let bebida = new Bebida();
    bebida.nombre = req.body.nombre;
    bebida.marca = req.body.marca;
    bebida.categoria = req.body.categoria;
    bebida.presentacion = req.body.presentacion;
    bebida.imagen = req.body.imagen;
    bebida.precio = req.body.precio;
    bebida.disponibilidad = req.body.disponibilidad;
    bebida.descripcion = req.body.descripcion;

    bebida.save((err, bebidaAlmacenada) => {
        if (err) res.status(ReponseHTTP.server_error_codes['ISE']).send({ message: `Error al almacenar en la base de datos: ${err}` });
        res.status(ReponseHTTP.accept_codes['OK']).send({ bebida: bebidaAlmacenada });
    });
}

/**
 * @name:           updateBebida
 * @param:          req:    Objeto HTTP request.
 * @param:          res:    Objeto HTTP response.
 * @description:    Actualiza una bebida en la coleccion
 *                  bebida de la base de datos
 **/
function updateBebida(req, res) {
    let bebidaID = req.params.bebidaID;
    let info_update = req.body; // Objeto con campos a actualizar

    /* @param:  bebidaID
                info_update */
    Bebida.findByIdAndUpdate(bebidaID, info_update, { new: true }, (err, bebidaUpdated) => {
        if (err) res.status(ReponseHTTP.server_error_codes['ISE']).send({ message: `Error al actualizar el producto: ${err}` });

        res.status(ReponseHTTP.accept_codes['OK']).send({ bebida: bebidaUpdated });
    });
}

/**
 * @name:           deleteBebida
 * @param:          req:    Objeto HTTP request.
 * @param:          res:    Objeto HTTP response.
 * @description:    Elimina una bebida de la coleccion
 *                  bebida de la base de datos
 **/
function deleteBebida(req, res) {
    let bebidaID = req.params.bebidaID;

    Bebida.findById(bebidaID, (err, bebida) => {
        if (err) res.status(ReponseHTTP.server_error_codes['ISE']).send({ message: `Error al borrar el producto: ${err}` });

        bebida.remove(err => {
            if (err) res.status(ReponseHTTP.server_error_codes['ISE']).send({ message: `Error al borrar el producto: ${err}` });
            res.status(ReponseHTTP.accept_codes['OK']).send({ message: 'El producto ha sido eliminado' });
        });
    });
}

module.exports = {
    getBebida,
    getBebidas,
    saveBebida,
    updateBebida,
    deleteBebida
};