let enlaces = document.querySelectorAll('a');
let nombre = prompt(`Bienvenido, ingresa tu nombre:`);
alert(`Hola ${nombre}, Bienvenido a la pagina.Es un gusto`);

for (let index = 0; index < enlaces.length; index++) {
    console.log(enlaces[index].dataset.precio)
}
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(enlace.dataset.precio)
        console.log(enlace.dataset.descuento)
        let precioTotal = precio_total(enlace.dataset.precio, enlace.dataset.descuento);
        if(precioTotal > 50000){
            alert('Vas a superar los $50000. ¿Deseas Continuar?')
        }
        else{
            alert(`Puedes seguir comprando. Estas gastando menos de $50000.`)
        }
        alert(`El precio es: ${enlace.dataset.precio}\nEl descuento aplicado es: ${enlace.dataset.descuento}\nEl precio total es ${precioTotal}`)
    });
});

function precio_total(precio,descuento){
    return precio - (precio*descuento)/100;
    
}
