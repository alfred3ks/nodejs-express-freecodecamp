/*
Vamos a ello, nuestro primer servidor con Node.js
Vamos a ver el modulo http:
Este modulo le permite Node.js transmitir informacion con el protocolo HTTP.

El modulo HTTP esta escuchando las solicitudes que vengan del cliente.
Para acceder a este modulo lo haremos por medio de la instruccion require.

Hay una cosa que debemos saber para nuestro servidor, necesitamos un puerto donde estara escuchando las peticiones, es una ubicacion virtual del sistema operativo en el cual se puede acceder a una aplicacion o a un proceso especifico que s eesta ejecutando en ese puerto.

Vamos a ello:
localhost:3000

*/

// Requerimos el modulo:
const http = require('http');

// Creamos el servidor: Recibe la funcion con los objetos req, res.
const servidor = http.createServer((req, res) => {
  console.log('Nueva solicitud desde el cliente.');
  let mensaje = 'Hola, mundo!!!.';
  res.end(mensaje);
})

// Definimos el puerto:
const puerto = 3000;

// Arrancamos el servidor: necesita un puerto y una funcion de callback:
servidor.listen(puerto, () => {
  console.log(`Servidor arrancado en http://localhost:${puerto}`);
})
