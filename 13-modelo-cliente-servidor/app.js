/*
Modelo cliente servidor. Protocolo HTTP.
El modelo cliente-servidor es el que usamos para acceder a internet e obtener informacion y recursos.

Cliente, para este curso es el navegador el cual realiza las solicitudes a un servidor.

Un servidor, es un programa que se ejecuta en un servidor fisico para ofrecer un servicio al cliente. Envia informacion.

La comunciacion entre ellos es por medio de un formato.

El protocolo HTTP define el formato de los mensajes.

Un protocolo son el conjunto de reglas que permiten transmitir informacion entre dispositivos de una red.

HTTP -> Hypertext Transfer Protocol, protocolo de transferencia de hipertexto.

- Solicitudes HTTP: ------------
Request -> solicitud -> peticion

Una solicitud HTTP, un request posee todos estos elementos:
- Metodos HTTP, -> GET, POST, DELETE, PUT
- Camino(path), -> direccion donde esta el recurso.
- Version de HTTP,
- Cabeceras (headers),
- Cuerpo (body).

Estos son los elementos que le dan al servidor la informacion necesaria para que este procese la peticion.

Las headers, proveen informacion adicional sobre la solitud.
El body, contiene la informacion que debe ser enviada al servidor para procesar esa informacion. Este no se incluye en todos los tipos de solicitudes solo enaquellas que requieran enviar informacion por ejemplo POST, PUT.

HTTPS le agrega una capa de seguridad extra a nuestras solicitides.

- Metodos HTTP:
Es un verbo o sustantivo que incidca la intencion de la solicitud. Que es lo que quiere el cliente.
Normalmente lo veremos como verbos HTTP.

Entre los mas usados tenemos: GET, POST, DELETE, PUT. Hay mas.

GET:
Para solititar un recurso especifico. Por ekjemplo, un archivo, HTML, CSS o una imagen.

POST:
Para crear un recurso especifico, por ejemplo para agregar un usuario nuevo a una base de datos.

PUT:
Para modificar un recurso especifico. Por ejemplo, hacer un cambio en la base de datos.

DELETE:
Para eliminar un recurso en el servidor. Ejemplo eliminar un usuario en un BD.

- Respuestas HTTP: ----------
Response -> respuesta.
Una respuesta o response posee lo siguientes elementos:
- Codigo de estado,
- Texto de estado,
- Version de HTTP,
- Cabecera (headers),
- Cuerpo (body).

Los headers son opcionales y proveen informacion adicional sobre la respuesta.
El body contiene la informacion que debe ser enviada desde el servidor al cliente.
Con Node.js vamos a generar esas respuestas.

Ahora vamos a ver los codigos de estado HTTP:
Son necesarios para que el cliente sepa que ha pasado con el recurso que ha solicitado. Los codigos de estado dicen que ha sucedido. Estos son numeros que indican si se a completado o no existosamente una solicitud.

Tenemos un resumen:
- Respuestas informativas: (100-199),
- Respuestas satisfactorias (200- 299),
- Redirecciones (300-399),
- Errores del cliente (400-499),
- Errores del servidor (500-599).

En la MDN podemos ver informacion sobre dichos codigos de respuesta:
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

Con Node.js y express vamos a especificar esos codigos de respuestas HTTP de nuestro servidor.

Los codigos de estado mas comunes tenemos:
- 200 OK - respuesta existosa.
- 400 Bad Request - El servidor no pudo interpretar la solicitud.
- 404 Not Found - El servidor no pudo encontrar el recurso solitado.
- 500 Intenal Server Error - El servidor encontro una situacion que no sabe como manejar.

*/