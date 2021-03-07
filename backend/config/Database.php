<?php
class Database {
    // Paramètres DB
    // Les attributs sont en mode "private" et ne sont donc accessibles qu'à l'intérieur de la classe
    private $host = "localhost";
    private $dbname = "mouttec";
    private $username = "root";
    private $password = "root";
    private $conn;
    // méthode de connection à la DB
    public function connect() {
        $this->conn = null;
        try {
            // Définition des otions de l'objet PDO
            // référence PDO : https://www.php.net/manual/en/book.pdo.php
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
            ];
            // Connection à la DB
            $this->conn = new PDO("mysql:host=$this->host;dbname=$this->dbname;charset=utf8", $this->username, $this->password, $options);
             //echo "Succesfully connected to db";
        } catch (PDOException $error) {
            echo "Connection error : $error->getMessage()";
        }
        return $this->conn;
    }
}