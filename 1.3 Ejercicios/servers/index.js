import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res)=>{
    res.send('<h1>Bienvenido a mi pagina</h1>');
})

app.get('/about', (req, res) =>{
    res.send('<h1>Acerca de </h1>');
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>Error 404 Not Found</h1>');
})
app.listen(port, ()=>{
    console.log(`El servidor esta corriendo en http://localhost:${port}/`)
})