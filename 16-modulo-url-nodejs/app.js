/*
Vamos a ver el modulo de url de Node.js
Veremos como usar los metodos de este objeto y como extraer sus valores.
*/

// Creamos un objeto URL: Este esta de forma globla en Node.js:
const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

// Vemos los metodos de este objeto creado:
console.log(miURL.hostname); // www.ejemplo.org

// Extraemos el camino:
console.log(miURL.pathname); // /cursos/programacion

// Extraemos a los query params: Es el objeto clave valor:
console.log(miURL.searchParams); // { 'ordenar' => 'vistas', 'nivel' => '1' }
// Como es un objeto podemos acceder a sus valores por el metodo get()
console.log(miURL.searchParams.get('ordenar'));
console.log(miURL.searchParams.get('nivel'));