// Listado de productos de la tienda en un array

let listaProductos = {
    "productos" : [
        {    
    "description": "Bombón Ferrero Rocher. 3 Unidades",
    "img": "img/ferrero_3.webp",
    "price(ars)": 238   
    }, {   
    "description": "Bombón Ferrero Rocher. 8 Unidades",
    "img": "img/ferrero_8.webp",
    "price(ars)": 877 
    }, {   
    "description": "Bombón Ferrero Rocher. 12 Unidades",
    "img": "img/ferrero_12.webp",
    "price(ars)": 1005  
    }, {   
    "description": "Bombón Ferrero Rocher. 24 Unidades",
    "img": "img/ferrero_3.webp",
    "price(ars)": 1915  
    }, {        
    "description": "Huevo de pascua Ferrero Rocher 225g",
    "img": "img/ferrero_huevo.jpg",
    "price(ars)": 2900  
    }, {    
    "description": "Huevo de pascua Ferrero Rocher 365g",
    "img": "img/ferrero_huevo.webp",
    "price(ars)": 5700 
    }, {   
    "description": "Nutella 140g Pasta De Avellanas",
    "img": "img/nutella_140.webp",
    "price(ars)": 585  
    }, {    
    "description": "Nutella 350g Pasta De Avellanas",
    "img": "img/nutella_350.webp",
    "price(ars)": 1200 
    }, {    
    "description": "Nutella 3kg Pasta De Avellanas",
    "img": "img/nutella_3kg.webp",
    "price(ars)": 5225     
    }
    ]
}

// Metodo reduce para generar las tarjetas

const tarjetasHtml = listaProductos.productos.reduce((acc, elemento, i) => {   

    return acc = acc + `    
        <div class="tarjeta">
            <div class="img-container">
                <img src=${elemento.img} alt=${elemento.description}>
            </div>   
            <p class="p-tarjeta">
                ${elemento.description}
            </p> 
            <div>
                <p class="p-tarjeta">
                    Precio: ${elemento["price(ars)"]}
                </p>               
            </div>   
        </div>
    `       
},"")

const contenedorTarjetas = document.querySelector(".contenedor-tarjetas")

contenedorTarjetas.innerHTML = tarjetasHtml

//Recepcion de valores por prompt para generar un saludo al cliente

const formularioSaludo = document.querySelector(".nombre-saludo")
const inputNombreSaludo = document.querySelector(".input-nombre")
const saludo = document.querySelector(".saludo")

formularioSaludo.onsubmit = (event) => {
    event.preventDefault()
    saludo.innerHTML = `Hola ${inputNombreSaludo.value} te muestro el listado de productos de la tienda: `
    formularioSaludo.reset()
    formularioSaludo.style.display = "none";
}

//Cambiando el color de fondo y el tama;o del texto al mover el mouse sobre las tarjetas de productos

const divTarjeta = [document.querySelectorAll(".tarjeta")]

console.log(divTarjeta)

divTarjeta[0].forEach( function (ele , i, arreglo) {
    ele.onmouseover = () => {    
        ele.classList.toggle("tarjeta-over")        
    } 
    ele.onmouseout = () => {
        ele.classList.toggle("tarjeta-over") 
    }
})







