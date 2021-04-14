<?php
class Contract 
{
    private $conn;
    private $table = "contracts";

    public $idContract;
    public $idBooking;
    public $idCar;
    public $idCustomer;
    public $idPartner;
    public $idAgency;
    public $urlCustomerForthInventory;
    public $urlPartnerForthInventory;
    public $urlPartnerBackInventory;
    public $urlCustomerBackInventory;
    public $dateContract;
    public $idForthAddress;
    public $idBackAddress;
    public $idTeammateForth;
    public $idTeammateBack;

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
            idBooking = :idBooking,
            idCar = :idCar,
            idCustomer = :idCustomer,
            idPartner = :idPartner,
            idAgency = :idAgency,
            urlForthInventory = :urlForthInventory,
            idForthAddress = :idForthAddress,
            idReturnAddress = :idReturnAddress,
            idTeammateForth = :idTeammateForth
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idBooking" => htmlspecialchars(strip_tags($this->idBooking)),
            "idCar" => htmlspecialchars(strip_tags($this->idCar)),
            "idCustomer" => htmlspecialchars(strip_tags($this->idCustomer)),
            "idPartner" => htmlspecialchars(strip_tags($this->idPartner)),
            "idAgency" => htmlspecialchars(strip_tags($this->idAgency)),
            "urlCustomerForthInventory" => htmlspecialchars(strip_tags($this->urlCustomerForthInventory)),
            "idForthAddress" => htmlspecialchars(strip_tags($this->idForthAddress)),
            "idReturnAddress" => htmlspecialchars(strip_tags($this->idReturnAddress)),
            "idTeammateForth" => htmlspecialchars(strip_tags($this->idTeammateForth))
        ];

        if ($stmt->execute($params)) {
            return true;
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

    public function searchContractsByCustomer() 
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

    public function searchContractsByAgency() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idAgency = :idAgency";
        $stmt = $this->conn->prepare($query);

        $params = ["idAgency" => htmlspecialchars(strip_tags($this->idAgency))];

        if ($stmt->execute($params)) {
            return $stmt;
        }
        return false;           
    }

    public function searchContractByBooking() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idBooking = :idBooking
        LIMIT 0,1";
        $stmt = $this->conn->prepare($query);
        
        $params = ["idBooking" => htmlspecialchars(strip_tags($this->idBooking))];
        
        if ($stmt->execute($params)) {
            $row = $stmt->fetch();    
            return $row;
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
        
        if ($stmt->execute($params)) {
            $row = $stmt->fetch();    
            return $row;
        }
        return false;
    }

    public function addPartnerForthInventory() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            urlPartnerForthInventory = :urlPartnerForthInventory
            WHERE idContract = :idContract";
        $stmt = $this->conn->prepare($query);

        $params = [
            "urlPartnerForthInventory" => htmlspecialchars(strip_tags($this->urlPartnerForthInventory)),
            "idContract" => htmlspecialchars(strip_tags($this->idContract))
        ];
        if ($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function addPartnerBackInventory() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            idTeammateBack = :idTeammateBack,            
            urlPartnerBacklInventory = :urlPartnerBackInventory
            WHERE idContract = :idContract";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idTeammateBack" => htmlspecialchars(strip_tags($this->idTeammateBack)),
            "urlPartnerBackInventory" => htmlspecialchars(strip_tags($this->urlPartnerBackInventory)),
            "idContract" => htmlspecialchars(strip_tags($this->idContract))
        ];
        if ($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function addCustomerBackInventory() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            urlCustomerBackInventory = :urlCustomerBackInventory
            WHERE idContract = :idContract";
        $stmt = $this->conn->prepare($query);   

        $params = [
            "urlCustomerBackInventory" => htmlspecialchars(strip_tags($this->urlCustomerBackInventory)),
            "idContract" => htmlspecialchars(strip_tags($this->idContract))
        ];

        if ($stmt->execute($params)) {
            return true;
        }
        return false;
    }
}