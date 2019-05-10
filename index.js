'use strict'

const express = require('express'); // Importamos Express
const bodyParser = require('body-parser'); // Importamos Body-parser
const moongose = require('mongoose'); // Importamos Mongoose - MongoDB

/* |============= Importamos las colecciones de la base de datos =============| */
const Bebida = require('./models/bebida');
const Persona = require('./models/persona');
const Bar = require('./models/bar');

const app = express(); // Agregamso express a nuestra aplicación
const port = process.env.PORT || 3001; // El puerto puede ser una variable de entorno o el 3000

/* |============= Codigos de respuesta de HTTP =============| */
const info_answer_codes = {
    'Continue': 100,
    'SwitchingProtocols': 101,
    'Processing': 102,
    'Checkpoint': 103
};
const accept_codes = {
    'OK': 200,
    'Created': 201,
    'Accepted': 202,
    'NAI': 203, //Non-Authoritative Information (desde HTTP/1.1)
    'NoContent': 204,
    'ResetContent': 205,
    'PartialContent': 206,
    'MultiStatus': 207,
    'AlreadyReported': 208
};
const redirection_codes = {
    'MultipleChoices': 300,
    'MovedPermanently': 301,
    'Found': 302,
    'SeeOther': 303,
    'NotModified': 304,
    'UseProxy': 305,
    'SwitchProxy': 306,
    'TemporaryRedirect': 307,
    'PermanentRedirect': 308
};
const client_error_codes = {
    'BadRequest': 400,
    'Unauthorized': 401,
    'PaymentRequired': 402,
    'Forbidden': 403,
    'NotFound': 404,
    'MNA': 405, // Method Not Allowed
    'NotAcceptable': 406,
    'PAR': 407, // Proxy Authenitcation Required
    'RequestTimeout': 408,
    'Conflict': 409,
    'Gone': 410,
    'LengthRequired': 411,
    'PreconditionFailed': 412,
    'RETL': 413, // Request Entity Too Large
    'RUTL': 414, // Rquest URI Too Long
    'UMT': 415, // Unsupported Media Type
    'RRNS': 416, // Request Range Not Satisfiable
    'ExpectationFailed': 417,
    'UnprocessableEntity': 422,
    'Locked': 423,
    'FaildDependency': 424,
    'Unassigned': 425,
    'UpgradeRequired': 426,
    'PreconditionRequired': 428,
    'TMR': 429, // Too Many Request
    'RHFTL': 431, // Request Header Fields Too Large
    '449': 449,
    'UFLR': 451 // Unavailable for Legal Reasons
};
const server_error_codes = {
    'ISE': 500, // Internal Server Error
    'NotImplemented': 501,
    'BadGateway': 502,
    'ServiceUnavailable': 503,
    'GatewayTimeout': 504,
    'HTTP_VNS': 505, // HTTP Version Not Supported
    'VAN': 506, // Variant Also Negotiates
    'InsufficientStorage': 507,
    'LoopDetected': 508,
    'BLE': 509, // Bandwidth Limit Exceeded
    'NotExtended': 510,
    'NAR': 511, // Network Authentication Required
    'NotUpdated': 512,
    'VersionMismatch': 521
};

/* ========= Importamos los middleware ========= */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // En las peticiones, el cuerpo del mensaje puede ser en formato JSON

/*
@name: 
    name: funcion get
@param:
    url: URL de la coleccion bebida
    (req,res): req: request  (peticion)
               res: response (respuesta)
@brief:  
    Se utiliza la URL con el fin de obtener 
    todos los elementos de la coleccion bebida
*/
app.get('/api/bebida', (req, res) => {
    console.log(req.body);
    Bebida.find({}, (err, bebidas) => {
        if (err) return res.status(server_error_codes['ISE']).send({ message: `Error al realizar la petición:${err}` });
        if (!bebidas) return res.status(client_error_codes['NotFound']).send({ message: `No existen los productos` })
        res.status(accept_codes['OK']).send({ bebidas });
    });
});

/*
@name: 
    name: funcion post
@param:
    url: URL de la BD
    (req,res): req: request  (peticion)
               res: response (respuesta)
@brief:  
    Se utiliza la funcion para agregar bebidas
    a la coleccion bebida en la base de datos.
*/
app.post('/api/bebida', (req, res) => {

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
        if (err) res.status(server_error_codes['ISE']).send({ message: `Error al almacenar en la base de datos: ${err}` });

        res.status(accept_codes['OK']).send({ bebida: bebidaAlmacenada });
    });

});

/*
@name: 
    name: funcion get
@param:
    url: URL de la BD utilizando el ID del producto
    (req,res): req: request  (peticion)
               res: response (respuesta)
@brief:  
    Se utiliza el id único generado por mongodb
    con el fin de obtener informacion del tipo de bebida
*/
app.get('/api/bebida/:bebidaID', (req, res) => {
    let bebidaID = req.params.bebidaID; // Obtenemos la ID de la bebida

    Bebida.findById(bebidaID, (err, bebida) => {
        if (err) return res.status(server_error_codes['ISE']).send({ message: `Error al realizar la petición:${err}` });
        if (!bebida) return res.status(client_error_codes['NotFound']).send({ message: `El producto no existe` })

        // res.status(accept_codes['OK']).send({ bebida: bebida }) es lo mismo que lo de abajo
        res.status(accept_codes['OK']).send({ bebida })
    });
});

/*
@name: 
    name: funcion update
@param:
    url: URL de la BD utilizando el ID del producto
    (req,res): req: request  (peticion)
               res: response (respuesta)
@brief:  
    Se utiliza el id único generado por mongodb
    con el fin de actualizar una bebida de la base de datos
*/
app.put('/api/bebida/:bebidaID', (req, res) => {
    let bebidaID = req.params.bebidaID;
    let info_update = req.body; // Objeto con campos a actualizar

    /* @param: bebidaID
       @param: info_update */
    Bebida.findByIdAndUpdate(bebidaID, info_update, { new: true }, (err, bebidaUpdated) => {
        if (err) res.status(server_error_codes['ISE']).send({ message: `Error al actualizar el producto: ${err}` });
        res.status(accept_codes['OK']).send({ bebida: bebidaUpdated });
    });
});

/*
@name: 
    name: funcion delete
@param:
    url: URL de la BD utilizando el ID del producto
    (req,res): req: request  (peticion)
               res: response (respuesta)
@brief:  
    Se utiliza el id único generado por mongodb
    con el fin de eliminar una bebida de la base de datos
*/
app.delete('/api/bebida/:bebidaID', (req, res) => {
    let bebidaID = req.params.bebidaID;

    Bebida.findById(bebidaID, (err, bebida) => {
        if (err) res.status(server_error_codes['ISE']).send({ message: `Error al borrar el producto: ${err}` });

        bebida.remove(err => {
            if (err) res.status(server_error_codes['ISE']).send({ message: `Error al borrar el producto: ${err}` });
            res.status(accept_codes['OK']).send({ message: 'El producto ha sido eliminado' });
        });
    });
});

// Conectamos la base de datos.
const url_mongodb = url_database_mongo();
moongose.connect(url_mongodb, (err, res) => {
    if (err) {
        return console.log(`Error al intentar conectar con la base de datos:${err}`);
    }
    console.log("Conexión a la base de datos establecida");
    // Creamos nuestro servidor
    app.listen(port, () => {
        console.log(`API REST de TRIBARGO corriendo en http://localhost:${port}`);
    });
});

function url_database_mongo() {
    let NAME_DB = "/tribargo";
    let PTO_MONGO = "27017";
    let URL_MONGO = 'mongodb://localhost:' + PTO_MONGO + NAME_DB;
    return URL_MONGO;
}