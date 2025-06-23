const prompt = require('prompt-sync')();        // o parenteses indicam que estamos executando a funcao prompt syc. 
// Ao fazer isso, a funcao retorna um valor, que é uma nova funcao que pode ser usada para criar prompts

function saudacao(nome){
    console.log('Oi, ' + nome);
}

function entradaNome(callback){
    let nome = prompt('Digite seu nome: ');
    callback(nome);     // chamando a funcao callback
}

entradaNome(saudacao);