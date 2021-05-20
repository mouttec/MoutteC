<?php
class Partner 
{
    private $conn;
    private $table = "partners";
 
    public $idPartner;
    public $usernamePartner;
    public $mixedPassword;
    public $namePartner;
    public $addressPartner;
    public $phonePartner;
    public $statusPartner;
    public $typePartner;
    public $mailPartner;
    public $nameBilling;
    public $siretPartner;
    public $addressBilling;
    public $datePartner;
    public $idAgency;
    public $typeBilling;

    public function __construct($db) 
    {
        $this->conn = $db;
    }

    public function createPartner() 
    {
        $query = "
            INSERT INTO "
            . $this->table .
            " SET 
            usernamePartner = :usernamePartner,
            namePartner = :namePartner,
            mixedPassword = :mixedPassword,
            addressPartner = :addressPartner,
            phonePartner = :phonePartner,
            statusPartner = :statusPartner,
            typePartner = :typePartner,
            mailPartner = :mailPartner,        
            nameBilling = :nameBilling,
            siretPartner = :siretPartner,
            addressBilling = :addressBilling,
            idAgency = :idAgency,
            typeBilling = :typeBilling
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "usernamePartner" => htmlspecialchars(strip_tags($this->usernamePartner)),
            "mixedPassword" => password_hash($this->mixedPassword, PASSWORD_DEFAULT),
            "namePartner" => htmlspecialchars(strip_tags($this->namePartner)),
            "addressPartner" => htmlspecialchars(strip_tags($this->addressPartner)),
            "phonePartner" => htmlspecialchars(strip_tags($this->phonePartner)),
            "statusPartner" => htmlspecialchars(strip_tags($this->statusPartner)),
            "typePartner" => htmlspecialchars(strip_tags($this->typePartner)),
            "mailPartner" => htmlspecialchars(strip_tags($this->mailPartner)),
            "nameBilling" => htmlspecialchars(strip_tags($this->nameBilling)),
            "siretPartner" => htmlspecialchars(strip_tags($this->siretPartner)),
            "addressBilling" => htmlspecialchars(strip_tags($this->addressBilling)),
            "idAgency" => htmlspecialchars(strip_tags($this->idAgency)),
            "typeBilling" => htmlspecialchars(strip_tags($this->typeBilling))
        ];

        if ($stmt->execute($params)) {
            return true; 
        }
        return false;
    }

    public function listPartners() 
    {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            ORDER BY
            idPartner";
        $stmt = $this->conn->prepare($query);

        if ($stmt->execute()) {
            return $stmt;
        }
        return false;
    }

    public function listPartnersByAgency() 
    {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            WHERE idAgency = :idAgency
            ORDER BY
            idPartner";
        $stmt = $this->conn->prepare($query);

        $params = ["idAgency" => htmlspecialchars(strip_tags($this->idAgency))];

        if ($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function searchPartnerById() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idPartner = :idPartner";
        $stmt = $this->conn->prepare($query);

        $params = ["idPartner" => htmlspecialchars(strip_tags($this->idPartner))];
        
        if ($stmt->execute($params)) {
            $row = $stmt->fetch();    
            return $row;
        }
        return false;
    }

    public function searchPartnerByUsername() 
    {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            WHERE usernamePartner = :usernamePartner";
        $stmt = $this->conn->prepare($query);

        $params = ["usernamePartner" => htmlspecialchars(strip_tags($this->usernamePartner))];

        if ($stmt->execute($params)) {
            $row = $stmt->fetch();    
            return $row;
        }
        return false;
    }

    public function updatePartner() 
    //update complet sauf mot de passe
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            usernamePartner = :usernamePartner,
            namePartner = :namePartner,
            addressPartner = :addressPartner,
            phonePartner = :phonePartner,
            statusPartner = :statusPartner,
            typePartner = :typePartner,
            mailPartner = :mailPartner,        
            nameBilling = :nameBilling,
            siretPartner = :siretPartner,
            addressBilling = :addressBilling,
            idAgency = :idAgency,
            typeBilling = :typeBilling
            WHERE
            idPartner = :idPartner
        ";
        $stmt = $this->conn->prepare($query);
        $params = [
            "usernamePartner" => htmlspecialchars(strip_tags($this->usernamePartner)),
            "namePartner" => htmlspecialchars(strip_tags($this->namePartner)),
            "addressPartner" => htmlspecialchars(strip_tags($this->addressPartner)),
            "phonePartner" => htmlspecialchars(strip_tags($this->phonePartner)),
            "statusPartner" => htmlspecialchars(strip_tags($this->statusPartner)),
            "typePartner" => htmlspecialchars(strip_tags($this->typePartner)), 
            "mailPartner" => htmlspecialchars(strip_tags($this->mailPartner)),
            "nameBilling" => htmlspecialchars(strip_tags($this->nameBilling)),
            "siretPartner" => htmlspecialchars(strip_tags($this->siretPartner)),
            "addressBilling" => htmlspecialchars(strip_tags($this->addressBilling)),
            "idAgency" => htmlspecialchars(strip_tags($this->idAgency)),
            "typeBilling" => htmlspecialchars(strip_tags($this->typeBilling)),
            "idPartner" => htmlspecialchars(strip_tags($this->idPartner))
        ];

        if ($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function changePasswordPartner() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            mixedPassword = :mixedPassword
            WHERE
            idPartner = :idPartner       
        ";
        $stmt = $this->conn->prepare($query);
        $params = [
            "mixedPassword" => password_hash($this->mixedPassword, PASSWORD_DEFAULT),
            "idPartner" => htmlspecialchars(strip_tags($this->idPartner))
        ];
        if ($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function activatePartner() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            statusPartner = :statusPartner
            WHERE
            idPartner = :idPartner       
        ";
        $stmt = $this->conn->prepare($query);
        $params = [
            "statusPartner" => "Partenaire",
            "idPartner" => htmlspecialchars(strip_tags($this->idPartner))
        ];
        if ($stmt->execute($params)) {
            return true;
        }
        return false;
    }
    
    public function deactivatePartner() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            statusPartner = :statusPartner
            WHERE
            idPartner = :idPartner       
        ";
        $stmt = $this->conn->prepare($query);
        $params = [
            "statusPartner" => "Non partenaire",
            "idPartner" => htmlspecialchars(strip_tags($this->idPartner))
        ];
        if ($stmt->execute($params)) {
            return true;
        }
        return false;
    }
}