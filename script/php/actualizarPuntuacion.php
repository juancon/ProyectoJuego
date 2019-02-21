<?php
	header("Access-Control-Allow-Origin: *");
	session_start();
	require 'Usuario.php';
	
	$_SESSION['usuario'] = unserialize($_SESSION["usuario"]); 

	$_SESSION['usuario']->setPuntuacion($_POST['puntuacion']);
	$_SESSION['usuario']->setNivel($_POST['nivel']);

	$_SESSION['usuario']->update();

	$_SESSION['usuario'] = serialize($_SESSION['usuario']);
	


	

