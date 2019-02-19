<?php
	session_start();
	require_once 'Usuario.php';

	$nombre = strtoupper($_POST['nombre']." ".$_POST['apellido']);
	$curso = strtoupper($_POST['curso']);

	$busqueda = Usuario::buscarUsuario($nombre,$curso);
	if($busqueda == false){
		$usuario = new Usuario($nombre,$curso,0,0);
		$usuario->insert();
		$_SESSION['usuario'] = serialize($usuario);
		header("location: ../../content/mapa.html");
	}else{
		header("location: ../../index.php?usuario=1");
	}