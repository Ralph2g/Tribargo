'use strict'

// Importamos Express
const express = require('express'); 

// Importamos Body-parser
const bodyParser = require('body-parser')

// Agregamso express a nuestra aplicación
const app = express();
// El puerto puede ser una variable de entorno o el 3000
const port = process.env.PORT || 3000;    

app.use(bodyParser.urlencoded({ extended : false })) 
app.use(bodyParser.json)    // En las peticiones, el cuerpo del mensaje puede ser en formato JSON

// Creamos nuestro servidor
app.listen( port , () => {
    console.log(`API REST de TRIBARGO corriendo en http://localhost:${port}`)    
})