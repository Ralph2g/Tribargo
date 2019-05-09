# TRIBARGO
**Descripción** 
> Aplicación diseñada, desarrollada e implementada que proporciona la recomendación de bares en Calle Madero de la Ciudad de México.

**Tecnologías**
> * **NodeJS** : Utilizado para establecer la aplicación REST.
>   
>   * **Express**: Para la creación del servidor que obtenga las respuestas y peticiones.
>   * **Body-parser**: Es una integración a NodeJS el cual permite que al momento de hacer las peticiones tipo **POST** y **REST** permita *parsear* el 'cuerpo' de la petición para tratar y recoger la información para la base de datos. 
>
>       Este funciona como **middleware** utilizando distintas capas al recibir las respuestas.
>   * **Nodemon**: Permite que en el tiempo de desarrollo, cada vez que hagamos un cambio en el código, el servidor se reinicie automáticamente sin la necesidad de ejecutar el comando `node index.js`.
>
>           "scripts": {
>             "start": "nodemon index.js",
>             "test": "echo \"Error: no test specified\" && exit 1"
>            }
>       Para poder ejecutarlo, basta con hacer lo siguiente.
>
>           $ npm start
>
>
>