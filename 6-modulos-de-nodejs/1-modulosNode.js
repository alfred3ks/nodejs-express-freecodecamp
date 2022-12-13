/*
Los modulos de node.js:

Vamos a hablar de un tipo de modulo de Node.js llamados modulos built-in.
Tambien llamados modulos core. Modulos del propio Node.js.

Estos modulos los podemos usar directamente al trabajar con Node.js sin instalarlos.
Muy utiles para realizar tareas comunes al trabajar con Node.js

Algunos modulos son:
- http
- https
- fs (file system)
- os (operating system)
- path
- console

En la documentación podemos encontrar todos estos modulos.

Veamos el modulo console.
Es un modulo built-in que implementa funcionalidades similares a la consola de un navegador web.
Vemos como es console en Node.js y algunos metodos usados.

- .log()
- .warn()
- .error()
- .assert()
- .table()

*/

const nombre = 'Alfred';
console.log(nombre);
console.warn('Ocurrio un error...');
console.error('Ocurrio un error');

// Podemos pasar un objeto de error: Vemos que si pasamos el objeto este nos muestra mas informacion en la terminal
let error = new Error('Ha pasado un error.')
console.error(error);




