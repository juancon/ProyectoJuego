<?php
  session_start();
?>
<!DOCTYPE html>
<html>
<head>
  <title></title>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src=""></script>
  <link rel="stylesheet" type="text/css" href="css/style.css">

</head>
<body>

<!------ Include the above in your HEAD tag ---------->
<!-- Este es el login -->

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
      </p class="rojo">
      <!-- <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon"/> -->
    </div>

    <!-- Login Form -->
    <form action="script/php/iniciarSesion.php" method="post">
      <input type="text" id="nombre" class="fadeIn second" name="nombre" placeholder="Nombre" required>
      <input type="text" id="apellido" class="fadeIn second" name="apellido" placeholder="Apellido" required>
      <input type="text" id="curso" class="fadeIn second" name="curso" placeholder="Curso" required>
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
