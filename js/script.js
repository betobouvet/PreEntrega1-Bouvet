let enlaces = document.querySelectorAll('a');

for (let index = 0; index < enlaces.length; index++) {
    console.log(enlaces[index].dataset.precio)
}
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(enlace.dataset.precio)
        console.log(enlace.dataset.descuento)
        let precioTotal = enlace.dataset.precio - (enlace.dataset.precio*enlace.dataset.descuento)/100;
        if(precioTotal > 50000){
            alert('Te bandeaste los $50000. ¿Podés pagarlo?')
        }
        else{
            alert('Si queres, compra más. Estas gastando menos de $50000.')
        }
        alert(`El precio es: ${enlace.dataset.precio}\nEl descuento aplicado es: ${enlace.dataset.descuento}\nEl precio total es ${precioTotal}`)
    });
});



