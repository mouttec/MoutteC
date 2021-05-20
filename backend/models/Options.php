<?php
class Options 
{
    private $conn;
    private $table = "options";

    public $site;
    public $rang;
    public $identifiant;
    public $key;
 
    public function __construct($db) 
    {
        $this->conn = $db;
    }

    public function getOptions() 
    {
        $query = " SELECT * FROM ". $this->table;
        $stmt = $this->conn->prepare($query);

        if ($stmt->execute()) {
            $row = $stmt->fetch();    
            return $row;
        }
        return false;
    }
}