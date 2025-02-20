try {
    let numero = "123"
    let numeroConvertido = Number(numero);

    if(isNaN(numeroConvertido)){
        throw new Error ("Error, no es un numero")
    } 
    console.log("Numero convertido es: ", numeroConvertido)
} catch(error){
    console.log("Error: ", error.message)

}