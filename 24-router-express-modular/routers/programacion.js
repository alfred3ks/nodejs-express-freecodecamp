// Creamos nuestro servidor con express:
const express = require('express');

// Obtenemos la informacion de los cursos:
const { programacion } = require('../data/cursos').infoCursos;

// Creamos nuestros Router: Evitamos repeticion de código.
// Lo que hacemos es donde se use esa ruta usaremos ahora routerProgramacion en vez de app.
// ruta: http://localhost:3000/api/cursos/programacion
const routerProgramacion = express.Router();

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
    return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`)
  }
  res.send(JSON.stringify(resultado));
})

// Exportamos el modulo:
module.exports.routerProgramacion = routerProgramacion;