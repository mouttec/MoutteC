<?php
class Address
{
    private $conn;
    private $table = "addresses";

    public $idAddress;
    public $idCustomer;
    public $addressStreetNumber;
    public $addressStreetType;
    public $addresStreetName;
    public $addressStreetComplement;
    public $addressZip;
    public $addressCity;

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
            addressStreetNumber = :addressStreetNumber,
            addressStreetType = :addressStreetType,
            addressStreetName = :addressStreetName,
            addressStreetComplement = :addressStreetComplement,        
            addressZip = :addressZip,
            addressCity = :addressCity
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idCustomer" => htmlspecialchars(strip_tags($this->idCustomer)),
            "addressStreetNumber" => htmlspecialchars(strip_tags($this->addressStreetNumber)),
            "addressStreetType" => htmlspecialchars(strip_tags($this->addressStreetType)),
            "addressStreetName" => htmlspecialchars(strip_tags($this->addressStreetName)),
            "addressStreetComplement" => htmlspecialchars(strip_tags($this->addressStreetComplement)),
            "addressZip" => htmlspecialchars(strip_tags($this->addressZip)),
            "addressCity" => htmlspecialchars(strip_tags($this->addressCity))
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

    public function searchAddressByDetails() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table .
        " WHERE
        (idCustomer = :idCustomer AND
        addressStreetNumber = :addressStreetNumber AND
        addressStreetName = :addressStreetName AND
        addressZip = :addressZip AND
        addressCity = :addressCity)
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idCustomer" => htmlspecialchars(strip_tags($this->idCustomer)),
            "addressStreetNumber" => htmlspecialchars(strip_tags($this->addressStreetNumber)),
            "addressStreetName" => htmlspecialchars(strip_tags($this->addressStreetName)),
            "addressZip" => htmlspecialchars(strip_tags($this->addressZip)),
            "addressCity" => htmlspecialchars(strip_tags($this->addressCity))
        ];

        if($stmt->execute($params)) {
            $row = $stmt->fetch();
            return $row;
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
            addressStreetNumber = :addressStreetNumber,
            addressStreetType = :addressStreetType,
            addressStreetName = :addressStreetName,
            addressStreetComplement = :addressStreetComplement,        
            addressZip = :addressZip,
            addressCity = :addressCity
            WHERE
            idAddress = :idAddress       
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "addressStreetNumber" => htmlspecialchars(strip_tags($this->addressStreetNumber)),
            "addressStreetType" => htmlspecialchars(strip_tags($this->addressStreetType)),
            "addressStreetName" => htmlspecialchars(strip_tags($this->addressStreetName)),
            "addressStreetComplement" => htmlspecialchars(strip_tags($this->addressStreetComplement)),
            "addressZip" => htmlspecialchars(strip_tags($this->addressZip)),
            "addressCity" => htmlspecialchars(strip_tags($this->addressCity)),
            "idAddress" => htmlspecialchars(strip_tags($this->idAddress))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }
}