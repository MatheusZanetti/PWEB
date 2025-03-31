
alert("Jogo papel pedra e tesoura.");


let escolha = prompt("Escreva pedra papel ou tesoura");
let escolhaMinuscula = escolha.toLowerCase();
if(escolhaMinuscula != "pedra" && escolhaMinuscula != "papel" && escolhaMinuscula != "tesoura" )
    {
    prompt("vc não escreveu pedra ou papel ou tesoura");
}else
{
    let computerOP = ["pedra", "papel", "tesoura"];
    let computerEscolha = computerOP[Math.floor(Math.random()*3)];

    alert("o computador escolheu " + computerEscolha);
    if(escolhaMinuscula === computerEscolha){
        alert("Empate");
    }
    else if((escolhaMinuscula == "pedra" && computerEscolha == "tesoura") ||
       (escolhaMinuscula == "papel" && computerEscolha == "pedra") ||
       (escolhaMinuscula == "tesoura" && computerEscolha == "papel")){
        alert("você venceu");
       }
       else{
        alert("você perdeu");
       }
}

