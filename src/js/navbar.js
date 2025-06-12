var loggedIn = localStorage.getItem("sessionUser") !== null;

const navbar = document.getElementById("navbar");
const info = document.querySelector('#navbar #info');

if(loggedIn)
{
    var user = JSON.parse(localStorage.getItem("sessionUser"));
    info.innerHTML = `<div class="navbar-text label-navbar ms-auto d-flex align-items-center">
        Bem-vindo, ${user["name"]}
        <img src="../assets/perfil.png" alt="Perfil" class="rounded-circle border border-3 border-warning ms-2" style="width: 48px; height: 48px;">
        <div class="px-3"><a id="logout" href="#">Sair</a></div>
    </div>`;
} 
else
{
    info.innerHTML = `<div class="buttons-container"><a href="login.html" class="entrar-btn">Entrar</a><a href="cadastro.html" class="cadastrar-btn">Cadastrar</a></div>`;
}

document.addEventListener("click", function(event)
{
    if(event.target.id == "logout")
    {
        event.preventDefault();
        localStorage.removeItem("sessionUser");
        window.location.replace("landing.html");
    }
});