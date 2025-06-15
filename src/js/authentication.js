import {User, WorkerUser} from "./models.js"

// Buscar a tabela de usuários no navegador, caso não exista, inicializar como um vetor vázio
var tblUsers = localStorage.getItem("tblUsers");
tblUsers = JSON.parse(tblUsers);
tblUsers = (tblUsers == null ? [] : tblUsers);

function login(email, password)
{
    // Buscar o usuário no banco tendo o e-mail
    var findUser = tblUsers.filter(item => (JSON.parse(item).email === email));
    
    // Não encontramos nenhum usuário com este e-mail
    if(findUser.length === 0)
    {
        alert("Usuário não encontrado. Verifique os campos e tente novamente.");
        return;
    }

    // Pegar o usuário que encontramos
    var user = JSON.parse(findUser[0]);
    
    // Senhas não batem
    if(password !== user.password)
    {
        alert("Senha inválida. Tente novamente.");
        return;
    }

    // Salvar a sessão e redirecionar
    saveSession(JSON.stringify(user));
    window.location.replace("servicos.html");
}

function register(name, email, password, confirm, doc)
{
    // Verificar por contas já cadastradas com o mesmo e-mail
    var sameEmail = tblUsers.filter(item => (JSON.parse(item).email === email));

    // Já temos alguma conta com este e-mail
    if(sameEmail.length !== 0)
    {
        alert("E-mail já cadastrado.");
        return;
    }

    // Criar o usuário e inserir na tabela
    var user = new User(name, email, password, doc);
    tblUsers.push(JSON.stringify(user));
    
    localStorage.setItem("tblUsers", JSON.stringify(tblUsers));
    alert("Cadastro concluído.");

    saveSession(JSON.stringify(user));
    window.location.replace("servicos.html");
}

function saveSession(user)
{
    localStorage.setItem("sessionUser", user);
}

$("#formRegister").on("submit", function(event)
{
    event.preventDefault();

    var nome = $("#nome").val();
    var email = $("#email").val();
    var senha = $("#senha").val();
    var confirmar = $("#confirmar-senha").val();
    var doc = $("#cpf").val();

    if(nome === "" || email === "" || senha === "" || confirmar === "" || doc === "")
    {
        alert("Preencha todos os campos e tente novamente.");
        return;
    }

    if(senha != confirmar)
    {
        alert("Verifique a senha e tente novamente.");
        return;
    }

    register(nome, email, senha, confirmar, doc);
});

$("#formLogin").on("submit", function(event)
{
    event.preventDefault();

    var email = $("#email").val();
    var senha = $("#senha").val();

    if(email === "" || senha === "")
    {
        alert("Preencha todos os campos e tente novamente.");
        return;
    }

    login(email, senha);
});

$(document).ready(function()
{
    // Um usuário logado não pode acessar o login ou o cadastro
    var session = localStorage.getItem("sessionUser");
    
    if(window.location.pathname.includes("login") || window.location.pathname.includes("cadastro"))
        if(session != null)
            window.location.replace("servicos.html");
});