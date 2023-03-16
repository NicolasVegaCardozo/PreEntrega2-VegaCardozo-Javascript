class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const productos = [
    new Producto("cartuchera", 500),
    new Producto("lapices de colores", 1000),
    new Producto("pegamento adhesivo", 250),
    new Producto("cuaderno", 300),
    new Producto("repuestos de hojas nº3", 400),
    new Producto("mochila", 5000),
    new Producto("marcadores", 600),
    new Producto("birome", 100)
];

let carrito = []

let seleccion = prompt("Bienvenido a la Libreria Escolar: Mundo Papel\n ¿Desea comprar algun producto?\n si o no")

while (seleccion != "si" && seleccion != "no") {
    alert("Por favor, ingresar si o no")
    seleccion = prompt("¡Hola! ¿Desea comprar algo?\n si o no")
}


if (seleccion == "si") {
    alert("A continuacion, nuestra lista de productos:")
    let todosLosProductos = productos.map(
        (producto) => producto.nombre + " " + "$" + producto.precio);
    alert(todosLosProductos.join(" - "))

    while (seleccion != "no") {
        let producto = prompt("Agregar un producto a tu carrito")
        let precio = 0

        if (producto == "cartuchera" || producto == "lapices de colores" || producto == "pegamento adhesivo" ||
            producto == "cuaderno" || producto == "repuesto de hojas Nº3" || producto == "mochila" ||
            producto == "marcadores" || producto == "birome") {
            switch (producto) {
                case "cartuchera":
                    precio = 500;
                    break;
                case "lapices de colores":
                    precio = 1000;
                    break;
                case "pegamento adhesivo":
                    precio = 250;
                    break;
                case "cuaderno":
                    precio = 300;
                    break;
                case "repuesto de hojas nº3":
                    precio = 400;
                    break;
                case "mochila":
                    precio = 5000;
                    break;
                case "marcadores":
                    precio = 600;
                    break;
                case "birome":
                    precio = 100;
                    break;
                default:
                    break;
            }

            let unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?"))

            carrito.push({ producto, unidades, precio })

        } else {
            alert("No tenemos ese producto")
        }

        seleccion = prompt("¿Desea seguir comprando?")
    }

    function calcularPrecioTotalCarrito(carrito) {
        const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
        return total
    }

    carrito.forEach((carritoFinal) => {
        alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, 
        total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio} `)
    });


    const total = calcularPrecioTotalCarrito(carrito);
    alert(`El total a pagar por tu compra es: ${total}`);



    let email = prompt("Por favor, ingrese su dirección de correo electrónico para recibir un resumen de su compra:")


    alert("Enviando correo electrónico...");
    alert(`Correo electrónico enviado a ${email}. ¡Gracias por su compra!`);


}

alert("Gracias por su visita")




