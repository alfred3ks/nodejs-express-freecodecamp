// Creamos nuestro servidor con express:
const express = require('express');

// Creamos nuestra app de express, con eso ya tenemos accesos a todos los metodos y atributo.
const app = express();

// Obtenemos la informacion de los cursos:
const { infoCursos } = require('./cursos');

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
app.get('/api/cursos/programacion', (req, res) => {
  res.send(JSON.stringify(infoCursos.programacion));
})
// Vamos a ver otra ruta: http://localhost:3000/api/cursos/matematicas
app.get('/api/cursos/matematicas', (req, res) => {
  res.send(JSON.stringify(infoCursos.matematicas));
})

// Definimos el puerto: Para cuando lo subamos usamos process.env.PORT
const PORT = process.env.PORT || 3000;

// Ahora escuchamos:
app.listen(PORT, () => {
  console.log(`Servidor arrancado en: http://localhost:${PORT}`);
})