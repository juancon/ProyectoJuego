<?php

require_once 'ConexionBD.php';

class Usuario {

  private $nombre;
  private $nivel;
  private $puntuacion;
  
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
    $insercion = "INSERT INTO usuarios (nombre, nivel, puntuacion) VALUES (\"".$this->nombre."\", \"".$this->nivel."\", \"".$this->puntuacion."\")";
    $conexion->exec($insercion);
  }

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

  public static function buscarUsuario($nombre) {
    $conexion = ConexionDB::connectDB();
    $seleccion = "SELECT count(*) FROM usuarios WHERE nombre=\"".$nombre."\"";
    $consulta = $conexion->query($seleccion);
    $nRows = $consulta->fetchColumn();
    if($nRows > 0) {
      return true;
    }else{
      return false;
    }
  }
}