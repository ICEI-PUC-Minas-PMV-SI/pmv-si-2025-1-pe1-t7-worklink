import {User, WorkerUser} from "./models.js"

// Buscar a tabela de usuários no navegador, caso não exista, inicializar como um vetor vázio
var tblUsers = localStorage.getItem("tblUsers");
tblUsers = JSON.parse(tblUsers);
tblUsers = (tblUsers == null ? [] : tblUsers);

function login(email, password)
{

}

function register(name, email, password, confirm, doc)
{
    var user = new User(name, email, password, doc);
    tblUsers.push(JSON.stringify(user));
    
    localStorage.setItem("tblUsers", JSON.stringify(tblUsers));
    alert("Cadastro concluído.");

    user.password = "";

    localStorage.setItem("sessionUser", JSON.stringify(user));
    window.location.replace("servicos.html");
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

$(document).ready(function()
{
    // Um usuário logado não pode acessar o login ou o cadastro
    var session = localStorage.getItem("sessionUser");
    
    if(window.location.pathname.includes("login") || window.location.pathname.includes("cadastro"))
        if(session != null)
            window.location.replace("servicos.html");
});