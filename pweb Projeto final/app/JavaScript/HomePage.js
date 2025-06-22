  document.addEventListener("DOMContentLoaded", () => {
    const usuarioAtual = JSON.parse(localStorage.getItem("UsuarioAtual"));

    if (usuarioAtual) {
      const nomeUsuario = document.getElementById("nomeUsuario");
      nomeUsuario.textContent = usuarioAtual.Nome;
    
      const ImagemDataUrlRecente = localStorage.getItem("recent-image");
    if(ImagemDataUrlRecente){
        document.querySelector("#imgPreview").setAttribute("src", ImagemDataUrlRecente)
    }
    } 
  });
  
  //carregar a secao filmes na páginas
    if (secaoFilmes) {
  secaoFilmes.innerHTML = ""; // <-- impede duplicação

  const Filmes = JSON.parse(localStorage.getItem("Filmes")) || [];
  const filmesDoUsuario = Filmes.filter(filme => filme.idUsuario === usuarioAtual.id); // filtra as adições por id

  //para cada filme adicionar nos elementos
  filmesDoUsuario.forEach(filme => {
    const novoFilme = document.createElement("article");
    novoFilme.classList.add("filme");
    novoFilme.innerHTML = `
      <img src="${filme.imagem}" alt="Capa de ${filme.titulo}">
      <h2><a href="VizualizarFilmes.html?id=${filme.id}">${filme.titulo}</a></h2>
      <p>${filme.diretor} • ${filme.lancamento}</p>
    `;
    secaoFilmes.appendChild(novoFilme);
  });
}

document.querySelector("#imagemFile").addEventListener("change", (event) => {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    localStorage.setItem("recent-image", reader.result);
    document.querySelector("#imgPreview").setAttribute("src", reader.result);
  });

  reader.readAsDataURL(event.target.files[0]);
});

