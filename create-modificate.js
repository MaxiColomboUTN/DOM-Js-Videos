/* Creamos un elemento */
const titulo2 = document.createElement("h2");
/* Creamos texto */
const texto = document.createTextNode("Nuevo titulo para la clase");
/* Crear comentarios */
const comentarios = document.createComment("Comentario que no sirve");


/* -------------- */
const articulo = document.querySelector("article");

const articulo2 = articulo.cloneNode(true) /* Clona el elemento en MEMORIA y si queremos que clone todo lo de dentro le pasamos como parametro TRUE */ /* Pero no son iguales si hacemos articulo === articulo2 da false */
/* -------------- */
/* Sirve para ver si el elemento es visible en el HTML */
articulo.isConnected;
articulo2.isConnected;

/* -------------- */
/* PRIMER HIJO, ULTIMO HIJO --- HERMANO SUPERIOR, HERMANO INFERIOR */
const section = document.getElementById('section');
/* Agrega COMO ULTIMO HIJO */
section.appendChild(articulo2);
/* Agreaga X Posicion */
section.insertAdjacentElement('beforebegin',articulo2) //HERMANO MAYOR
section.insertAdjacentElement('beforeend',articulo2) //ULTIMO HIJO
section.insertAdjacentElement('afterbegin',articulo2) //PRIMER HIJO
section.insertAdjacentElement('afterend',articulo2) //HERMANO MENOR


/* -------------- */
/* Con esto podemos agregar X cosa al HTML en este caso solo un h3 en el beforeend de section */
section.insertAdjacentHTML('beforeend','<h3>Hola como estas, estoy por debajo</h3>')
/* -------------- */
/* Para eliminar cosas del html */
/* section.remove() */

/* -------------- */
/* Nos muestra que se ve en el HTML de el elemento */
section.innerHTML
/* PARA REMPLAZAR COSAS DEL HTML */
/* section.innerHTML = '<h2>Nuevo titulo modificado con innerHTML</h2>' */