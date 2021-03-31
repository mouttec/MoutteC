<?php
class Contract 
{
    private $conn;
    private $table = "contracts";

    public $idContract;
    public $idCustomer;
    public $idPartner;
    public $idBooking;
    public $urlContract;
    public $dateContract;
    public $idCar;
    public $idPickupAddress;
    public $idReturnAddress;
    public $idTeammatePickup;
    public $idTeammateReturn;

    public function __construct($db) 
    {
        $this->conn = $db;
    }

    public function createContract() 
    {
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            idCustomer = :idCustomer,
            idPartner = :idPartner,
            idBooking = :idBooking,
            urlContract = :urlContract,
            idCar = :idCar,
            idPickupAddress = :idPickupAddress,
            idReturnAddress = :idReturnAddress,
            idTeammatePickup = :idTeammatePickup
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idCustomer" => htmlspecialchars(strip_tags($this->idCustomer));,
            "idPartner" => htmlspecialchars(strip_tags($this->idPartner)),
            "idBooking" => htmlspecialchars(strip_tags($this->idBooking)),
            "urlContract" => htmlspecialchars(strip_tags($this->urlContract)),
            "idCar" => htmlspecialchars(strip_tags($this->idCar)),
            "idPickupAddress" => htmlspecialchars(strip_tags($this->idPickupAddress)),
            "idReturnAddress" => htmlspecialchars(strip_tags($this->idReturnAddress)),
            "idTeammatePickup" => htmlspecialchars(strip_tags($this->idTeammatePickup))
        ];

        if ($stmt->execute()) {
            return $stmt;
        }
        return false;
    }

    public function listContracts() 
    {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            ORDER BY
            dateContract DESC";
        $stmt = $this->conn->prepare($query);

        if ($stmt->execute()) {
            return $stmt;
        }
        return false;
    }

    public function searchContractsByPartner() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idPartner = :idPartner";
        $stmt = $this->conn->prepare($query);
        
        $params = ["idPartner" => htmlspecialchars(strip_tags($this->idPartner))];

        if ($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function searchCustomerContractsByCustomer() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idCustomer = :idCustomer";
        $stmt = $this->conn->prepare($query);

        $params = ["idCustomer" => htmlspecialchars(strip_tags($this->idCustomer))];
        
        if ($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function searchContractsByCar() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idCar = :idCar";
        $stmt = $this->conn->prepare($query);

        $params = ["idCar" => htmlspecialchars(strip_tags($this->idCar))];

        if ($stmt->execute($params)) {
            return $stmt;
        }
        return false;    
    }

    public function searchContract() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idContract = :idContract
        LIMIT 0,1";
        $stmt = $this->conn->prepare($query);
        
        $params = ["idContract" => htmlspecialchars(strip_tags($this->idContract))];
        
        if ($stmt->execute()) {
            $row = $stmt->fetch();    
            return $row;
        }
        return false;
    }

    public function updateContract() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            idCustomer = :idCustomer,
            idPartner = :idPartner,
            urlContract = :urlContract,
            idBooking = :idBooking,
            idCar = :idCar,
            idPickupAddress = :idPickupAddress,
            idReturnAddress = :idReturnAddress,
            WHERE
            idContract = :idContract
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idCustomer" => htmlspecialchars(strip_tags($this->idCustomer));,
            "idPartner" => htmlspecialchars(strip_tags($this->idPartner)),
            "idBooking" => htmlspecialchars(strip_tags($this->idBooking)),
            "urlContract" => htmlspecialchars(strip_tags($this->urlContract)),
            "idCar" => htmlspecialchars(strip_tags($this->idCar)),
            "idPickupAddress" => htmlspecialchars(strip_tags($this->idPickupAddress)),
            "idReturnAddress" => htmlspecialchars(strip_tags($this->idReturnAddress)),
            "idContract" => htmlspecialchars(strip_tags($this->idContract))
        ];

        if ($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function teammateReturn() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            idTeammateReturn = :idTeammateReturn,
            WHERE
            idContract = :idContract       
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idContract" => htmlspecialchars(strip_tags($this->idContract)),
            "idTeammateReturn" => htmlspecialchars(strip_tags($this->idTeammateReturn))
        ];

        if ($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    // public function deleteContract() 
    // {
    //     // On crée la requête
    //     $query = "
    //         DELETE
    //         FROM " . $this->table .
    //         " WHERE idContract = :idContract
    //     ";
    //     // on prépare la requête
    //     $stmt = $this->conn->prepare($query);
    //     // on nettoie et sécurise l'input
    //     // $this->idContract = htmlspecialchars(strip_tags($this->idContract));
    //     // tableau associatif pour lier les paramètres reçus à la requête
    //     $params = ["idContract" => $idContract];
    //     // on exécute la requête et on vérifie si elle s'est bien déroulée
    //     if($stmt->execute($params) : return true ? return false;
    // }    
}