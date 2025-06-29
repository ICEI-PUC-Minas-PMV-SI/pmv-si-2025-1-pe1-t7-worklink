var loggedIn = localStorage.getItem("sessionUser") !== null;

const navbar = document.getElementById("navbar"); 
const info = document.querySelector('#navbar #info');   

if(loggedIn) {
    var user = JSON.parse(localStorage.getItem("sessionUser"));
    var name = `${user.name.split(" ")[0]} ${user.name.split(" ")[1] ? user.name.split(" ")[1] : ''}`;

    info.innerHTML = `
        <div class="navbar-text label-navbar ms-auto d-flex align-items-center">
            Bem-vindo, ${name}
            <div class="user-profile-and-notifications">
                <img src="../assets/perfil.png" alt="Perfil" class="rounded-circle border border-3 border-warning ms-2" style="width: 48px; height: 48px;">
                <div class="notification-icon-navbar">
                    <span class="notification-badge-navbar" id="notificationCountNavbar">0</span>
                </div>
            </div>
            <div class="px-3"><a id="logout" href="#">Sair</a></div>
        </div>`;

} else {
    info.innerHTML = `<div class="buttons-container"><a href="login.html" class="entrar-btn">Entrar</a><a href="cadastro.html" class="cadastrar-btn">Cadastrar</a></div>`;
}

document.addEventListener("click", function(event) {
    if(event.target.id == "logout") {
        event.preventDefault();
        localStorage.removeItem("sessionUser");
        window.location.replace("index.html");
    }
});