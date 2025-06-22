const UserForm = document.getElementById("UserForm");
const NomeInput = UserForm['Nome'];
const SenhaInput = UserForm['Senha'];
const EmailInput = UserForm['Email'];
const Confirm = UserForm['Confirm'];

const Users = JSON.parse(localStorage.getItem("Usuarios")) || [];


const generateUserId = () => {
  const lastId = Users.length > 0 ? Math.max(...Users.map(u => u.id || 0)) : 0; // procurar maior ID utilizando uma lista dos usuarios  ou retorna zero
  return lastId + 1; // adiciona mais um na última id virando uma nova id máxima
};

const addUser = (Nome, Senha, Email) => {
const userId = generateUserId();
const novoUsuario = { id: userId, Nome, Senha, Email};
Users.push(novoUsuario);
localStorage.setItem("Usuarios", JSON.stringify(Users));
return novoUsuario;
};

UserForm.onsubmit = (e) => {
    e.preventDefault();

    // Verifica se a senha e a confirmação coincidem
    if (Confirm.value !== SenhaInput.value) {
        alert("A senha e a confirmação não coincidem.");
        return;
    }

    // Verifica se o e-mail já está cadastrado
    const emailExistente = Users.find(user => user.Email.toLowerCase() === EmailInput.value.toLowerCase());
    const NomeExiste = Users.find(user => user.Nome.toLowerCase() === NomeInput.value.toLowerCase())
    if (emailExistente) {
        alert("Já existe uma conta com esse e-mail");
        return;
    }else if(NomeExiste){
        alert("já existe uma conta com esse nome");
        return;
    }

    // Adiciona novo usuário
    const novoUser = addUser(NomeInput.value, SenhaInput.value, EmailInput.value);

    // Limpa os campos
    NomeInput.value = "";
    SenhaInput.value = "";
    EmailInput.value = "";
    Confirm.value = "";

    alert("Usuário criado com sucesso!");
    window.location.href = "../HTML/Login.html"; 
};