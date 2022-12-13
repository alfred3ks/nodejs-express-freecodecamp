/*
Vamos a ver el modulo process de Node.js:
Proceso.

Este modulo nos prevee informacion sobre el proceso de Node.js que se esta ejecutando.
Y tambien puede tener cierto control sobre el proceso.
Veamos como a continuacion:

Podemos ver la version de node,
version V8,
La plataforma en que se esta ejecutando el proceso.
*/
console.log(process);
// ---------------------
/*
  Veamos algunas propiedades importantes:
  .env: Nos da las caraceristicas del sistema donde se ejecuta Node.js
  console.log(process.env);
 */
// ----------------------
/* Podemos capturas los argumentos que pasamos por consola con:
.argv
console.log(process.argv);

node process.js 4 5 -> corremos esto por consola y vemos la salida: -> un arreglo  [] de string

[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\alfsa\\Desktop\\nodejs-express-freecodecamp\\7-modulo-process\\process.js',
  '4',
  '5'
]
Podriamos capturar esos argumentos ya que es un array:

let process1 = process.argv[0];
let process2 = process.argv[1];
console.log(process1);
console.log(process2);
*/
// ---------------------------
/*
Tambien podemos saber cuanta memoria se esta usando:
process.memoryUsage();
let memoriaUsada = process.memoryUsage();
console.log(memoriaUsada);
*/
