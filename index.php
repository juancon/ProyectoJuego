<?php
  session_start();
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
    <title>El viaje de magallanes</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="./script/javascript/comprobarUsuario.js"></script>
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <!-- Icon -->
  <link rel="icon" href="./img/favicon.ico" type="image/x-icon">
</head>
<body>

<!------ Include the above in your HEAD tag ---------->

<div class="wrapper fadeInDown">
  <div id="formContent">
    <!-- Tabs Titles -->

    <!-- Icon -->

    <div class="fadeIn first">
      <h1><b>
        EMPIEZA A JUGAR
      </b></h1>
      <p class="rojo">
        <?php
          if(isset($_GET['usuario'])){
            echo "El usuario ya existe";
          }
        ?>
      </p>
      <!-- <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon"/> -->
    </div>

    <!-- Login Form -->
    <form action="script/php/iniciarSesion.php" method="post">
      <input type="text" id="nombre" class="fadeIn second" name="nombre" placeholder="Nombre" required autofocus>
      <div class="nombre rojo">
        <?php
          if (isset($_GET["nombre"])) {
            if ($_GET["nombre"] == "1") {
              echo "<p>La longitud del nombre debe ser mayor o igual a 3</p>";
            } else if ($_GET["nombre"] == "2") {
              echo "<p>La longitud del nombre debe ser menor o igual a 20</p>";
            }
          }
        ?>
      </div>
      <input type="text" id="apellido" class="fadeIn second" name="apellido" placeholder="Apellido" required>
      <div class="apellido rojo">
        <?php
          if (isset($_GET["apellido"])) {
            if ($_GET["apellido"] == "1") {
              echo "<p>La longitud del apellido debe ser mayor o igual a 3</p>";
            } else if ($_GET["apellido"] == "2") {
              echo "<p>La longitud del apellido debe ser menor o igual a 20</p>";
            }
          }
        ?>
      </div>
      <select id="curso" class="fadeIn second" name="curso" required>
        <option value="1ESO">1º ESO</option>
        <option value="1BACH">1º BACH</option>
        <option value="2BACH">2º BACH</option>
        <option value="MCO-APSD">MCO-APSD</option>
      </select>
      <br>
      <input type="submit" class="fadeIn fourth" value="Jugar">
    </form>

    <!-- contraseña -->
    <!--<div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div>
  -->
  </div>
</div>
</body>
</html>
