<?php
class Address
{
    private $conn;
    private $table = "addresses";

    public $idAddress;
    public $idCustomer;
    public $adressStreetNumber;
    public $adressStreetType;
    public $adresStreetName;
    public $adressStreetComplement;
    public $adressZip;
    public $adressCity;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function createAddress() {
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            idCustomer = :idCustomer,
            addressStreetNumber = :adressStreetNumber,
            adressStreetType = :adressStreetType,
            adressStreetName = :adressStreetName,
            adressStreetComplement = :adressStreetComplement,        
            adressZip = :adressZip,
            adressCity = :adressCity
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idCustomer" => htmlspecialchars(strip_tags($this->idCustomer)),
            "adressStreetNumber" => htmlspecialchars(strip_tags($this->adressStreetNumber)),
            "adressStreetType" => htmlspecialchars(strip_tags($this->adressStreetType)),
            "adressStreetName" => htmlspecialchars(strip_tags($this->adressStreetName)),
            "adressStreetComplement" => htmlspecialchars(strip_tags($this->adressStreetComplement)),
            "adressZip" => htmlspecialchars(strip_tags($this->adressZip)),
            "adressCity" => htmlspecialchars(strip_tags($this->adressCity))
        ];

        if ($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function listAddresses() {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            ORDER BY
            idCustomer ASC";
        $stmt = $this->conn->prepare($query);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    public function searchAddress() {
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

    public function listAddressesByCustomer() {
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

    public function searchAddressesByBooking() {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idBooking = :idBooking";
        $stmt = $this->conn->prepare($query);

        $params = ["idBooking" => $this->idBooking];

        if($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function updateAddress() {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            adressStreetNumber = :adressStreetNumber,
            adressStreetType = :adressStreetType,
            adressStreetName = :adressStreetName,
            adressStreetComplement = :adressStreetComplement,        
            adressZip = :adressZip,
            adressCity = :adressCity
            WHERE
            idAAddress = :idAddress       
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "adressStreetNumber" => htmlspecialchars(strip_tags($this->adressStreetNumber)),
            "adressStreetType" => htmlspecialchars(strip_tags($this->adressStreetType)),
            "adressStreetName" => htmlspecialchars(strip_tags($this->adressStreetName)),
            "adressStreetComplement" => htmlspecialchars(strip_tags($this->adressStreetComplement)),
            "adressZip" => htmlspecialchars(strip_tags($this->adressZip)),
            "adressCity" => htmlspecialchars(strip_tags($this->adressCity)),
            "idAddress" => htmlspecialchars(strip_tags($this->idAddress))
        ];

        if($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function deleteAddress() {
        $query = "
            DELETE
            FROM " . $this->table .
            " WHERE idAddress = :idAddress
        ";
        $stmt = $this->conn->prepare($query);

        $params = ["idAddress" => htmlspecialchars(strip_tags($this->idAddress))];

        if($stmt->execute($params)) {
            return true;
        }
        return false;        
    }
}