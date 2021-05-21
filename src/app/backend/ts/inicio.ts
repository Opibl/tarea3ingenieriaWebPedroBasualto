
const express = require('express');
const AccessControl = require('accesscontrol');

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }))

const listadedatosfigura1 = [];

const cors = require('cors');

const hostname = '127.0.0.1';
const port = 3035;

app.use(cors());
app.use(bodyParser.json());


app.get('/figura2',(req:any,res:any)=>{
  
  const fs = require('fs');
  let rawdata = fs.readFileSync('importar.json');
  let importar = JSON.parse(rawdata);
  res.send(importar);
})


app.get('/',(req:any,res:any)=>{
  
  res.send('hola bienvenidos al server');
})

app.post('/',(req:any, res:any)=> {

  let i = Math.random();

  var titulo = req.body.titulo;
  var estado = req.body.estado;
  var descripcion = req.body.descripcion;
  
  
  console.log(titulo,"el titulo");
  console.log(estado,"el estado");
  console.log(descripcion,"descripcion");

  
  const fs = require('fs'); 
  console.log(req.body,"el body");
  fs.readFileSync("importar.json", "utf8");
  let data = JSON.stringify(req.body);
  fs.appendFileSync(`${i}.json`,data);
  fs.writeFileSync('importar.json', data);
  
  /*con postman funciona mejor, al mandar varios datos juntos
  la verdad que no pude hacer para que no me sobreescribiera los datos 
  cuando lleno los datos del formulario ,solo me muestra la ultima nota que cree
  esto no pasa con una base de datos , con el json es distinto :(*/

  res.send(data);
});


app.post('/editar',(req:any, res:any)=> {
  const fs = require('fs'); 
  console.log(req.body,"el body");
  let data = JSON.stringify(req.body);
  fs.writeFileSync('importar.json', data);
  res.send(data);
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


