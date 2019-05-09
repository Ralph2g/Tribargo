'use strict'

const express = require('express');         // Importamos Express
const bodyParser = require('body-parser');   // Importamos Body-parser

const app = express();                  // Agregamso express a nuestra aplicación
const port = process.env.PORT || 3001;  // El puerto puede ser una variable de entorno o el 3000

/* ========= Importamos los middleware ========= */
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());   // En las peticiones, el cuerpo del mensaje puede ser en formato JSON

/* ========= Añadiendo las peticiones a la API REST */
//fun_res(app);     // Funcion usando response
fun_req(app);       // FUncion usando request

// Creamos nuestro servidor
app.listen( port , () => {
    console.log(`API REST de TRIBARGO corriendo en http://localhost:${port}`);
});

function fun_res( app ){
    app.get( '/hola', (req, res) => {
        res.send({ message: 'Hola Mundo' });
    });
}

function fun_req( app ){
    app.get( '/hola/:name', (req, res) => {
        res.send({ message: `Hola ${req.params.name}` });
    });
}