let total = 0;
let continuar = true;

while (continuar) {
    let eleccion = prompt(
        "Bienvenido/a a la tienda de suplementos Primal:\n\n" +
        "1. Proteína Whey ($36000)\n" +
        "2. Creatina ($32000)\n" +
        "3. Omega ($24000)\n" +
        "4. Ganador de masa ($48000)\n" +
        "5. Salir"
    );

    if (eleccion === "1") {
        total += 36000;
        console.log("Su total es de $" + total);
    } else if (eleccion === "2") {
        total += 32000;
        console.log("Su total es de $" + total);
    } else if (eleccion === "3") {
        total += 24000;
        console.log("Su total es de $" + total);
    } else if (eleccion === "4") {
        total += 48000;
        console.log("Su total es de $" + total);
    } else if (eleccion === "5") {
        let totalconEnvio = calcularTotalconEnvio(total);
        mostrarResumen(total, totalconEnvio);
        continuar = false;
    } else {
        alert("Opción no válida");
    }
}

function calcularTotalconEnvio(subtotal) {
    let costoenvio;
    if (subtotal >= 60000) {
        costoenvio = 0
    }else {
        costoenvio = 7000
    }
    return subtotal + costoenvio;
}

function mostrarResumen (total, totalconEnvio) {
    let costoenvio = totalconEnvio - total;
    alert(
        "Resumen de tu compra \n" +
        "Subtotal: $" + total + "\n" +
        "Costo de envío: $" + costoenvio + "\n" +
        "Total final: $" + totalconEnvio
    );
}