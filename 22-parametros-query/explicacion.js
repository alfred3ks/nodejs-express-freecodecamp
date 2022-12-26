/*
Ha llegado el momento de trabajar con express.
Ahora aqui vemos como trabajar con los parametros query.
Son los parametros que se incluyen en la url separador por el simbolo de interrogacion, ? y pasamos un par clave valor.

http://localhost:3000/api/cursos/programacion/javascript?ordenar=vistas

ordenar es la clave y vistas el valor.

Vemos que modificamos el middware:

app.get('/api/cursos/programacion/:lenguaje', (req, res) => {

}

Estos son los fundamentos de routing en express. En el siguiente video veremos como genrar nuestras rutas y el codigo que se repite no mostrarlos, vemos que nuestros middeware siempre repiten la misma ruta:

/api/cursos/programacion/

Veremos que con el concepto de router ya nos evitamoe eso.
Seguimos:

*/