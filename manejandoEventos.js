/* MANERA DE MANEJAR EVENTOS */ /* Es la mejor manera */ 
function clickTitulo(event){
    console.log(event); /* Del event podemos sacar mucha informacion sobre el evento que utilizamos */
}
const titulo2 = document.getElementById("tituloForm");

titulo2.addEventListener('click',clickTitulo)
/* Tambien podemos eliminar ese evento */
titulo2.removeEventListener('click',clickTitulo)

/* BUSCAR REFERENCIA DE EVENTOS EN MDN, todos los eventos que podemos utilizar */

/* -------------------------------------- */
document.addEventListener('DOMContentLoaded',()=>{ /* Es un evento el cual no va a ayudar para hacer las cosas una vez que el documento se haya cargado */
    console.log("El documento se ha cargado");
})

/* --------------------------------------- */
const form = document.querySelector("#formulario")
const enviarFormulario = (evento) => {
    evento.preventDefault();
    console.log(evento.target.name.value,evento.target.email,evento.target.password);
    /* el target es para seleccionar los name de el form */
    /* y el value para obtener el valor de lo que escribimos en cada input del form */
}

form.addEventListener('submit',enviarFormulario);