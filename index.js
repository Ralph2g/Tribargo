'use strict'

// Importamos Express
const express = require('express'); 

// Creamos nuestro servidor
const app = express();
const puerto = 3000;
app.listen( puerto , () => {
    console.log('API REST de TRIBARGO corriendo en http://localhost:3000')    
})