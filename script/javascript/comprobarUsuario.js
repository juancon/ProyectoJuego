$(document).ready(function() {
    
    $("input[type='text']").blur(validar);

    function validar() {

        var atributoNombre = $(this).attr("name");
		var valor = $(this).val();
		var longitud = $(this).val().length;

		switch (atributoNombre) {

			case "nombre":
				if (longitud < 3) {
					$("div.nombre").html("<p>La longitud del nombre debe ser mayor o igual a 3</p>");
				} else if (longitud > 20) {
					$("div.nombre").html("<p>La longitud del nombre debe ser menor o igual a 20</p>");
				} else {
					$("div.nombre").empty();
				}
			break;

			case "apellido":
				if (longitud < 3) {
					$("div.apellido").html("<p>La longitud del apellido debe ser mayor o igual a 3</p>");
				} else if (longitud > 20) {
					$("div.apellido").html("<p>La longitud del apellido debe ser menor o igual a 20</p>");
				} else {
					$("div.apellido").empty();
				}
			break;

		}

    }

});