//escribe un enlace //perfil de github
//png guardar
//txt con el enlace proporcionado

import inquirer from 'inquirer';
//var qr = require('qr-image');
import qr from 'qr-image';
import fs from "fs";

inquirer
  .prompt([
    {
    message:"Escribe la direccion de pu pagina de tu GITHUB: ",
    name: "URL",
    },
  ])
  .then((answers) => {

    console.log(answers);
    const enlace = answers.URL;
    var qr_svg = qr.image(enlace);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
    fs.writeFile("./enlace.txt", enlace, (err) => {
        if(err) throw err;
        console.log("El archivo se ha creado");
    });
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });