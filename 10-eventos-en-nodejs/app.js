/*

Los eventos en node.js:
Los eventos en node.js son muy importantes. Tenemos eventos asincronos y sincronos.

Un evento:
Es una accion que se realiza en la aplicacion.
Tambien podemos definir eventos que se desencadenen y ejecuten internamente en el servidor.

Node.js esta basado en eventos asincronos. OJO con esto.
En Node.js tenemos un modulo especifico que nos permite definir nuestros propios eventos.
Tenemos un concepto muy importante. Emitters(Emisores).
Objetos que se emiten eventos nombrados y llaman a funciones especificas cuando ocurren.

Los emisores son instancias de la clase EventEmitter. -> POO

Estos objetos tienen un metodo .on() para asociar una funcion al evento.
Llamaremos ese evento cuando queramos asociar un evento cuando va a ocurrir un certo evento.
La funcion se ejecuta cuando ocurre el evento.

Y esa funcion se denomina "Event Handler". (Maneja el evento).

Para poder crear nuestro propios eventos en Node.js tenemos el modulo events.
Este modulo nos permite a los eventos:
- definir,
- emitir,
- escuchar

OJO con este modulo es muy importante.
Veamos a continuacion como incluir ese Modulo:

*/
// Requerimos la libreria, OJO la llamamos asi para llamar directo la funcion y no tener que estar haciendo  evento.EventEmitter.on();
const EventEmitter = require('events');

console.log(EventEmitter); // [Function: EventEmitter]
/*

Vemos que tenemos una funcion, con sus distintas propiedades.
{
  once: [AsyncFunction: once],
  on: [Function: on],
  getEventListeners: [Function: getEventListeners],
  EventEmitter: [Circular *1],
  usingDomains: false,
  captureRejectionSymbol: Symbol(nodejs.rejection),
  captureRejections: [Getter/Setter],
  EventEmitterAsyncResource: [Getter],
  errorMonitor: Symbol(events.errorMonitor),
  defaultMaxListeners: [Getter/Setter],
  setMaxListeners: [Function (anonymous)],
  init: [Function (anonymous)],
  listenerCount: [Function (anonymous)]
}

Vemos el metodo on(), ya antes nombrado. El EventEmitter, etc. Todos los metodos que podemos usar. Vamos a ver el metodo on() asociado a una funcion. Lo vemos a continuacion.
*/

// Vamos a ver como manejar el evento y como emitir ese evento.
// Instanciamos la clase:
const emisorProductos = new EventEmitter();

// Llamamos al metodo on() que recibe el evento, y de callback la funcion: Asi manejamos el evento: El callback puede recibir parametros  que se pasa como argumento en el metodo emit(), si necesitamos las parametros los podemos incluir.
emisorProductos.on('compra', (total, numProductos) => {
  // Aqui hacemos nuestras funciones cuando se genera una compra, mandar un correo, etc.
  console.log(`Se realizo una compra por ${total}€.`);
  console.log(`Número de productos de la compra: ${numProductos}`);
});

// Emitimos el evento usando el metodo emit(); Le psamos el evento. El metodo emit() es el que dispara el evento.
emisorProductos.emit('compra', 230, 6);

// En general en Node.js a las funciones que manejan los eventos, la funcion de callback se les denomina Event Handler. Estan alli esperando que pase el evento. Ya sabemos como trabajar con el modulo event.

