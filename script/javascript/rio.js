var index = 0;
var puntuacion = 0;
var clock = 40; // Obtener la fecha y almacenar en clock
$(document).ready(function (argument) {
	start();
	pintar();
	tiempo();
	$("#respuestas div").click(function () {
			var respuesta = $(this).text();
			comprobar(respuesta);
	})
})

function start() {
	$("#pregunta").text("Pulsa START para empezar")
}

function tiempo() {
	var intervalo = window.setInterval(mostrar_hora, 1000); // Frecuencia de actualización
	function mostrar_hora(){
		if(clock >= 0){
			$("#tiempo").text("Tiempo: "+clock--);
		}
	}
}

function numeroAleatorio(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function pintar(){
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

function comprobar(respuesta) {
	$.ajax({url: "../script/php/obtenerPreguntas.php", success: function(data){
		var preguntas = JSON.parse(data);
		// alert(event.text);
		/*alert(respuesta);
		alert(preguntas[index-1].correcta)*/
		if(respuesta == preguntas[index].correcta){
			console.log("bien");
			puntuacion = puntuacion+(clock*5);
			if(index < 2){
				index++;
				pintar();
				clock = 40;
				$("#puntuacion").text("Puntuacion: "+puntuacion)
			}else{
				alert("Tu puntuacion ha sido de "+puntuacion);
				$("#puntuacion").text("Puntuacion: "+puntuacion)
				clock = 0;
			}
		}else{
			console.log("mal")
			if(index < 2){
				index++;
				pintar();
				clock = 40;
			}else{
				$("#tiempo").text("Tiempo: 0");
				alert("Tu puntuacion ha sido de "+puntuacion);
				clock = 0;
			}
		}

	}});
}