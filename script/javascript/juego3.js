var tiempoMaximo = 240
var reloj=tiempoMaximo;
var intervalo;
var puntuacion = 0;
var comodin1=false;
var comodin2=false;
controlCierre = 0;

function tiempo(){
	intervalo=window.setInterval(mostrar_hora,1000);
	function mostrar_hora(){
		if (reloj > 0) {
			$("#tiempo").text("Tiempo: "+reloj-- +" segundos");
		}else if(reloj==0){
			$("#tiempo").text("Juego terminado");
			mostrarPuntuacion();
		}
	}
}

$(document).ready(function(){
	$("#historia").modal('show');
	$(".cerrarHistoria").click(function() {
		if(controlCierre == 0){
			controlCierre++;
			inicio();
		}
	});
	$("#foto").click(function(){
		if(reloj>0){
			puntuacion = reloj*15;
			$("#puntuacionFinal").text(puntuacion+" puntos.");
			reloj=0;
		}
	});

	$(".acabar").click(function () {
		finalizar();
	});
	
	$("#comodin1").click(function(){
		if(!comodin1){
			$("#ocultar").css("background-color","#363434");
			$("#imgComodin1").attr("src","../img/up2.webp");
			restaPuntos(1);
			comodin1 = true;
		}
	});
	$("#comodin2").click(function(){
		if(!comodin2 && comodin1){
			$("#ocultar2").css("background-color","#363434");
			$("#imgComodin2").attr("src","../img/up2.webp");
			restaPuntos(2);
			comodin2 = true;
		}
	});
});

function restaPuntos(num){
	if(num == 1){
		reloj = reloj - 50;
	}else if(num == 2){
		reloj = reloj - 70;
	}
}

function inicio() {
	tiempo();
	
}

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
			window.location.replace("mapa.html");
	}});
}


function mostrarPuntuacion() {
	//jQuery.noConflict();
	$("#final").modal('show');
	setTimeout(function(){finalizar()},10000);
}

