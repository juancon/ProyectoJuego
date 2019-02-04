<?php
	require_once 'Usuario.php';

	$busqueda = Usuario::buscarUsuario("salati");
	if($busqueda == false){
		$usuario = new Usuario("salati",0,0);
		$usuario->insert();
	}else{
		$usuario = $busqueda;
	}