$(document).ready(function () {
	$.ajax({url: "../script/php/ranking.php", success: function(data){
		var usuarios = JSON.parse(data);
		usuarios.sort(function(a,b) {
			if (parseInt(a.puntuacion) < parseInt(b.puntuacion)) {
				return 1;
			} else if (parseInt(a.puntuacion) > parseInt(b.puntuacion)) {
				return -1;
			} else {
				return 0;
			}
		});
		var tablaRanking = $("#mostrarRanking");
		for (var i = 0; i < usuarios.length ; i++){

			if(usuarios[i].nivel == 3){
				var trPadre = $("<tr>");

                var posicion = $("<td>");
                posicion.text(i+1);

				var tdNombre = $("<td>");
				tdNombre.text(usuarios[i].nombre);

				var tdCurso = $("<td>");
				tdCurso.text(usuarios[i].curso);

				var tdPuntuacion = $("<td>");
				tdPuntuacion.text(usuarios[i].puntuacion);

                trPadre.append(posicion);
				trPadre.append(tdNombre);
				trPadre.append(tdCurso);
				trPadre.append(tdPuntuacion);
				
				tablaRanking.append(trPadre);
			}
		}
	}});
})