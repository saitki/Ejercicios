function operacionAsincronica(x, callback){
    console.log("Processando..");

    setTimeout(() => {
    if(isNaN(x) ){
        callback(new Error("Ingrese un valor entero.."), null);
    } else {
        callback(null, x);
    }
    }, 4000);
}

operacionAsincronica(5, (error, resultado) => {
    if(error){
        console.error(error.message);
    } else {
        console.log("Resultado:", resultado);
    }
})