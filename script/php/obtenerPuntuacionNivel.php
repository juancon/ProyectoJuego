<?php
	header("Access-Control-Allow-Origin: *");  
	session_start();
	require_once 'Usuario.php';

	$_SESSION['usuario'] = unserialize($_SESSION["usuario"]);

	$puntuacionNivel =  array(
		'puntuacion' => $_SESSION['usuario']->getPuntuacion(),
		'nivel' => $_SESSION['usuario']->getNivel()	
	);

	$_SESSION['usuario'] = serialize($_SESSION['usuario']);

	echo json_encode($puntuacionNivel);
?>