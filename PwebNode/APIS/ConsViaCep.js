const axios = require('axios');
 
// CEP que deseja consultar
const cep = '18013-280';
 
// URL da API ViaCEP para consulta de CEP
const viacepUrl = `https://viacep.com.br/ws/${cep}/json`;
console.log(viacepUrl)
 
// Fazendo uma solicitação GET para a API ViaCEP
axios.get(viacepUrl)
 .then((response) => {
   // Verifica se a consulta foi bem sucedida (status 200)
   if (response.status === 200) {
     // Extrai os dados do endereço da resposta
     const endereco = response.data;
 
     // Exibe as informações do endereço no console
     console.log('Endereço completo:');
     console.log(`  CEP: ${endereco.cep}`);
     console.log(`  Logradouro: ${endereco.logradouro}`);
     console.log(`  Complemento: ${endereco.complemento}`);
     console.log(`  Bairro: ${endereco.bairro}`);
     console.log(`  Cidade: ${endereco.localidade}`);
     console.log(`  UF: ${endereco.uf}`);
   } else {
     // Erro na consulta (status diferente de 200)
     console.error('Erro na consulta do CEP:', response.status);
   }
 })
 .catch((error) => {
   // Erro durante a comunicação com a API
   console.error('Erro geral:', error);
});