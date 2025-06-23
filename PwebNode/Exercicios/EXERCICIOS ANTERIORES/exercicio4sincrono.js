const fs = require('fs');   // carregando módulo filesystem
const data = fs.readFileSync('file.txt');
// a execucao é bloqueada aqui até o arquivo ser lido
console.log(data.toString());
