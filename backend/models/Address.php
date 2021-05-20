<?php
class Address
{
    private $conn;
    private $table = "addresses";

    public $idAddress;
    public $idCustomer;
    public $address;
    public function __construct($db) 
    {
        $this->conn = $db;
    }

    public function createAddress() 
    {
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            idCustomer = :idCustomer,
            address = :address,

        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idCustomer" => htmlspecialchars(strip_tags($this->idCustomer)),
            "address" => htmlspecialchars(strip_tags($this->address))
        ];

        if ($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function listAddresses() 
    {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            ORDER BY
            idCustomer ASC";
        $stmt = $this->conn->prepare($query);

        if ($stmt->execute()) {
            return $stmt;
        }
        return false;
    }

    public function searchAddress() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idAddress = :idAddress
        LIMIT 0,1";
        $stmt = $this->conn->prepare($query);

        $params = ["idAddress" => htmlspecialchars(strip_tags($this->idAddress))];

        if($stmt->execute($params)) {
            $row = $stmt->fetch();
            return $row;
        }
        return false;
    }

    public function searchAddressId() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table .
        " SET
        idCustomer = :idCustomer,
        address = :address
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idCustomer" => htmlspecialchars(strip_tags($this->idCustomer)),
            "address" => htmlspecialchars(strip_tags($this->address))
        ];

        if($stmt->execute($params)) {
            $row = $stmt->fetch();
            return $row['idAddress'];
        }
        return false;
    }    

    public function listAddressesByCustomer() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idCustomer = :idCustomer";
        $stmt = $this->conn->prepare($query);

        $params = ["idCustomer" => htmlspecialchars(strip_tags($this->idCustomer))];

        if($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function updateAddress() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            address = :address
            WHERE
            idAddress = :idAddress       
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "address" => htmlspecialchars(strip_tags($this->address)),
            "idAddress" => htmlspecialchars(strip_tags($this->idAddress))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }
}