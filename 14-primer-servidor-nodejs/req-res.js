/*
Vamos a ver ahora los objetos req y res de http, volvemos a crear un servidor:
Tenemos una extension de vscode para hacer peticiones POST, PUT.
Creamos un archivo index.http
Damos send request y vemos la respuesta.
Tenemos que ir alternando las solicitudes para verlo. Yo prefiero usar thunder client.
*/

// Requerimos el modulo:
const http = require('http');

// Creamos el servidor: Recibe la funcion con los objetos req, res.
const servidor = http.createServer((req, res) => {
  // console.log(req);
  // Vamos a ver las mas importantes de las propiedades del objeto
  console.log(req.url); // Obtenemos la ruta de la solicitud:
  console.log(req.method); // Vemos el metodo: GET/POST/DELETE/PUT
  console.log(req.headers); // Vemos las cabeceras que nos envia el cliente:

  // Ahora vamos a ver la respuesta que da el servidor al cliente:
  // console.log(res);
  console.log(res.statusCode);
  // Lo podriamos cambiar si queremos en funcion de la necesidad.
  console.log(res.statusCode = 404);
  // Vemos las cabeceras:
  res.setHeader('content-type', 'application/json')
  console.log(res.getHeaders());
  res.end('Hola mundo!!!');

})

// Definimos el puerto:
const puerto = 3000;

// Arrancamos el servidor: necesita un puerto y una funcion de callback:
servidor.listen(puerto, () => {
  console.log(`Servidor arrancado en http://localhost:${puerto}`);
})