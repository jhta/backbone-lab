# backbone-lab
En la apiciación permite  buscar juegos por su nombre, agregarlos a una lista de juegos actuales o a un historial de juegos,
en el cual podemos ver los juegos que ya terminamos, los que estamos jugando y con los que estamos pendientes.

Use:
* Browserify
* Gulp
* Stylus
* Backbone
* Materialize

Consumo un [API](https://www.mashape.com/cosmin/ign-com-video-games-rating#) con un unico endpoint el cual recibe un texto 
y me retorna los videojuegos cuyo titulo contengan este texto. 

###Instalar dependencias

    npm install

###Correr en desarrollo

    npm start

Esto te habilitará un servidor con livereload que correra por [http://localhost:8000](http://localhost:8000).

Se generará el contenido listo para subir a la web en el folder 'dist'

Si quiere generar este contenido sin necesecidad de ejecutar el servidor:
    
    gulp build
