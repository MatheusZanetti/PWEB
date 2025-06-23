let app = require('./app/config/server');   // carregando o modulo do servidor

/*
// passamos tudo para ser carregado no consign

let rotaHome = require('./app/routes/home');    // definindo a rota
rotaHome(app);                                  // executando

let rotaAdicionarUsuario = require('./app/routes/adicionar_usuario');
rotaAdicionarUsuario(app);

let rotaHistoria = require('./app/routes/historia');
rotaHistoria(app);

let rotaProfessores = require('./app/routes/professores');
rotaProfessores(app);

let rotaCursos = require('./app/routes/cursos');
rotaCursos(app);
*/ 

app.listen(3000, function(){
    console.log("servidor com express foi carregado");
});

// para rodar: node app.js