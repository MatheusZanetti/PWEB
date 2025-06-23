// Funcao para imprimir a primeira parte
function Parte1(){
    for(var i=1; i<=10; i++){
        console.log("primeira parte: " + i);
    }
}

setTimeout(Parte1, 2000);   // para atrasar

const fs = require('fs').promises;  // importa a versao com Promises
fs.readFile('file.txt', 'utf8')  // o utf8 evit a necessidade do toString()
    .then(data => {
        const registros = data.split('\n');
        registros.forEach((registro, index) => {
            console.log("segunda parte: " + registro);
        });
    })
    .catch(err => {
        console.error("Erro ao ler o arquivo: ", err);
        
    });