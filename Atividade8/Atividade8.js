let Maxp = 45;
let IdadeVelho = 0;  
let IdadeNovo = Infinity; 
let TotalId = 0;
let TotalFemini = 0;
let TotalMasc = 0;
let TotalOutr = 0;
let TotalOtimas = 0;
let TotalBom = 0;
let TotalRegular = 0;
let TotalPessima = 0;
let count = 0;

do {
    let Idade = prompt("Pessoa " + (count + 1) + "\n\n\nDigite a sua idade");
    Idade = parseInt(Idade);

    if (isNaN(Idade)) {  
        alert("Idade inválida! Tente novamente.");
        continue;
    }

    TotalId += Idade; 

    if (Idade < IdadeNovo) {IdadeNovo = Idade;}
    if (Idade > IdadeVelho) {IdadeVelho = Idade;}

    let Sexo = prompt("Pessoa " + (count + 1) + "\n\n\nDigite seu gênero (masculino, feminino ou outro)");
    if ("feminino" === Sexo.toLowerCase()) {TotalFemini++;}
    else if ("masculino" === Sexo.toLowerCase()) {TotalMasc++;}
    else {TotalOutr++;}

    let Avali = prompt("Pessoa " + (count + 1) + "\n\nDigite a sua avaliação \n1 para péssimo(😡)\n2 para regular(😐)\n3 para bom(👍)\n4 para ótimo(🤩)");
    if (Avali === '1') {TotalPessima++;} 
    else if (Avali === '2') {TotalRegular++;}
    else if (Avali === '3') {TotalBom++;} 
    else if (Avali === '4') {TotalOtimas++;}

    count++;

} while (count < Maxp);

let MediaIdTotal = TotalId / Maxp;
let PorcentoP = (TotalPessima / Maxp) * 100;

if(isNaN(MediaIdTotal)){
    MediaIdTotal = 0;
}

alert("Media das idades " + MediaIdTotal);
alert("Idade da pessoa mais velha " + IdadeVelho);
alert("Idade da pessoa mais jovem " + IdadeNovo);
alert("A porcentagem de pessoas que achou pessimo é " + PorcentoP + "%");
alert("Quantidade de Mulheres :" + TotalFemini);  
alert("Quantidade de Homens :" + TotalMasc); 
alert("Quantidade de Outros :" + TotalOutr);