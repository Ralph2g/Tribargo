'use strict'

// Importamos Express
const express = require('express'); 

// Creamos nuestro servidor
const app = express();
app.listen( 3000 , () => {
    console.log('API REST de TRIBARGO corriendo en http://localhost:3000')    
})