function operacionAsincronica(x, y, callback) {
    console.log("Procesando...");

    setTimeout(() => {
        if (isNaN(x) || isNaN(y)) {
            callback(new Error("El valor proporcionado no es un número"), null);
        } else {
            let resultado = x * y; // Simula una operación
            callback(null, resultado);
        }
    }, 4000); // Simula una espera de 4 segundos
}

// Uso de la función con un callback
operacionAsincronica(5, "a", (error, resultado) => {
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log("Resultado:", resultado);
    }
});


