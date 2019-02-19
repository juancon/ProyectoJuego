var reloj=240;
var contador=reloj;
var intervalo;
var puntuacion;
var comodin;

function tiempo(){
	intervalo=window.setInterval(mostrar_hora,1000);
	function mostrar_hora(){
		if (reloj > 0) {
			$("#tiempo").text("Tiempo: "+reloj-- +" segundos");
		}else if(reloj==0){
			$("#tiempo").text("Juego terminado");
		}
	}
}

$(document).ready(function(){
	/* Le he añadido esta línea para que se abra la ventana modal
	nada más que se inicia la página pero no se abre */
	$("#historia").modal('show');
	tiempo();
	$("#foto").click(function(){
		puntuacion=contador*5;
		alert("Has encontrado a wally!!"+puntuacion);
		finalizar();
		reloj=0;
	});
});

function finalizar(){
	var parametros = {
			"puntuacion" : puntuacion,
			"nivel" : "3"
	};
	$.ajax({
		data:  parametros,
		url: "../script/php/actualizarPuntuacion.php",
		method: "POST",
		success: function(data){
			alert("Tu puntuacion ha sido de "+puntuacion);
			window.location.replace("mapa.html");
	}});
}


