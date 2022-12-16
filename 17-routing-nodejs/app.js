/*
Routing en node.js:

Esto es clave para el desarrollo de servidores en node.js.

Manejar las solicitudes del cliente en base a ciertos criterios. El metodo y el camino.
Route = ruta. Es crear las rutas q tendra el servidor para manejar las solicitudes.

El primer criterio para la creacion de rutas es el metodo de la solicitud HTTP. De esta forma el servidor sabe que tipo de operacion se va a realizar.

Recordando:
GET / POST / DELETE / PUT.

El otro criterio para crear una ruta es el path, el camino de la solicitud HTPP. De esta forma el servidor sabe el recurso especifico que se usara o que se modificara.

metodo + path + como manejarlo
el que, el como y donde.

Veamos un ejemplo, usando node luego lo veremos con express:

*/

// Requerimos el modulo httt para el servidor:
const http = require('http');

// Creamos nuestra BD: desde un archivo externo:
const cursos = require('./cursos');
// console.log(cursos.infoCursos);

const server = http.createServer((req, res) => {
  // Obtenemos los metodos de la consulta:
  const metodo = req.method;
  switch (metodo) {
    case 'GET':
      manejarSolitudGET(req, res);
      break;
    case 'POST':
      manejarSolitudPOST(req, res);
      break;
    default:
      res.statusCode = 501;
      res.end('No maneja esta peticion, de momento....');
      console.log(`El metodo usado no puede ser manejado por el servidor ${method}`);
      break;
  }
});

let manejarSolitudGET = (req, res) => {
  const path = req.url;
  console.log(path);

  if (path === '/') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    return res.end('Mi API con Node.js');
  } else if (path === '/api/cursos') {
    return res.end(JSON.stringify(cursos.infoCursos));
  }
  else if (path === '/api/cursos/programacion') {
    return res.end(JSON.stringify(cursos.infoCursos.programacion))
  }
  else if (path === '/api/cursos/matematicas') {
    return res.end(JSON.stringify(cursos.infoCursos.matematicas))
  }
  // Si no existe:
  res.statusCode = 404;
  return res.end('El recurso solicitado no existe.')
}

const manejarSolitudPOST = (req, res) => {
  const path = req.url;
  console.log(path);

  if (path === '/api/cursos/programacion') {

    let cuerpo = '';
    console.log(cuerpo);
    // Guardamos el cuerpo que recibimos de la peticion:
    req.on('data', (contenido) => {
      cuerpo += contenido.toString();
      console.log(cuerpo);
    });

    req.on('end', () => {
      // Convertimos a objeto de JS:
      cuerpo = JSON.parse(cuerpo);
      console.log(cuerpo);
      return res.end('El servidor recibio una solicitud de POST para /cursos/programacion.');
    })
  }
}

const port = 3000;

server.listen(port, () => {
  console.log(`Server start on :http://localhost:${port}`);
})