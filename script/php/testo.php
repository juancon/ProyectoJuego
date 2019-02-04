<?php
	require_once 'Usuario.php';

	$usuarios = new Usuario("roberto",0,0);

	$usuarios->insert();