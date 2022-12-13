/*
Modulo fs file system. Sistema de archivo.
No es un modulo global asi que debemos importarlo con requiere().

Modulo que contiene funcionalidad muy util para trabajar con el sistema de archivos.
Podemos usar sus metodos y propiedades.
Todos los metodos de este metodo son asincronos por defecto.
Podemos escoger versiones sincronas de estos metodos agregando Sync a sus nombres.
fs.rename() -> asincrono.
fs.renameSync() -> sincrono.

Entre las operaciones utiles que podemos usar: En archivos.
- Leer,
- Modificar,
- Copiar,
- Eliminar,
- Cambiar nombre

Vamos a utilizar el archivo index.html para este modulo.

*/

const fs = require('fs');

console.log('Inicio'); // asi comprobamos que son asincronos:

// readFile():
// Vamos a leer el HTML con fs: .readFile(), recibe la ruta donde esta el archivo, segundo: debemos pasarle la codificacion 'utf-8', tres: recibe una funcion por callbacks:
fs.readFile('./index.html', 'utf-8', (err, data) => {
  if (err) {
    // Opcion A:
    console.log('Algo ha pasado..', err);
    return;
    // Opcion B:
    // throw err;
  }
  // retorna un string:
  console.log(data);
});

// NOTA: Podriamos tratar el error si lo hay de dos forma, con el return o con la intruccion throw, yo prefiero la primera aqui porque no quiero matar la app. Dependera de lo que necesites.

// Ahora vamos a ver como cambiar el nombre de un archivo.
// rename(), recibe la ruta del archivo a modificar, el nombre del archivo nuevo, y una funcion por callbacks:
fs.rename('main.json', 'main.txt', (err) => {
  if (err) {
    console.log('Error de cambiar nombre', err);
    return;
  }
  console.log('Nombre cambiado correctamente');
})

// Vamos ahora a agregar contenido al final del archivo: Algo como el append(): Este metodo crea un archivo nuevo si no existe.
// appendFile(), damos las ruta del archivo que queremos modificar, le pasamos el contenido a agregar y el callback
let contenido = '<p>Contenido agregado con appendFile</p>';
fs.appendFile('./main.html', contenido, (err) => {
  if (err) {
    console.log('Error de agregar contenido', err);
    return;
  }
  console.log('Archivo actualizado!!!');
});

// Ahora vamos a ver como reemplazar todo el contenido del archivo:
// writeFile(), si el archivo no existe lo crea tambien.
fs.writeFile('./main.txt', 'Hola que hace.', (err) => {
  if (err) {
    console.log('Error al escribir en archivo', err);
    return;
  }
  console.log('Contenido reemplazado.');
})

// Ahora vamos a ver como eliminar un archivo: Pasamos ruta y callback:
fs.unlink('main.html', (err) => {
  if (err) {
    console.log('Error al eliminar el archivo', err);
    return;
  }
  console.log('Archivo eliminado.');
});

console.log('Fin'); // asi comprobamos que son asincronos los metodos.

// Si quisieramos podriamos trabajar con las versiones sincronas para que se ejecuten una detras de otras. Cuando usemos esas versiones quitamos los callback. YA TENEMOS TEMA PARA PRACTICAR.