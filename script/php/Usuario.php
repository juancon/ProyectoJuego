<?php

require_once 'ConexionBD.php';

class Usuario {

  private $nombre;
  private $curso;
  private $nivel;
  private $puntuacion;
  
  function __construct($nombre, $curso, $nivel, $puntuacion) {
    $this->nombre = $nombre;
    $this->curso = $curso;
    $this->nivel = $nivel;
    $this->puntuacion = $puntuacion;
  }

  public function getNombre() {
    return $this->nombre;
  }

  public function getCurso() {
    return $this->curso;
  }

  public function getNivel() {
    return $this->nivel;
  }

  public function getPuntuacion() {
    return $this->puntuacion;
  }

  public function setNivel($nivel) {
    $this->nivel = $nivel;
  }

  public function setPuntuacion($puntuacion) {
    $this->puntuacion += $puntuacion;
  }

  public function insert() {
    $conexion = ConexionDB::connectDB();
    $insercion = "INSERT INTO usuarios (nombre, curso, nivel, puntuacion) VALUES ('".$this->nombre."', '".$this->curso."', ".$this->nivel.", ".$this->puntuacion.")";
    $conexion->exec($insercion);
  }

  public function update() {
    $conexion = ConexionDB::connectDB();
    $insercion = "UPDATE usuarios SET nivel = ".$this->nivel.", puntuacion = ".$this->puntuacion." WHERE nombre = '".$this->nombre."' AND curso='".$this->curso."'";
    $conexion->exec($insercion);
  }

  public static function getUsuarios() {
    $conexion = ConexionDB::connectDB();
    $seleccion = "SELECT nombre, curso, nivel, puntuacion FROM usuarios";
    $consulta = $conexion->query($seleccion);
    $consulta->bindColumn(1,$name);
    $consulta->bindColumn(2,$grade);
    $consulta->bindColumn(3,$level);
    $consulta->bindColumn(4,$score);
    $usuarios = [];
    while ($registro = $consulta->fetch(PDO::FETCH_BOUND)) {
      $usuarios[] = new Usuario($name, $grade, $level, $score);
    }
    return $usuarios;
  }

   public static function buscarUsuario($nombre, $curso) {
    $conexion = ConexionDB::connectDB();
    $seleccion = "SELECT nombre, curso, nivel, puntuacion FROM usuarios WHERE nombre='".$nombre."' AND curso='".$curso."'";
    $consulta = $conexion->query($seleccion);
    $consulta->bindColumn(1,$name);
    $consulta->bindColumn(2,$grade);
    $consulta->bindColumn(3,$level);
    $consulta->bindColumn(4,$score);
    //$nRows = $consulta->fetchColumn();
    $registro = $consulta->fetch(PDO::FETCH_BOUND);
    if($name == $nombre) {
      $usuario = new Usuario($name, $grade, $level, $score);
      return $usuario;
    }else{
      return false;
    }
  }

  /*public static function buscarUsuario($nombre) {
    $conexion = ConexionDB::connectDB();
    $seleccion = "SELECT count(*) FROM usuarios WHERE nombre=\"".$nombre."\"";
    $consulta = $conexion->query($seleccion);
    $nRows = $consulta->fetchColumn();
    if($nRows > 0) {
      return true;
    }else{
      return false;
    }
  }*/
}