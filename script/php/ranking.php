<?php
	require_once("Usuario.php");
	$usuarios = [];

	$usuarios = Usuario::getUsuarios();

	$return = [];
	foreach ($usuarios as $key => $value) {
		$return[] = array(
			'nombre' => $value->getNombre(),
			'curso' => $value->getCurso(),
			'puntuacion' => $value->getPuntuacion(),
			'nivel' => $value->getNivel()
		);
	}

	echo json_encode($return);
?>