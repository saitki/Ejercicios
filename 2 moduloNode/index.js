const fs = require("fs");

/*fs.writeFile("archivo.txt", "Hola mundo, soy un texto txt", (err)=>{
    if(err) throw err;
    console.log("El archivo se ha creado");
});*/


//modificar el texto.txt
//escribir aqui abajo el metodo correspondiente para eleer el archivo.txt

fs.readFile('./archivo.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
})

