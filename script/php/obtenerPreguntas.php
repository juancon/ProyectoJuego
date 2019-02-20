<?php
	header("Access-Control-Allow-Origin: *");   
	require_once 'ConexionBD.php';

    $conexion = ConexionDB::connectDB();
	$seleccion = "SELECT id,pregunta,correcta,falsa1,falsa2,falsa3 FROM preguntas";
	$consulta = $conexion->query($seleccion);
    $consulta->bindColumn(1,$id);
    $consulta->bindColumn(2,$pregunta);
    $consulta->bindColumn(3,$correcta);
    $consulta->bindColumn(4,$falsa1);
    $consulta->bindColumn(5,$falsa2);
    $consulta->bindColumn(6,$falsa3);
    $preguntas = [];
    while ($registro = $consulta->fetch(PDO::FETCH_BOUND)) {
      $preguntas[] = array(
      		'id' => $id,
      		'pregunta' => $pregunta,
      		'correcta' => $correcta,
      		'falsa1' => $falsa1,
      		'falsa2' => $falsa2,
      		'falsa3' => $falsa3
      	);
    }
    echo json_encode($preguntas);
