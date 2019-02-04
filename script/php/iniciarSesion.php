<?php
	require_once 'Usuario.php';

	$nombre = $_POST['nombre'];

	$busqueda = Usuario::buscarUsuario($nombre);
	if($busqueda == false){
		$usuario = new Usuario($nombre,0,0);
		$usuario->insert();
	}else{
		$usuario = $busqueda;
	}