<?php
class Database {
    private $host = "localhost";
    private $dbname = "mouttec";
    private $username = "root";
    private $password = "root";
    private $conn;

    public function connect() {
        $this->conn = null;
        try {
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
            ];
            $this->conn = new PDO("mysql:host=$this->host;dbname=$this->dbname;charset=utf8", $this->username, $this->password, $options);
        } catch (PDOException $error) {
            echo "Connection error : $error->getMessage()";
        }
        return $this->conn;
    }
}