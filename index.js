const express=require('express');
const app=express();
const {join}=require('path');
const host="localhost";
const port=8000;



//rutas
const ruta=require('./routes/rutas');
const conexion=require('./bd/bdConet');

//para llamar la plantilla ejs
app.set('view engine','ejs');
app.set('views',join(__dirname,'./views'))


//para llamar los archivos estaticos
app.use(express.static('./public'))
app.use(express.urlencoded({extended:false}))


app.use(ruta);
app.use((req,res)=>{
    res.status(400).send("no se ecuntra la pagina")
})

app.listen(port,host,()=>{
    console.log(`url: http://${host}:${port}`);
})