$(document).ready(function(){
  $("#minijuego1").hide();
  $("#minijuego2").hide();
  $("#minijuego3").hide();
  $.ajax({url: "../script/php/obtenerPuntuacionNivel.php", success: function(data){
    var datos = JSON.parse(data);
    $("#puntuacion").text("Puntuación: "+datos.puntuacion);
    $("#nivel").text("Nivel: "+datos.nivel);

    switch (datos.nivel){
      case 0:
        $("p#texto").html("Bienvenido/a al juego del viaje de Magallanes. Este juego consistirá en ir navegando sobre el mapa que puedes apreciar en la parte de atrás. El mapa consistirá en 3 zonas: Sevilla (España), Río de la Plata (Argentina) y Palawan (Filipinas).<br/> La primera zona desbloqueada será Sevilla, donde deberás jugar un divertido minijuego de preguntas. Después de ese primer minijuego se desbloqueará la siguiente zona (Río de la Plata) y cuando completes esa zona llegarás a la última (Palawan). ¡Ánimo y disfruta!");
        mostrarInformacion();
        $("#imgFondo").attr("src","../img/mapa11.png");
        $("#minijuego1").show();
        $("#minijuego1").click(function () {
          window.location.replace("riodelamuerte.html");
        });
        break;
      case "1":
        $("#imgFondo").attr("src","../img/mapa2.png");
        $("#minijuego2").show();
        $("#minijuego2").click(function () {
          window.location.replace("camarote.html");
        });
        break;
      case "2":
        $("#imgFondo").attr("src","../img/mapa3.png");
        $("#minijuego3").show();
        $("#minijuego3").click(function () {
          window.location.replace("juego3.html");
        });
        break;
      case "3":
        $("p#texto").text("¡Enhorabuena! Has completado todas las zonas del juego. Ahora, puedes mirar tu puntuación justo arriba y también puedes comprobar en que lugar del ranking estás haciendo click en el trofeo situado en la esquina superior izquierda.");
        mostrarInformacion();
        $("#imgFondo").attr("src","../img/mapa4.png");
        break;
    }
  }});
})

function mostrarInformacion() {
    $("#info").modal('show');
}