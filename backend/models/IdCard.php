<?php
class IdentityCard {
    private $conn;
    private $table = "CardIDCustomer";

    public $idCard;
    public $urlCard;
    public $idContract;
    public $dateCard;
    public $powerRecovery;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function createCard() {
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            urlCard = :urlCard,
            idContract = :idContract,
            powerRecovery = :powerRecovery
        ";

        $stmt = $this->conn->prepare($query);
        $params = [
            "urlCard" => htmlspecialchars(strip_tags($this->urlCard)),
            "idContract" => htmlspecialchars(strip_tags($this->idContract)),
            "powerRecovery" => htmlspecialchars(strip_tags($this->powerRecovery))
        ];

        if ($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function listCards() {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            ORDER BY
            idCard DESC";
        $stmt = $this->conn->prepare($query);

        if ($stmt->execute()) {
            return $stmt;
        }
        return false;
    }

    public function listCardsByContract() {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idContract = :idContract";
        
        $stmt = $this->conn->prepare($query);
        $params = ["idContract" => htmlspecialchars(strip_tags($this->idContract))];

        if ($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function searchCardById() {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idCard = :idCard";
        
        $stmt = $this->conn->prepare($query);
        $params = ["idCard" => htmlspecialchars(strip_tags($this->idCard))];

        if ($stmt->execute($params)) {
            $row = $stmt->fetch();    
            return $row;
        }
        return false;
    }
}