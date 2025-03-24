var num = prompt("digite o primeiro número");
var numero = prompt("digite o segundo número");

var soma = (parseFloat(num)+parseFloat(numero));

var sub =  (parseFloat(num)-parseFloat(numero));

var mult = (parseFloat(num) * parseFloat(numero));

var div = (parseFloat(num) / parseFloat(numero));

var rest = (parseFloat(num) % parseFloat(numero));

alert("a soma dos numeros é " + soma + "\na subtração é " + sub
    + "\na multiplicação é " + mult + "\na divisão é " + div
    + "\no resto é " + rest);