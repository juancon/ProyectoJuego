var index = 0;
var puntuacion = 0;
controlCierre = 0;
var clock = 40; // Obtener la fecha y almacenar en clock
$(document).ready(function () {
	mostrarHistoria();
	pintar();
	$(".info").hide();
	$(".cerrarHistoria").click(function () {
		if(controlCierre == 0){
			controlCierre++;
			inicio();
		}
	});
	$(".acabar").click(function () {
		finalizar();
	});
	$("#respuestas div").click(function () {
			var respuesta = $(this).text();
			comprobar(respuesta);
	})

})
function mostrarHistoria(){
	//jQuery.noConflict();
	$("#historia").modal('show');
	
}
function inicio() {
	tiempo();
}

function tiempo() {
	var intervalo = window.setInterval(mostrar_hora, 1000); // Frecuencia de actualización
	function mostrar_hora(){
		if(clock > 0){
			$("#tiempo").text("Tiempo: "+clock--);
		}else{
			comprobar("mal");
		}
	}
}

function numeroAleatorio(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function pintar(){
	$("#bien").fadeOut(1000);
	$("#mal").fadeOut(1000);
	$.ajax({url: "../script/php/obtenerPreguntas.php", success: function(data){
		var preguntas = JSON.parse(data);
		
		$("#pregunta").text(preguntas[index].pregunta);
		var n1 = numeroAleatorio(0,2);
		
		pintarRespuestas(n1,preguntas);

	}});
}

function pintarRespuestas(numero,preguntas){
	switch (numero){
		case 0:
			$("#respuestas div:eq(0)").text(preguntas[index].correcta);
			$("#respuestas div:eq(1)").text(preguntas[index].falsa2);
			$("#respuestas div:eq(2)").text(preguntas[index].falsa1);
			break;
		case 1:
			$("#respuestas div:eq(0)").text(preguntas[index].falsa3);
			$("#respuestas div:eq(1)").text(preguntas[index].correcta);
			$("#respuestas div:eq(2)").text(preguntas[index].falsa2);
			break;
		case 2:
			$("#respuestas div:eq(0)").text(preguntas[index].falsa1);
			$("#respuestas div:eq(1)").text(preguntas[index].falsa3);
			$("#respuestas div:eq(2)").text(preguntas[index].correcta);
			break;	
	}
}

function comprobar(respuesta,div) {
	if(respuesta != "mal"){
		$.ajax({url: "../script/php/obtenerPreguntas.php", success: function(data){
			var preguntas = JSON.parse(data);
			if(respuesta == preguntas[index].correcta){
				puntuacion = puntuacion+(clock*5);
				if(index < 2){
					index++;
					$("#bien").show();
					$("#puntuacion").text("Puntuacion: "+puntuacion)
					clock = 40;
					pintar();
				}else{
					$("#mal").hide();
					$("#bien").show();
					clock = 0;
					$("#puntuacion").text("Puntuacion: "+puntuacion);
					$("#puntuacionFinal").text(puntuacion+" puntos.");
				}
			}else{
				if(index < 2){
					index++;
					$("#mal").show();
					clock = 40;
					pintar();
				}else{
					$("#bien").hide();
					$("#mal").show();
					$("#tiempo").text("Tiempo: 0");
					clock = 0;
					$("#puntuacionFinal").text(puntuacion+" puntos.");
				}
			}
		}});

		if(index > 1 && respuesta != "mal"){
			mostrarPuntuacion();
		}
		
	}
}

function mostrarPuntuacion() {
	//jQuery.noConflict();
	$("#final").modal('show');
}

function finalizar(){
	var parametros = {
			"puntuacion" : $("#puntuacion").text().substring(12),
			"nivel" : "1"
		};
	$.ajax({
		data:  parametros,
		url: "../script/php/actualizarPuntuacion.php",
		method: "POST",
		success: function(data){
			window.location.replace("mapa.html");
	}});
}