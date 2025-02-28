import express from 'express';

const app = express(); 
const port = 3000;

app.get('/', (req, res)=>{
    res.send('<p>Respuesta GET</p>');
});
app.post('/registro', (req, res)=>{
    res.sendStatus(201);
});
app.put('/usuario/actualizar', (req, res)=>{
    res.sendStatus(200);
    res.send("Usuario actualizado");
});

app.patch('/usuario/modificar', (req, res)=>{
    res.sendStatus(200);
    res.send("Usuario modificado");

});
app.delete('/usuario/eliminar', (req, res)=>{
    res.sendStatus(200);
    res.send("Usuario eliminado");

});

app.listen(port, ()=>{
    console.log(`Servidor en http://localhost:${port}`);
})