<?php
  session_start();
  require_once "../script/php/Usuario.php";
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>El viaje de Magallanes</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>

  <link rel="stylesheet" type="text/css" href="../css/estilosComun.css">
  <script type="text/javascript" src="../script/javascript/ranking.js"></script>
  <!-- <link rel="stylesheet" href="/maps/documentation/javascript/cgc/demos.css"> -->
  
  

</head>
<body>
  <header class="container-fluid">
    <div class="modal fade" id="ranking">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">

            <h5 class="modal-title" >Ranking</h5>
            <button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true">X</span>
            </button>

          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row">
                <table id="mostrarRanking" class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                  <tr>
                    <th>Nombre</th>
                    <th>Curso</th>
                    <th>Puntuacion</th>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="btn btn-primary" data-dismiss="modal">
              Cerrar
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar">
      <div class="btn" data-toggle="modal" data-target="#ranking"><img src="../img/ranking.png" alt="Ranking" title="Ranking" width="50px" height="50px" class="iconosNav"></div>
      <div id="puntuacion"><?php echo "Puntuación: ".unserialize($_SESSION["usuario"])->getPuntuacion(); ?></div>
      <div id="nivel"><?php echo "Nivel: ".unserialize($_SESSION["usuario"])->getNivel(); ?></div>
      <a href="../script/php/cerrarSesion.php"><img src="../img/salir.png" alt="Cerrar sesion" title="Cerrar sesión" width="50px" height="50px" class="iconosNav"></a>
    </nav>
  </header>
  <section class="container">
    <article class="row">
      <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
        <div id="map"></div>
      </div>
    </article>
  </section>
  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
  <script type="text/javascript" src="../script/javascript/mapa.js"></script>
</body>
</html>
