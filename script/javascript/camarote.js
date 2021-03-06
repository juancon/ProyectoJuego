var puntuacion = 0;
var clock = 45; // Obtener la fecha y almacenar en clock
var objetos = new Array();
controlCierre = 0;
var intervalo = "";

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

	$(".acabar").click(function () {
		finalizar();
	});
	
	$("div.col-md-9 div").click(function(e) {

		$(this).css("opacity", "0.5");

		switch(e.target.id) {
			case "estrella":
			    if(!objetos[0]){
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
		        }
			break;

			case "botella":
			    if(!objetos[1]){
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
			    }
			break;

			case "seta":
			    if(!objetos[2]){
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
			    }
			break;

			case "bolsa":
			    if(!objetos[3]){
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
			    }
			break;
		}

	});

});

function mostrarHistoria(){
	$("#historia").modal('show');
}

function tiempo() {
	
	intervalo = window.setInterval(mostrar_hora, 1000); // Frecuencia de actualización

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
			control += 500;
		}
	}

	if(control == 2000){
		puntos();
		var parar = window.clearInterval(intervalo);
	}
}

function puntos(){
	for (var i = 0; i < objetos.length ; i++){
		if(objetos[i] == true){
			puntuacion += 500;
		}
	}

	/* Estructura if para añadir más puntuación en función del tiempo
	en el que el usuario haya resuelto el juego */
	if (clock >= 38) {
		puntuacion += 1000;
	} else if (clock < 38 && clock >= 30) {
		puntuacion += 700;
	} else if (clock < 30 && clock >= 20) {
		puntuacion += 500;
	} else if (clock < 20 && clock >= 10) {
		puntuacion += 300;
	} else if (clock < 10 && clock >= 5) {
		puntuacion += 200;
	}

	mostrarPuntuacion();
}

function mostrarPuntuacion() {
	//jQuery.noConflict();
	$("#puntuacionFinal").text(puntuacion+" puntos.");

	$("#final").modal('show');
	setTimeout(function(){ finalizar(); }, 10000);
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
			window.location.replace("mapa.html");
	}});
}