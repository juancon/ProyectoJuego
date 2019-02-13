var puntuacion = 0;
var clock = 30; // Obtener la fecha y almacenar en clock
var objetos = new Array();
for (var i = 0; i < 4;i ++){
	objetos[i]=false;
}
$(document).ready(function() {
	tiempo();
	$("div.col-md-9 div").click(function(e) {

		$(this).css("opacity", "0.5");

		switch(e.target.id) {
			case "estrella":
				objetos[0] = true;
				$("#itemEstrella").animate({
					bottom: "15px",
				}, function() {
					$(this).animate({
						top: "0px"
					}).css({
						"color": "green",
						"font-size": "20px"
					});
				});
				comprobar();
			break;

			case "botella":
				objetos[1] = true;
				$("#itemBotella").animate({
					bottom: "15px",
				}, function() {
					$(this).animate({
						top: "0px"
					}).css({
						"color": "green",
						"font-size": "20px"
					});
				});
				comprobar();
			break;

			case "seta":
				objetos[2] = true;
				$("#itemSeta").animate({
					bottom: "15px",
				}, function() {
					$(this).animate({
						top: "0px"
					}).css({
						"color": "green",
						"font-size": "20px"
					});
				});
				comprobar();
			break;

			case "bolsa":
				objetos[3] = true;
				$("#itemBolsa").animate({
					bottom: "15px",
				}, function() {
					$(this).animate({
						top: "0px"
					}).css({
						"color": "green",
						"font-size": "20px"
					});
				});
				comprobar();
			break;
		}

	});

});

function tiempo() {
	var intervalo = window.setInterval(mostrar_hora, 1000); // Frecuencia de actualización
	function mostrar_hora(){
		if(clock > 0){
			$("#tiempo").text("Tiempo: "+clock--);
		}else{
			puntos();
		}
	}
}

function comprobar() {
	var control = 0;
	for (var i = 0; i < objetos.length ; i++){
		if(objetos[i] == true){
			control += 50;
		}
	}

	if(control == 200){
		puntos();
	}
}

function puntos(){
	for (var i = 0; i < objetos.length ; i++){
		if(objetos[i] == true){
			puntuacion += 50;
		}
	}

	finalizar();
}

function finalizar(){
	var parametros = {
			"puntuacion" : puntuacion,
			"nivel" : "2"
		};
	$.ajax({
		data:  parametros,
		url: "../script/php/actualizarPuntuacion.php",
		method: "POST",
		success: function(data){
			alert("Tu puntuacion ha sido de "+puntuacion);
			window.location.replace("mapa.php");
	}});
}