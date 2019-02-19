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
        $("#imgFondo").attr("src","../img/mapa4.png");
        break;
    }
  }});
})