


let altura = parseFloat(prompt("Digite a sua altura"));
let peso = parseFloat(prompt("Digite o seu peso"));
alert("Gerando tabela...");
prompt("IMC\t\tClassificação\t\tObesidade\n\nMenor que 18,5\t\tMagreza\t\t0\nentre 18,5 e 24,9\t\tNormal\t\t0\nentre 25.0 e 29.9\t\tSobrepeso\t\tI\nentre 30.0 e 39.9\t\tObesidade\t\tII\nmaior que 40.0\t\tObesidade Grave\t\tIII\nDigite qualquer coisa para ver o seu peso");
      

function IMC(peso, altura){
    
    let imc = peso/(altura*altura);
    let classificacao = "";
    
    switch (true) {
        case (imc < 18.5):
            classificacao = "Magreza (Obesidade grau 0)";
            break;
        case (imc >= 18.5 && imc <= 24.9):
            classificacao = "Normal (Obesidade grau 0)";
            break;
        case (imc > 24.9 && imc <= 29.9):
            classificacao = "Sobrepeso (Obesidade grau I)";
            break;
        case (imc >= 30.0 && imc <= 39.9):
            classificacao = "Obesidade (Obesidade grau II)";
            break;
        case (imc >= 40):
            classificacao = "Obesidade Grave (Obesidade grau III)";
            break;
    }

    return `Seu IMC é ${imc.toFixed(2)}\nClassificação: ${classificacao}`;
}

    alert(IMC(peso,altura))
