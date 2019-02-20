<?php
	include_once 'ConexionBD.php';
	$conexion = ConexionDB::connectDB();
	$insertarConsulta = "DELETE FROM usuarios where puntuacion < 8500";
	$insertar = $conexion->exec($insertarConsulta);
 ?>