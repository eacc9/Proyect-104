// crea la función de inicio de sesión.
function login() 
{
platey_name = document.getElementById("player_name").value;
localStorage.setItem("player_name", player_name);

window.location = "gamepage.html";

}