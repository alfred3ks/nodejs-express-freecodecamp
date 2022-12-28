// Creamos nuestro servidor con express:
const express = require('express');

// Obtenemos la informacion de los cursos:
const { programacion } = require('../data/cursos').infoCursos;

// Creamos nuestros Router: Evitamos repeticion de código.
// Lo que hacemos es donde se use esa ruta usaremos ahora routerProgramacion en vez de app.
// ruta: http://localhost:3000/api/cursos/programacion
const routerProgramacion = express.Router();

// Linea importante para poder procesar las peticiones de tipo POST:
// Esto es un Middleware:
routerProgramacion.use(express.json());

// Vamos a ver otra ruta: http://localhost:3000/api/cursos/programacion
// Cambiamos usando Router:
routerProgramacion.get('/', (req, res) => {
  res.send(JSON.stringify(programacion));
})

// Vamos a ver los parametros en la ruta: Los parametros url. Sabemos que es un parametro porque tenemos los : delante.
// http://localhost:3000/api/cursos/programacion/python
// http://localhost:3000/api/cursos/programacion/javascript
// Con esta ruta podemos manejar todas las rutas que queramos: Ademas tambien vamos a manejar los parametros query:
// Definiomos cuando hacemos la buscqueda usando parametros query:
//http://localhost:3000/api/cursos/programacion/javascript?ordenar=vistas
// Par clave valor:
// Cambiamos usando Router:
routerProgramacion.get('/:lenguaje', (req, res) => {
  // asi capturamos los parametros de la ruta:
  const lenguaje = req.params.lenguaje;
  const resultado = programacion.filter((curso) => {
    return curso.lenguaje === lenguaje
  });
  if (resultado.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }

  // Con el objeto req vemos las query, lo que nos viene ?clave=valor:
  console.log(req.query);

  if (req.query.ordenar === 'vistas') {
    // Devolvemos la lista ordenada en funcion del criterio:
    return res.send(JSON.stringify(resultado.sort((a, b) => {
      // Devolvemos de menor a mayor:
      return a.vistas - b.vistas;
      // Devolvemos de mayor a menor:
      // return b.vistas - a.vistas;
    })))
  }
  res.send(JSON.stringify(resultado));
})

// Vemos cuando tenemos mas de un parametro:
// http://localhost:3000/api/cursos/programacion/python/basico
// Cambiamos usando Router:
routerProgramacion.get('/:nivel', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  const resultado = programacion.filter((curso) => {
    return curso.lenguaje === lenguaje && curso.nivel === nivel;
  });
  if (resultado.length === 0) {
    // OJO con los codigos de estados a devolver.
    return res.status(204).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`)
  }
  res.send(JSON.stringify(resultado));
})

// Vamos a manejar el metodo POST:
// http://localhost:3000/api/cursos/programacion
// Hacemos las peticiones por postman o por la extensio http ver archivo index.http
// A mi por esa app no me va, si lo hago usando postman y le envio en el cuerpo como formato raw  y de tipo JSON si funciona.
routerProgramacion.post('/', (req, res) => {
  // Vemos el cuerpo de la solicitud que viene por medio de la peticion:

  let cursoNuevo = req.body;
  console.log(cursoNuevo);
  // Lo agregamos al arreglo de cursos:
  programacion.push(cursoNuevo);

  // Vemos el resultado por pantalla.
  res.send(JSON.stringify(programacion));
})


// Vamos a ver la peticion ahora de tipo PUT, para modificar valores en la BD. En nuestro caso lo haremos con nuestro archivo local.
// Tenemos que pasar un parametro para saber cual vamos a modificar:
// Cuando hacemos una peticion de tipo PUT debemos pasar todo el objeto en la peticion.
// http://localhost:3000/api/cursos/programacion
routerProgramacion.put('/:id', (req, res) => {
  // Obtenemos el objeto que nos envian por el cuerpo en la petición:
  const cursoActualizado = req.body;
  console.log(cursoActualizado);

  // Obtenemos el id del curso por params que nos envian por la url:
  const idUrl = req.params.id; // String
  const id = parseInt(idUrl); // Number
  console.log(id);

  // Vamos a obtener el curso dentro de nuestro BD con el indice:
  // Retorna 0 si son iguales y -1 sino lo es:
  const indice = programacion.findIndex((curso) => {
    return curso.id === id;
  });
  console.log(indice);
  if (indice >= 0) {
    // Asi actualizamos el curso si lo encuentra:
    programacion[indice] = cursoActualizado;
  } else {
    // retornamos el status de que no se encontro ese recurso:
    res.status(404);
  }
  res.send(JSON.stringify(programacion));
})

// Vamos a hacer peticiones PATCH, solo vamos a tener que pasar la parte del objeto que queremos modificar.
// http://localhost:3000/api/cursos/programacion/2
routerProgramacion.patch('/:id', (req, res) => {
  const infoActualizada = req.body;

  // Obtenemos el id del curso por params que nos envian por la url:
  const idUrl = req.params.id; // String
  const id = parseInt(idUrl); // Number
  console.log(id);

  const indice = programacion.findIndex((curso) => {
    return curso.id === id;
  });
  if (indice >= 0) {
    const cursoAModificar = programacion[indice];
    // Con este objeto solo se nos modificaran los datos que pasamos en el objeto en el cuerpo.
    Object.assign(cursoAModificar, infoActualizada);
  } else {
    // retornamos el status de que no se encontro ese recurso:
    res.status(404);
  }
  // res.send(JSON.stringify(programacion));
  res.json(programacion);
  // NOTA: Podriamos enviar sin pasar a JSON asi ya que el send() hace la conversion JSON:
  //res.send(programacion);
  // El resultado seria el mismo.
  // Tambien tenemos el res.json(programacion), lo que hace es convertir el objeto a JSON antes de enviarlo, lo podemos usar a diferencia de res.send(). Este mola mas...
})

// Vamos a implementar el metodo delete que borrara un curso:
// http://localhost:3000/api/cursos/programacion/1
// No se pasa nada por el cuerpo de la peticion:
routerProgramacion.delete('/:id', (req, res) => {
  // Obtenemos el id del curso por params que nos envian por la url:
  const idUrl = req.params.id; // String
  const id = parseInt(idUrl); // Number
  console.log(id);

  const indice = programacion.findIndex((curso) => {
    return curso.id === id;
  });

  if (indice >= 0) {
    // Borramos ese curso:
    programacion.splice(indice, 1);
  } else {
    // retornamos el status de que no se encontro ese recurso:
    res.status(404);
  }
  // res.send(JSON.stringify(programacion));
  // res.send(programacion);
  res.json(programacion);
})

// Exportamos el modulo:
module.exports.routerProgramacion = routerProgramacion;