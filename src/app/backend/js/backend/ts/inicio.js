"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var AccessControl = require('accesscontrol');
var app = express();
var bodyParser = require("body-parser");
var listadedatosfigura1 = [];
var cors = require('cors');
var hostname = '127.0.0.1';
var port = 3034;
app.use(cors());
app.use(bodyParser.json());
app.get('/figura2', function (req, res) {
    var fs = require('fs');
    var rawdata = fs.readFileSync('nuevos_datos.json');
    var nuevos_datos = JSON.parse(rawdata);
    console.log(nuevos_datos);
    res.send(nuevos_datos);
});
app.get('/', function (req, res) {
    res.send('hola bienvenidos al server');
});
app.post('/', function (req, res) {
    var _a = req.body, titulo = _a.titulo, estado = _a.estado, descripcion = _a.descripcion;
    console.log(req.body);
    var listaLLegada = [{
            titulo: req.body.titulo,
            estado: req.body.estado,
            descripcion: req.descripcion
        }];
    /*let newDatos = {
      titulo,
      estado,
      descripcion
    }
    */
    /*if(!titulo||!estado||descripcion){
      res.status(400).send("las entradas son incorrectas");
      return;
    }
    */
    //console.log(titulo);
    //console.log(estado);
    //console.log(descripcion);
    //listadedatosfigura1.push(newDatos);
    var fs = require('fs');
    var rawdata = fs.readFileSync('nuevos_datos.json');
    var nuevos_datos = JSON.parse(rawdata);
    console.log(nuevos_datos);
    var data = JSON.stringify(listaLLegada);
    fs.writeFileSync('nuevos_datos.json', data);
    console.log(listaLLegada);
    res.send("nota creada");
});
app.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
