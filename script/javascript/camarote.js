var puntuacion = 0;
var clock = 30; // Obtener la fecha y almacenar en clock
var objetos = new Array();
controlCierre = 0;

for (var i = 0; i < 4;i ++){
	objetos[i]=false;
}

$(document).ready(function() {

	mostrarHistoria();
	
	$(".cerrarHistoria").click(function () {
		if(controlCierre == 0){
			controlCierre++;
			tiempo();
		}
	});

	$(".close").click(function () {
		finalizar();
	});
	
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

function mostrarHistoria(){
	$("#historia").modal('show');
}

function tiempo() {
	var intervalo = window.setInterval(mostrar_hora, 1000); // Frecuencia de actualización
	function mostrar_hora(){
		if(clock > 0){
			$("#tiempo").text("Tiempo: "+clock--);
		}else{
			puntos();
			/* Le pongo este clearInterval porque quiero que cuando salga la ventana
			modal con la puntuación, se pare el tiempo, para que el usuario sepa en cuanto
			tiempo hizo la prueba */
			// clearInterval(intervalo);
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

	/* Estructura if para añadir más puntuación en función del tiempo
	en el que el usuario haya resuelto el juego */
	if (clock > 25) {
		puntuacion += 100;
	} else if (clock < 25 && clock > 20) {
		puntuacion += 70;
	} else if (clock < 20 && clock > 15) {
		puntuacion += 50;
	} else if (clock < 15 && clock > 10) {
		puntuacion += 30;
	} else if (clock < 10 && clock > 5) {
		puntuacion += 20;
	}

	mostrarPuntuacion();
}

function mostrarPuntuacion() {
	//jQuery.noConflict();
	$("#puntuacionFinal").text(puntuacion+" puntos.");

	$("#final").modal('show');
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
			window.location.replace("mapa.php");
	}});
}