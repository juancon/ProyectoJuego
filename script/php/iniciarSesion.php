<?php
	session_start();
	require_once 'Usuario.php';

	if (strlen($_POST["nombre"]) < 3) {
		if (strlen($_POST["apellido"]) < 3) {
			header("location: ../../index.php?nombre=1&apellido=1");
			exit();
		}
		header("location: ../../index.php?nombre=20");
		exit();
	}

	if (strlen($_POST["apellido"]) < 3) {
		header("location: ../../index.php?apellido=1");
		exit();
	}

	if (strlen($_POST["apellido"]) > 20) {
		if (strlen($_POST["nombre"]) > 20) {
			header("location: ../../index.php?nombre=2&apellido=2");
			exit();
		}
		header("location: ../../index.php?apellido=2");
		exit();
	}

	if (strlen($_POST["nombre"]) > 20) {
		header("location: ../../index.php?nombre=2");
		exit();
	}

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