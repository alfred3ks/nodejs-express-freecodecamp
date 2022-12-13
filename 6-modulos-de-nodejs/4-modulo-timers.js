/*
Vamos a ver este modulo que podemos utilizar para simular operaciones asincronas.

modulo Timers.
Temporizador o cronometro.
Contienen funciones que ejecutan un codigo luego de un periodo de tiempo.

Tres funciones muy utiles de este modulo:
- setTimeout()
- setImmediate()
- setInterval()

setTimeout()
Funcion para ejecutar codigo luego de un numero especifico de milisegundos.
Recibe por parametros una funcion, el tiempo y los argumentos que puede recibir la funcion si son varios pasados por comas.
setTimeout(funcion, retraso, arg1, arg2);

setImmediate()
Para ejecutar xodigo asincrono en la proxima iteracion del ciclo de eventos (lo mas pronto posible). Recibe una funcion y dos argumentos.
Esta funcion se ejecutara despues del codigo sincrono. Se ejecutara de manera inmediata asincrona despues de los sincronos.
setImmediate(funcion, arg)

setInterval()
Para ejecutar codigi un nuemro infinito de veces con un retrsa especificado de milisegundos.
Recibe una funcion, el intervalo y los argumentos de la funcion:
setInterval(funcion, intervalo, arg1, arg2)

*/
// creamos unas funcion:
function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}

function sumar(a, b) {
  let suma = a + b;
  console.log(suma);
}

// setTimeout:
setTimeout((mensaje) => {
  console.log(mensaje);
}, 2000, 'Hola mundo!!!');

setTimeout(mostrarTema, 4000, 'Node.js');

setTimeout(sumar, 6000, 3, 5);

// setImmediate:
console.log('Hola, soy sincrono. Antes de setImmediate');
setImmediate(mostrarTema, 'JavaScript');
console.log('Hola, soy sincrono. Despues de setImmediate');

// setInterval: Crearemos un ciclo infinito:
setInterval(mostrarTema, 1500, 'JavaScript a fondo');
setInterval(sumar, 1500, 1700, 39);
