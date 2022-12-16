/*
Vamos a ver como es una estructura de una url:

url -> es una direccion a un recurso en internet.
url -> Uniform Resourse Locator. Localizar uniforme de recurso.

Estructura:
https://www.google.com/

https -> el protocolo
www. -> esto es un subdominio, es informacion adicional agregada al inicio del dominio de una web. Permite a los sitios web organizar y separar la informacion para distintos propositos.
google -> es el dominio, nombre de la pagina. Es una referencia unica a un sitio web en internet.
.com -> dominio de nivel superior. TLD top level domain
/ -> el path, la raiz de la pagina web. Representa el archivo o directorio en el servidor web. Pueden tener parametros para personlizarlo y son parte de la url. estos se denominan parametros de la ruta y son parte de la url:
/usuario/14

Tambien tenemos otros tipos de parametros, los query strings:
https://www.google.com/search?q=curso+de+node

?q=curso+de+node

Los parametros query son parametros usadso para obtener contenido dinamico. Por ejemplo filtrar una lista de recursos.

Tenemos pares clave:valor

q -> clave
curso+de+node -> valor

Para incluir mas parametros query usamos entre ellos el ampersan&:
?q=curso+de+node&sourceid=chrome&ie=UTF=8

Normalmente usamos parametros query para filtrar solicitude GET (optener esos recursos).
Node.js tiene su propio modulo de url.






*/