// Creamos nuestro servidor con express:
const express = require('express');

// Obtenemos la informacion de los cursos: Obtenemos directamente el objeto:
const { matematicas } = require('../data/cursos').infoCursos;

// ruta: http://localhost:3000/api/cursos/matematicas
const routerMatematicas = express.Router();

// Vamos a ver otra ruta: http://localhost:3000/api/cursos/matematicas
// Cambiamos usando Router:
routerMatematicas.get('/', (req, res) => {
  res.send(JSON.stringify(matematicas));
})

// http://localhost:3000/api/cursos/matematicas/calculo
// http://localhost:3000/api/cursos/matematicas/algebra
// Con esta ruta podemos manejar todas las rutas que queramos:
// Cambiamos usando Router:
routerMatematicas.get('/:tema', (req, res) => {
  // asi capturamos los parametros de la ruta:
  const tema = req.params.tema;
  const resultado = matematicas.filter((curso) => {
    return curso.tema === tema;
  });
  if (resultado.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema}`);
  }
  res.send(JSON.stringify(resultado));
  // console.log(JSON.stringify(resultado));
})


// Exportamos el modulo:
module.exports.routerMatematicas = routerMatematicas;