"use strict";
var express = require('express');
var AccessControl = require('accesscontrol');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
var listadedatosfigura1 = [];
var cors = require('cors');
var hostname = '127.0.0.1';
var port = 3035;
app.use(cors());
app.use(bodyParser.json());
app.get('/figura2', function (req, res) {
    var fs = require('fs');
    var rawdata = fs.readFileSync('importar.json');
    var importar = JSON.parse(rawdata);
    res.send(importar);
});
app.get('/', function (req, res) {
    res.send('hola bienvenidos al server');
});
app.post('/', function (req, res) {
    var i = Math.random();
    var titulo = req.body.titulo;
    var estado = req.body.estado;
    var descripcion = req.body.descripcion;
    console.log(titulo, "el titulo");
    console.log(estado, "el estado");
    console.log(descripcion, "descripcion");
    var fs = require('fs');
    console.log(req.body, "el body");
    fs.readFileSync("importar.json", "utf8");
    var data = JSON.stringify(req.body);
    fs.appendFileSync(i + ".json", data);
    fs.writeFileSync('importar.json', data);
    /*con postman funciona mejor, al mandar varios datos juntos
    la verdad que no pude hacer para que no me sobreescribiera los datos
    cuando lleno los datos del formulario ,solo me muestra la ultima nota que cree
    esto no pasa con una base de datos , con el json es distinto :(*/
    res.send(data);
});
app.post('/editar', function (req, res) {
    var fs = require('fs');
    console.log(req.body, "el body");
    var data = JSON.stringify(req.body);
    fs.writeFileSync('importar.json', data);
    res.send(data);
});
app.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
