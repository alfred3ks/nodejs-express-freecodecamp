// Creamos nuestro servidor con express:
const express = require('express');

// Creamos nuestra app de express, con eso ya tenemos accesos a todos los metodos y atributo.
const app = express();

// Obtenemos la informacion de los cursos:
const { infoCursos } = require('./cursos');


// Creamos nuestros Router: Evitamos repeticion de código.
const routerProgramacion = express.Router();
// Lo que hacemos es donde se use esa ruta usaremos ahora routerProgramacion en vez de app.
// ruta: http://localhost:3000/api/cursos/programacion
app.use('/api/cursos/programacion', routerProgramacion);

// ruta: http://localhost:3000/api/cursos/matematicas
const routerMatematicas = express.Router();
app.use('/api/cursos/matematicas', routerMatematicas);


// Vamos a ver como manejar las rutas con express:
// Routing: Peticion GET: en http://localhost:3000
app.get('/', (req, res) => {
  // Respondemos al recibir una peticion a la ruta -> /:
  res.send('Mi primer servidor con express.js');
});

// Vamos a crear otra ruta:http://localhost:3000/api/cursos
app.get('/api/cursos', (req, res) => {
  // Vamos a responder: Respondemos el objeto convertido en JSON:
  res.send(JSON.stringify(infoCursos));
})

// Vamos a ver otra ruta: http://localhost:3000/api/cursos/programacion
// Cambiamos usando Router:
routerProgramacion.get('/', (req, res) => {
  res.send(JSON.stringify(infoCursos.programacion));
})
// Vamos a ver otra ruta: http://localhost:3000/api/cursos/matematicas
// Cambiamos usando Router:
routerMatematicas.get('/', (req, res) => {
  res.send(JSON.stringify(infoCursos.matematicas));
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
  const resultado = infoCursos.programacion.filter((curso) => {
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

// http://localhost:3000/api/cursos/matematicas/calculo
// http://localhost:3000/api/cursos/matematicas/algebra
// Con esta ruta podemos manejar todas las rutas que queramos:
// Cambiamos usando Router:
routerMatematicas.get('/:tema', (req, res) => {
  // asi capturamos los parametros de la ruta:
  const tema = req.params.tema;
  const resultado = infoCursos.matematicas.filter((curso) => {
    return curso.tema === tema;
  });
  if (resultado.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema}`);
  }
  res.send(JSON.stringify(resultado));
  // console.log(JSON.stringify(resultado));
})

// Vemos cuando tenemos mas de un parametro:
// http://localhost:3000/api/cursos/programacion/python/basico
// Cambiamos usando Router:
routerProgramacion.get('/:nivel', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  const resultado = infoCursos.programacion.filter((curso) => {
    return curso.lenguaje === lenguaje && curso.nivel === nivel;
  });
  if (resultado.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`)
  }
  res.send(JSON.stringify(resultado));
})


// Definimos el puerto: Para cuando lo subamos usamos process.env.PORT
const PORT = process.env.PORT || 3000;

// Ahora escuchamos:
app.listen(PORT, () => {
  console.log(`Servidor arrancado en: http://localhost:${PORT}`);
})