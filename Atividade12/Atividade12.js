//tarefa 1 retangulo

var Retangulo = {
    Altura: "0",
    Largura: "0",
    setAltura(value){
        this.Altura = value; 
    },
    setLargura(value){
        this.Largura = value;
    },
    getAltura(){
        return this.Altura;
    },
    getLargura(){
        return this.Largura;
    },
    CalcArea(){
        return this.getAltura() * this.getLargura();
    }
}

alert("Tarefa 1");
valorAlt = parseFloat(prompt("Digite a altura do retangulo"));
if(isNaN(valorAlt))
{
    alert("fechando o programa, você digitou uma letra/palavra");
    window.close();
}
valorLarg = parseFloat(prompt("Digite a Largura do retangulo"));
if(isNaN(valorLarg))
{
    alert("fechando o programa, você digitou uma letra/palavra");
    window.close();
}
Retangulo.setAltura(valorAlt);
Retangulo.setLargura(valorLarg);
Media = Retangulo.CalcArea();
alert(Media);