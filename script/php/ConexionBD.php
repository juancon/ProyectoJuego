<?php
	abstract class ConexionDB {

		private static $server = 'sql7.freemysqlhosting.net';
		private static $db = 'sql7277163';
		private static $user = 'sql7277163';
		private static $password = 't1hjePSza8';
		private static $port=3306;

		public static function connectDB() {
			try {
				$connection = new PDO("mysql:host=".self::$server.";dbname=".self::$db.";port=".self::$port.";charset=utf8", self::$user, self::$password);
				$connection -> setAttribute (PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			} 
			catch (PDOException $e) {
				echo "No se ha podido establecer conexión con el servidor de bases de datos.<br>";
				die ("Error: " . $e->getMessage());
			}
			return $connection;
		}
}