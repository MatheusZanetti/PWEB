const axios = require('axios');
 
//Define a URL da API que será acessada.
//Essa URL retorna um post de exemplo (post nº 1) de uma API falsa chamada JSONPlaceholder.
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
 
// Fazendo uma solicitação GET para a API
axios.get(apiUrl)
.then((response) => {
   // Lida com a resposta da API
   const data = response.data;
   console.log('Dados da API:', data);
 })
 .catch((error) => {
   // Lida com erros caso ocorram
   console.error('Erro ao consumir a API:', error);
 });