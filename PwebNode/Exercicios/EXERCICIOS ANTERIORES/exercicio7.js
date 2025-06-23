let http = require('http');
let server = http.createServer(function(req,res){
    let opcao = req.url; // pegando a url da requisicao
    if(opcao=='/historia'){
        res.end("<html><body>Historia da Fatec Sorocaba</body></html>");
    }
    else if(opcao=='/cursos'){
        res.end("<html><body>Cursos da Fatec Sorocaba</body></html>");
    }
    else if(opcao=='/professores'){
        res.end("<html><body>Professores da Fatec Sorocaba</body></html>");
    }
    else {
        res.end("<html><body>Site da Fatec Sorocaba</body></html>");
    }
});
server.listen(3000);