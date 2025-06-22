  const LoginForm = document.getElementById("LoginForm");
  const NomeInput = document.getElementById("Nome");
  const SenhaInput = document.getElementById("Senha");
  const usuarios = JSON.parse(localStorage.getItem("Usuarios")) || [];


LoginForm.onsubmit = (e) => {
  e.preventDefault();

  const usuarioValido = usuarios.find(user =>
    user.Nome === NomeInput.value && user.Senha === SenhaInput.value
  );

  if (usuarioValido) {
    localStorage.setItem("UsuarioAtual", JSON.stringify(usuarioValido)); // salva o logado
    alert("Login bem-sucedido!");
    window.location.href = "../HTML/HomePage.html";
  } else {
    alert("Nome de usuário ou senha incorretos.");
  }

  NomeInput.value = "";
  SenhaInput.value = "";
};