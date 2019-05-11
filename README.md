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
>   * **Bcrypt**: Permite **hashear/cifrar** contraseñas, ya que no se puede almacenar directamente las contraseñas por seguridad ya que *cualquier persona que pueda entrar a la base de datos* podría acceder a esta contraseña y **comprometeria la información del usuario**.
>       Esto nos permite guardarla en un formato codificado de tal manera que **nuestra aplicación sea la única que pueda descodificar**.
>
>   * **JSON Web Token**: Con el fin de hacer la aplicación **escalable**, es decir que se separe la parte del front-end y back-end, la **API REST** de nuestra aplicación **Cliente**, lo mejor es **autenticación basada en Tokens**.
>       El usuario envia un código al servidor y el servidor se encarga de **traducir, descifrar el código y decir qué usuario es.** Una vez que se percata que usuario es, *sabe si está registrado y ver que privilegios tiene.*
>       * Ventajas:
>           * No se guardan sesiones.
>           * El servidor es mucho más ligero.
>           * La lógica recae en el lado del cliente.
>           * Un manipulación más sencilla.
>           * Verifica si el usuario está registrado y ver que accesos tiene.
>      
>      Para entener un poco mejor estos JSON Web Tokens, se recomienda visitar el [este enlace](https://jwt.io/#debugger-io).
> * **MongoDB**:  Es una base de datos NoSQL (*No Strcuture Query Languages*) el cual es **orientado a documentos** y que es *opensource*. Nos permite indexar registros de texto completo que se encuentra estrucutrado en un *documento*. 
>
>      En MongoDB un **documento es un registro compuesto por pares “campo : valor”**. Estos documentos son muy parecidos a los objetos ***JSON***. 

SQL     | NoSQL with MongoDB
------- | ------------------
database | database
table | collection
row | document
column | field
primary key | primary key

Para un mejor entendimiento de **MongoDB**, se recomienda visitar el [este enlace.](https://medium.com/techwomenc/como-pasar-de-sql-a-nosql-sin-sufrir-e34dd22349e5)

