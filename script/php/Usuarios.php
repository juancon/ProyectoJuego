<?php

require_once 'ConexionBD.php';

class Usuario {

  public $nombre;
  public $nivel;
  public $puntuacion;
  
  function __construct($nombre, $nivel, $puntuacion) {
    $this->nombre = $nombre;
    $this->nivel = $nivel;
    $this->puntuacion = $puntuacion;
  }

  public function getNombre() {
    return $this->$nombre;
  }

  public function getNivel() {
    return $this->nivel;
  }

  public function getPuntuacion() {
    return $this->puntuacion;
  }

  public function insert() {
    $conexion = ConexionDB::connectDB();
    $insercion = "INSERT INTO usuario (nombre, nivel, puntuacion) VALUES (0,\"".$this->nivel."\", \"".$this->puntuacion."\")";
    $conexion->exec($insercion);
  }

  /*public function delete() {
    $conexion = ConexionDB::connectDB();
    $borrado = "DELETE FROM nivels WHERE nombre=\"".$this->nombre."\"";
    $conexion->exec($borrado);
  }*/

  public static function getUsuarios() {
    $conexion = ConexionDB::connectDB();
    $seleccion = "SELECT nombre, nivel, puntuacion FROM usuarios";
    $consulta = $conexion->query($seleccion);
    $usuarios = [];
    while ($registro = $consulta->fetchObject()) {
      $usuarios[] = new Usuario($registro->nombre, $registro->nivel, $registro->puntuacion);

    }
    return $usuarios;    
  }

  public static function getnivelBynombre($nombre) {
    $conexion = ConexionDB::connectDB();
    $seleccion = "SELECT nombre, nivel, puntuacion FROM usuarios WHERE nombre=\"".$nombre."\"";
    $consulta = $conexion->query($seleccion);
    $registro = $consulta->fetch(PDO::FETCH_BOUND);
    $usuario = new nivel($registro[0], $registro[1], $registro[2]);
    return $usuario;    
  }
}