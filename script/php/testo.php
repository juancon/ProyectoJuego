<?php
	require_once 'Usuario.php';

	if(Usuario::buscarUsuario("juan")){
		echo "si";
	}else{
		echo "no";
	}