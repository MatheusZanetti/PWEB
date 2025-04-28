 // criando objeto usando Object()
 var funcionario = new Object();
funcionario.matricula = "000001111123";
funcionario.Funcao = "Vendedor";
funcionario.nome = "Pedro";
 alert(`Matricula=${funcionario.matricula} nome=${funcionario.nome} funcao=${funcionario.Funcao}`);
 console.log(`Matricula=${funcionario.matricula} nome=${funcionario.nome} funcao=${funcionario.Funcao}`);


 // literal
 var Funcionario3 = {
     Matricula: "12345",
     nome: "chave",
     funcao: "Chaveiro"
 }
 alert("Matricula=" + Funcionario3.Matricula + " nome=" + Funcionario3.nome + " função=" + Funcionario3.funcao);
 console.log("Matricula=" + Funcionario3.Matricula + " nome=" + Funcionario3.nome + " função=" + Funcionario3.funcao);

  // criando com {}
  var funcionario2 = {};
  funcionario2.matricula = "9999";
  funcionario2.nome = "porta";
  funcionario2.Funcao = "porteiro"
  alert("ra=" + funcionario2.matricula + " nome=" + funcionario2.nome + " funcao=" + funcionario2.Funcao);


 