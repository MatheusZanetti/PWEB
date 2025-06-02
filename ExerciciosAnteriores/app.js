var express = require('express');
var texto = require('./modulo1');
var path = require('path');

var app = express(); // executando o express 


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 


app.get('/formulario_adicionar_usuario', function(req, res){
    res.render("admin/adicionar_usuario");
});

app.get('/home', function (req, res) {
    res.render("home/index");
});

app.get('/historia', function (req, res) {
    res.render("informacao/historia");
});

app.get('/cursos', function (req, res) {
    res.render("informacao/cursos");
});


app.get('/professores', function (req, res) {
    res.render("informacao/professores");
});

app.listen(3000, function () {
    console.log(texto);
});