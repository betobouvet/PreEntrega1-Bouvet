acceso();

function acceso() {
    let main = document.getElementById('acceso');

    if (confirm('Hola, estas por ingresar a una pagina de venta de repuestos varios, si desea ver los productos haga click en "Aceptar", en caso contrario, en "Cancelar"')) {
        alert("Clickeo Aceptar!, se mostrará la tienda.");
        main.style.display = 'block';
    } else {
        alert("Hizo click en Cancelar!, que pena, usted se pierde la gran variedad de productos de nuestra tienda");
        main.style.display = 'none';
    }
}

let nombre = prompt(`Ingresa tu nombre:`);
alert(`Hola ${nombre}, Bienvenido a la pagina.Es un gusto`);


let enlaces = document.querySelectorAll('a');


for (let index = 0; index < enlaces.length; index++) {
    console.log(enlaces[index].dataset.precio)
}
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(enlace.dataset.precio)
        console.log(enlace.dataset.descuento)
        let precioTotal = precio_total(enlace.dataset.precio, enlace.dataset.descuento);
        if (precioTotal > 50000) {
            alert('Estas por comprar este producto. ¿Deseas Continuar?')
        }
        else {
            alert(`Puedes seguir comprando. Estas gastando menos de $50000.`)
        }
        alert(`El precio es: ${enlace.dataset.precio}\nEl descuento aplicado es: ${enlace.dataset.descuento}\nEl precio total es ${precioTotal}`)
    });
});

function precio_total(precio, descuento) {
    return precio - (precio * descuento) / 100;

}
