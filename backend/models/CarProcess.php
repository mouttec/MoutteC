<?php
class CarProcess
{
    private $conn;
    private $table = "carsProcessing";

    public $idProcess;
    public $idCar;
    public $idPartner;
    public $idBooking;
    public $idAgency;
    public $carStatus;

    public function __construct($db) 
    {
        $this->conn = $db;
    }

    public function createNewCarProcess() 
    {
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            idCar = :idCar,
            idPartner = :idPartner,
            idBooking = :idBooking,
            idAgency = :idAgency,
            carStatus = :carStatus
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idCar" => htmlspecialchars(strip_tags($this->idCar)),
            "idPartner" => htmlspecialchars(strip_tags($this->idPartner)),
            "idBooking" => htmlspecialchars(strip_tags($this->idBooking)),
            "idAgency" => htmlspecialchars(strip_tags($this->idAgency)),
            "carStatus" => htmlspecialchars(strip_tags($this->carStatus))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function listCarsInProcess() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table;
        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

    public function listCarProcessesByAgency() 
    {
        $query = "
            SELECT *
            FROM " . $this->table . "
            WHERE idAgency = :idAgency
            ORDRE BY idCar ASC";
        $stmt = $this->conn->prepare($query);

        $params = ["idAgency" => htmlspecialchars(strip_tags($this->idAgency))];

        if($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function listCarProcessesByPartner() 
    {
        $query = "
            SELECT *
            FROM " . $this->table . "
            WHERE idPartner = :idPartner
            ORDRE BY idCar ASC";
        $stmt = $this->conn->prepare($query);

        $params = ["idPartner" => htmlspecialchars(strip_tags($this->idPartner))];

        if($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function searchCarProcessById() 
    {
        $query = "
            SELECT *
            FROM " . $this->table . "
            WHERE idProcess = :idProcess";
        $stmt = $this->conn->prepare($query);

        $params = ["idProcess" => htmlspecialchars(strip_tags($this->idProcess))];

        if($stmt->execute($params)) {
            $row = $stmt->fetch();
            return $row;
        }
        return false;
    }

    public function updateCarProcessStatus() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            carStatus = :carStatus
            WHERE
            idProcess = :idProcess
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "carStatus" => htmlspecialchars(strip_tags($this->carStatus)),
            "idProcess" => htmlspecialchars(strip_tags($this->idProcess))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function deleteCarProcess() 
    {
        $query = "
            DELETE
            FROM " . $this->table .
            " WHERE idBooking = :idBooking
        ";
        $stmt = $this->conn->prepare($query);

        $params = ["idBooking" => htmlspecialchars(strip_tags($this->idBooking))];

        if($stmt->execute($params)) {
            return true;
        }
        return false;         
    }   
}