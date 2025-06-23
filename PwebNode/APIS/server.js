const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path'); // Adicione esta linha para o módulo 'path'
const port = 3000;
 
// Use é usado para registrar middleware (funções que são executadas entre a requisição e a resposta), //no exemplo para permitir CORS. No caso vai permitir que o servidor aceite requisições de outras origens //(ex: front-end separado).
app.use(cors());
 
// Middleware para permitir JSON
app.use(express.json());
 
// Middleware para servir arquivos estáticos
// se testeapi.html estiver dentro da pasta APIS
app.use(express.static(path.join(__dirname)));
 
// Se o testeapi.html estiver na mesma pasta que o server.js,
// pode usar: app.use(express.static(__dirname));
 
// Lista de tarefas simples
let tarefas = [];
 
// Rota para obter todas as tarefas
app.get('/tarefas', (req, res) => {
   res.json(tarefas);
});
// Rota para adicionar uma nova tarefa
app.post('/tarefas', (req, res) => {
   const { tarefa } = req.body;
   tarefas.push(tarefa);
   res.status(201).json({ message: 'Tarefa adicionada com sucesso' });
});
app.listen(port, () => {
   console.log(`Servidor rodando na porta ${port}`);
});