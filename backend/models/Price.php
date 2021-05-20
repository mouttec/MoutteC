<?php
class Price {
    private $conn;
    private $table = "prices";

    public $idPrice;
    public $typePrice;
    public $amount;

    public function __construct($db) 
    {
        $this->conn = $db;
    }

    public function createNewPrice() 
    {
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            typePrice = :typePrice,
            amount = :amount,
            powerRecovery = :powerRecovery
        ";

        $stmt = $this->conn->prepare($query);
        $params = [
            "typePrice" => htmlspecialchars(strip_tags($this->typePrice)),
            "amount" => htmlspecialchars(strip_tags($this->amount))
        ];

        if ($stmt->execute($params)) {
            return true;
        }
        return false;
    }
    }

    public function listPrices() 
    {
        $query = "SELECT * FROM ". $this->table;
        $stmt = $this->conn->prepare($query);

        if ($stmt->execute()) {
            return $stmt;
        }
        return false;
    }

    public function updatePrice()
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            typePrice = :typePrice,
            amount = :amount
            WHERE
            idPrice = :idPrice       
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "amount" => htmlspecialchars(strip_tags($this->amount)),
            "idPrice" => htmlspecialchars(strip_tags($this->idPrice))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function deletePrice() 
    {
       $query = "
            DELETE FROM "
            . $this->table .
            " WHERE
            idPrice = :idPrice       
        ";
        $stmt = $this->conn->prepare($query);

        $params = ["idPrice" => htmlspecialchars(strip_tags($this->idPrice))];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }
}