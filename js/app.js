// Variable
let carrito = document.querySelector("#carrito");
let contenedorCarrito = document.querySelector("#lista-carrito tbody");
let vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
let listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

cargarEventListener();
function cargarEventListener() {
    // Cuando agregas un curso presionando "agregar al Carrito"
    listaCursos.addEventListener("click", agregarCurso);
}

// Funciones

function agregarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains("agregar-carrito")) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
    
}

// Lee el contenido del HTML al que le dimos "Click" y extrae la informacion del curso

function leerDatosCurso(curso) {
    console.log(curso);

    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector("span").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1,
    }
    // Agrega elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
    console.log(articulosCarrito); 

    carritoHTML();
}

// Muestra el carrito de compras en el HTML
function carritoHTML() {

    // Limpiar el HTML 
    limpiarHTML();

    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso => {
       const row = document.createElement("tr");
       row.innerHTML = `
       <td>
        ${curso.titulo}
       </td>  
       `;

       // Agrega el HTML del carrito en el tbody
       contenedorCarrito.appendChild(row);
    })
}

// Elimina los cursos del tbody
function limpiarHTML() {
    // Forma lenta
    // contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }

}