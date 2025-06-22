let FilmeForm = document.getElementById("FilmeForms");
let TituloInput = FilmeForm['titulo'];
let DiretorInput = FilmeForm['diretor'];
let ClassifiInput = FilmeForm['classificacao'];
let LancaInput = FilmeForm['lancamento'];
let DuracaoInput = FilmeForm['duracao'];
let ElencoInput = FilmeForm['elenco'];
let SinopseInput = FilmeForm['sinopse'];
let OpiniaoInput = FilmeForm['opiniao'];

// Quando o DOM estiver completamente carregado
document.addEventListener("DOMContentLoaded", () => {
    const ImagemDataUrlRecente = localStorage.getItem("recent-image");
    if (ImagemDataUrlRecente) {
        document.querySelector("#imgPreview").setAttribute("src", ImagemDataUrlRecente);
    }
});

// Obtém a lista de filmes do localStorage ou inicializa como um array vazio
const Filmes = JSON.parse(localStorage.getItem("Filmes")) || [];

// Função para gerar um novo ID para o filme
const generateFilmeId = () => {              
    const lastId = Filmes.length > 0 ? Math.max(...Filmes.map(f => f.id || 0)) : 0; // procura maior ID utilizando uma lista dos filmes ou retorna zero
    return lastId + 1; // adiciona mais um na última id virando uma nova id máxima
};

// Função para adicionar um filme
const addFilme = (idUser , titulo, diretor, classificacao, lancamento, duracao, img, elenco, sinopse, opiniao) => {
    const idFilme = generateFilmeId();
    const novoFilme = {
        id: idFilme,
        idUsuario: idUser ,
        titulo,
        diretor,
        classificacao,
        lancamento,
        duracao,
        imagem: img,
        elenco,
        sinopse,
        opiniao
    };

    Filmes.push(novoFilme);
    localStorage.setItem("Filmes", JSON.stringify(Filmes));
};

// Evento para carregar a imagem
const imgInput = document.querySelector("#imagemFile");
imgInput.addEventListener("change", (event) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem("recent-image", reader.result);
        document.querySelector("#imgPreview").setAttribute("src", reader.result);
    });

    if (event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
    }
});

// Evento para o botão cancelar
document.getElementById("cancelar").addEventListener("click", (e) => {
    e.preventDefault(); // ter controle total da função. Impedir imprevisto do tipo de navegador mozilla, edge ou chrome
    console.log("Botão cancelar clicado."); // Mensagem de depuração
    if (confirm("Tem certeza que deseja cancelar? Os dados inseridos serão perdidos.")) { // botão de confirmação
        FilmeForm.reset(); // resetar
        document.querySelector("#imgPreview").setAttribute("src", ""); // remover a imagem da tela
        localStorage.removeItem("recent-image"); // remover do banco de dados a img
        console.log("Dados limpos."); // Mensagem de depuração
    }
});

// Evento para o envio do formulário
FilmeForm.onsubmit = (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário
    const usuarioAtual = JSON.parse(localStorage.getItem("usuarioAtual")); // Certifique-se de que está obtendo o objeto corretamente
    addFilme(usuarioAtual.userId, TituloInput.value, DiretorInput.value, ClassifiInput.value, LancaInput.value, DuracaoInput.value, localStorage.getItem("recent-image"), ElencoInput.value, SinopseInput.value, OpiniaoInput.value);
};
