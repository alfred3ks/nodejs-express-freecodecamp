/*
Instroduccion a JSON.
JavaScript Object Notacion, notacion de objetos de javascript.

Formato de texto usado para almacenar y transportar informacion.
JSON esta basado en la notacion de objetos de JavaScript pero es solo texto.

Nos permite almacenar objetos de JS como texto.
Es independiente del lenguaje de programacion que estamos trabajando.

Caracteristicas del formato JSON:
- Los datos se representan como pares de clave-valor. (propiedades).
- El conjunto de pares estan rodeados por dos llaves principales {}
- Tambien puede estar rodeado por corchetes [] y dentro las llaves {}, ahi tenemos un array de JSON.
- Los pares deben estar searados por una coma,
- Puede contener distintos de datos:
  - Cadenas de caraceteres,
  - Numeros,
  - Arreglos,
  - Valores booleanos,
  - Objetos anidados.


{
  "titulo": "Aprende Node.js",
    "numVistas": 45642,
    "numLikes": 21123,
    "temas":[
      "JavaScript",
      "Node.js"
    ],
    "esPublico": true
}

Debemos saber que podemos convertir un objeto JSON a un objeto de JavaScript. Y viceversa.
OJO con estos 2 metodos!!!!

JSON -> JS: JSON.parse() -> le pasamos por parametro el JSON.
JS -> JSON: JSON.stringify() -> le pasamos por parametro el objeto JS.

*/

// Veamos como pasar de un archivo a otro. Tenemos un archivo externo llamado curso.json

// Podemos recibir el JSON con require(): Primera opcion:
const curso = require('./curso.json');
console.log(curso);
console.log(typeof curso); // object, al importarlo JS lo convierte a un objeto. OJO con esto.
console.log(curso.titulo);
console.log(curso.temas);

// Pasar de Objeto de JS a JSON: ------
let infoCurso = {
  titulo: "Aprende Node.js",
  numVistas: 45642,
  numLikes: 21123,
  temas: [
    "JavaScript",
    "Node.js"
  ],
  esPublico: true
}

console.log(infoCurso);
console.log(typeof infoCurso);

// Pasamo de Objeto a JSON:
let cursoJson = JSON.stringify(infoCurso);
console.log(cursoJson);
console.log(cursoJson.titulo); // undefined
console.log(typeof cursoJson); // string

// Pasar de JSON a Objeto: ------
let cursoObj = JSON.parse(cursoJson);
console.log(cursoObj);
console.log(typeof cursoObj);
console.log(cursoObj.titulo);