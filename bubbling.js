const form = document.querySelector("#formulario")
const enviarFormulario = (evento) => {
    evento.preventDefault();
    console.log(evento.target.name.value,evento.target.email,evento.target.password);
    /* el target es para seleccionar los name de el form */
    /* y el value para obtener el valor de lo que escribimos en cada input del form */
}

form.addEventListener('submit',enviarFormulario);


const section = document.querySelector("#seccion");
const titulo2 = document.querySelector(".titulo2");


titulo2.addEventListener("click",(event)=>{
    console.log(event.bubbles);
    console.log("Click en el titulo");
});

section.addEventListener("click",()=>{
    console.log("Click en el section");
});


/* event.cancelBubbles nos tira si como programadores hemos cancelado el bubbling hacia arriba de ese evento  */