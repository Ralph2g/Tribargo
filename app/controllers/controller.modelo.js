'use strict'

/**
 * @name        controller.modelo.js
 * @author      Jesus Kaimorts Diaz Medina
 * @version     1.1
 * @description El codigo contenido en este script 
 *              no ayuda a mandar la información necesaria 
 *              para poder realizar la prediccion del sistema
 */

/**
 * @summary     Utilizamos el metodo child.process.spawn
 *              desde el modulo child_process y lo asignamos
 *              a la variable spawn
 */
const spawn = require("child_process").spawn;

/**
 * @name  callName
 * @param {Object HTTP} req : request 
 * @param {Object HTTP} res : response
 * @description Se utiliza el subproceso spawn para poder realizar
 *              la comunicación entre node y python.
 */
function callName(req, res) {

    userPreferences = req.query.userPreferences;
    // Parametros pasados en spawn - 
    // 1. Tipo de script 
    // 2. Lista que contiene la ruta del script 
    //    y los argumentos para el script  
    // E.g : http://localhost:3000/api/modelo?userPreferences=1@1@1@....
    var process = spawn('python', ["./modelo.py", userPreferences]);

    // Tomamos la salida estandar del script ejecutado
    // Takes stdout data from script which executed 
    // with arguments and send this data to res object 
    process.stdout.on('data', function(data) {
        res.send(data.toString());
    })
}

module.exports = { callName }