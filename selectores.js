/* Sirve para buscar elementos por ID */ /* Muy importante que no tengamos 2 id con el mismo nombre ya que tomara solo el primero */
console.log(document.getElementById("cabecera"));
/* Devuelve un LISTADO, NO UN ARRAY de todos los elementos que tengan la clase border-grey */
console.log(document.getElementsByClassName("border-grey"));
/* Devuelve siempre un listado de el tag que le pasemos, aunque sea 1 */
console.log(document.getElementsByTagName("li"));
/* Devuelve un listado buscando por name="" */
console.log(document.getElementsByName("cabeceraName"));


/* Selectores de css*/ /* 1 solo elemento */ /* Id,class,name,tag,etc*/
console.log(document.querySelector("li"));
/* Lo mismo pero para varios elementos */ /* Id,class,name,tag,etc*/
console.log(document.querySelectorAll(".border-grey"));

/* ----------------- */

const elemento = document.getElementById("cabecera");
/* Devuelve el hijo del elemento que seleccionamos */ /* Pueden ser muchos */
console.log(elemento.children);
/* Devuelve el padre */ /* Solo puede ser 1 padre */
console.log(elemento.parentElement);


/* ----------------- */

/* DINAMICO, si cambiamos algo aparecen los nuevos cambios que realizamos* NO ES UN ARRAY/
const lista1 = document.getElementsByClassName("border-grey");
/* ESTATICO, si modificamos algo va a seguir mostrando los mimos elementos del principio*/
const lista2 = document.querySelectorAll(".border-grey");
