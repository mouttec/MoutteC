<?php
class Car 
{
    private $conn;
    private $table = "cars";

    public $idCar;
    public $idCustomer;
    public $licensePlateCar;
    public $brandCar;
    public $modelCar;
    public $dateOfCirculationCar;
    public $motorizationCar;
    public $urlGrayCard;

    public function __construct($db) 
    {
        $this->conn = $db;
    }

    public function createCar() 
    {
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            idCustomer = :idCustomer,
            licensePlateCar = :licensePlateCar,
            brandCar = :brandCar,
            modelCar = :modelCar,
            dateOfCirculationCar = :dateOfCirculationCar,
            motorizationCar = :motorizationCar
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idCustomer" => htmlspecialchars(strip_tags($this->idCustomer)),
            "licensePlateCar" => htmlspecialchars(strip_tags($this->licensePlateCar)),
            "brandCar" => htmlspecialchars(strip_tags($this->brandCar)),
            "modelCar" => htmlspecialchars(strip_tags($this->modelCar)),
            "dateOfCirculationCar" => htmlspecialchars(strip_tags($this->dateOfCirculationCar)),
            "motorizationCar" => htmlspecialchars(strip_tags($this->motorizationCar))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function listCars() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table;
        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

    public function searchCarsByCustomer() 
    {
        $query = "
            SELECT *
            FROM " . $this->table . "
            WHERE idCustomer = :idCustomer
            ORDER BY idCar ASC";
        $stmt = $this->conn->prepare($query);

        $params = ["idCustomer" => htmlspecialchars(strip_tags($this->idCustomer))];

        if($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function searchCarByPlate() 
    {
        $query = "
            SELECT *
            FROM " . $this->table . "
            WHERE licensePlateCar = :licensePlateCar";
        $stmt = $this->conn->prepare($query);

        $params = ["licensePlateCar" => htmlspecialchars(strip_tags($this->licensePlateCar))];

        if($stmt->execute($params)) {
            $row = $stmt->fetch();
            return $row;
        }
        return false;
    }

    public function searchCarById() 
    {
        $query = "
            SELECT *
            FROM " . $this->table . "
            WHERE idCar = :idCar";
        $stmt = $this->conn->prepare($query);

        $params = ["idCar" => htmlspecialchars(strip_tags($this->idCar))];

        if($stmt->execute($params)) {
            $row = $stmt->fetch();
            return $row;
        }
        return false;
    }

    public function updateCar() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            idCustomer = :idCustomer,
            licensePlateCar = :licensePlateCar,
            brandCar = :brandCar,
            modelCar = :modelCar,
            dateOfCirculationCar = :dateOfCirculationCar,
            motorizationCar = :motorizationCar,
            urlGrayCard = :urlGrayCard
            WHERE
            idCar = :idCar       
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idCustomer" => htmlspecialchars(strip_tags($this->idCustomer)),
            "licensePlateCar" => htmlspecialchars(strip_tags($this->licensePlateCar)),
            "brandCar" => htmlspecialchars(strip_tags($this->brandCar)),
            "modelCar" => htmlspecialchars(strip_tags($this->modelCar)),
            "dateOfCirculationCar" => htmlspecialchars(strip_tags($this->dateOfCirculationCar)),
            "motorizationCar" => htmlspecialchars(strip_tags($this->motorizationCar)),
            "urlGrayCard" => htmlspecialchars(strip_tags($this->urlGrayCard)),
            "idCar" => htmlspecialchars(strip_tags($this->idCar))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function unbindCarFromCustomer() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            idCustomer = :idCustomer
            WHERE
            idCar = :idCar       
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idCustomer" => "",
            "idCar" => htmlspecialchars(strip_tags($this->idCar))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;         
    }   
}