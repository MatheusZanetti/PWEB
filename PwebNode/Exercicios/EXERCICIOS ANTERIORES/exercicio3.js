let soma = 0;
for(let i=2; i<=process.argv.length-1; i++){
    soma = soma + Number(process.argv[i]);
}
console.log("soma = " + soma);

// node .\Exercicios\exercicio3.js 1 2 3    ---> node => posicao 0   |   .\Exercicios\exercicio3.js => posicao 1     |    1 2 3 => parametros (posição 2, 3 e 4)