import  express  from "express";
import { dirname } from 'path';
import { fileURLToPath }  from 'url';
import bodyParser from "body-parser";


const port = 3000;
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);
app.use(bodyParser.urlencoded({ extend:true }));

app.get('/', (req, res) =>{
    res.sendFile(__dirname+'/public/index.html')
});
app.post('/submit', (req, res)=>{
    console.log(req.body);
    res.send("Datos recibidos")
})
app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`);
})


