// valor aleatorio generado
  var y = Math.floor(Math.random() * 10 + 1);
var adivinar = 1;
function submit()
{
    var x = document.getElementById("guessField").value;

    if(x == y)
        {
    alert("Felicidades"+playername+"lo adivinaste bien"+guess + "intento");
    guess = 1;
    }
    else if (x > y)
        {
    guess++;
    alert("Ooops lo siento intenta un numero mas pequeño")
        }
    else
    {
    guess++;
    alert("Ooops lo siento intenta un numero mas grande")
    }
}
  // contar el número de intentos
function playAgain()
{
    y = Math.floor(Math.random() * 10 + 1)
}
// crear para el intento correcto


  
// función para el número adivinado por el usuario     



