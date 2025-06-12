// rotas que requerem autenticação
var requireAuth = [
    "servicos",
    "painel"
];

$(document).ready(function()
{
    var route = window.location.pathname;
    var session = localStorage.getItem("sessionUser");

    const matches = requireAuth.filter(match => route.toLowerCase().includes(match.toLowerCase()));

    if(matches.length != 0)
    {
        if(session === null)
        {
            window.location.replace("login.html")
        }
    }
});