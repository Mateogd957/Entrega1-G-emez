let total = 0;
let continuar = true;

while (continuar) {
    let eleccion = prompt(
        "Bienvenido/a a la tienda de suplementos Primal:\n\n" +
        "1. Proteína Whey ($36000)\n" +
        "2. Creatina ($32000)\n" +
        "3. Omega ($24000)3\n" +
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
        console.log("Gracias por visitarnos, su total es de $" + total);
        continuar = false;
    } else {
        alert("Opción no válida");
    }
}
