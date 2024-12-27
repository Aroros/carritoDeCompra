console.log("ok");

const productos = [
    {
        nombre: "Mantas",
        descripcion: "manta crecimiento, diseños exclusivos.",
        imagen: "imagenes/mantaCrecimientoRosa.jpeg",
        precio: 2550.85,
        url:"Manta.html",
    },
    {
        nombre: "Set toallon",
        descripcion: "Set compuesto por toallon capucha + babero + babita. ",
        imagen: "./imagenes/setCapucha.jpg",
        precio: 2300,
        url:"Toallon.html",
    },
    {
        nombre: "souvenir",
        descripcion: "Un hermoso recuerdo para nacimiento. x10 unidades.",
        imagen: "imagenes/Souvenir.jpeg" ,
        precio: 2400,
        url:"Souvenir.html",

    },
    {
        nombre: "Catrecito para muñecas",
        descripcion: "Romanticos catrecitos para bebotes..",
        imagen: "./imagenes/infantiles.jpeg",
        precio: 2750,
        url:"catrecito.html",
    },
    {
        nombre: "tazas-cintas",
        descripcion: "Tazas personalizadas con cintas identificatorias.",
        imagen: "./imagenes/tazaCintas.jpeg",
        precio: 2750,
        url:"Tazas.html",
    } 
]

console.log(productos[3].nombre)


let ProductosHTML = "";

for(let indice = 0; indice < productos.length; indice++){
    //creamos una cadena con interpolación para incorporar los datos del arreglo
    //en cada repetición, con += concatenamos cada nueva cadena a la anterior
    //ustedes adapten el html de este ejemplo por sus propio código
    ProductosHTML += ` 
                <div class="producto">
                    <img src=${productos[indice].imagen}
                        alt="foto primer producto MANTAS">
                    <div class="producto-contenido">
                        <h2>${productos[indice].nombre}</h2>
                        <h3>Precio: $${productos[indice].precio}</h3>
                        <p>${productos[indice].descripcion}</p>
                        <a  href="${productos[indice].url}" >Ver + info </a> <br>
                        <input class="boton-agregar-carrito" type="button" value="Agregar al carrito">
                        
                       
                    </div>
                </div>
    `;
} //<input type="number">                 //
    

  







console.log(ProductosHTML);

const contenedorProductos = document.getElementById("contenedorProductos");
//reemplazamos el contenido del div #contenedorProductos
contenedorProductos.innerHTML = ProductosHTML;

//*** Agregar un listener a los botones de los productos */
//guardar en variables los elem HTML que vamos a modificar
const botonesAgregar = document.querySelectorAll(".boton-agregar-carrito");
console.log(botonesAgregar);

const listaCarrito = document.querySelector("#carrito ul");
console.log(listaCarrito);

const totalCarrito = document.querySelector("#carrito p")
console.log(totalCarrito)

const mensajePagarCarrito = document.getElementById("mensajeCarrito");

let totalAPagar = 0;
//let cantidadProductos=1;
//agregamos el listener a cada botón Agregar
for(let indice = 0; indice < botonesAgregar.length; indice++){
    
    function agregarElemCarrito(){
        console.log("clic " + indice);
        const elementoLi = document.createElement("li");
       // const cantidadProductos+= ;

        elementoLi.innerText = ` ${productos[indice].nombre} $${productos[indice].precio} `;
        console.log(elementoLi);

        listaCarrito.appendChild(elementoLi);

        totalAPagar += productos[indice].precio;

        totalCarrito.innerText = "Total a Pagar: $" + totalAPagar;

        mensajePagarCarrito.innerText = "";
    }

    console.log(botonesAgregar[indice]);
    botonesAgregar[indice].addEventListener("click", agregarElemCarrito);
}

// agregar listener al botón Borrar
const botonBorrar = document.querySelector("#boton-borrar");
console.log(botonBorrar);

function borrarCarrito(){
    listaCarrito.innerHTML = "";
    totalCarrito.innerHTML = "Total a Pagar: $0";
    totalAPagar = 0; //ponemos en cero la variable 
    mensajePagarCarrito.innerText = "";
}

botonBorrar.addEventListener("click", borrarCarrito);

// agregar listener al botón Ir a Pagar
const botonPagar = document.querySelector("#boton-pagar");

function irAPagar(){
    
    if(listaCarrito.innerText === ""){
        mensajePagarCarrito.innerText = "No has seleccionado ningún producto";
    } else {
        window.location.href = "./pagos.html";
    }
    
}

botonPagar.addEventListener("click", irAPagar)