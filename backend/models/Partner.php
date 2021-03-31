<?php
class Partner 
{
    private $conn;
    private $table = "partners";
 
    public $idPartner;
    public $usernamePartner;
    public $mixedPassword;
    public $namePartner;
    public $numberAddressPartner;
    public $typeAddressPartner;
    public $nameAddressPartner;
    public $complementAddressPartner;
    public $zipAddressPartner;
    public $cityAddressPartner;
    public $phonePartner;
    public $statusPartner;
    public $typeGarage;
    public $typeTechnicalControl;
    public $mailPartner;
    public $nameBilling;
    public $siretPartner;
    public $numberAddressBilling;
    public $typeAddressBilling;
    public $nameAddressBilling;
    public $complementAddressBilling;
    public $zipAddressBilling;
    public $cityAddressBilling;
    public $datePartner;

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
            numberAddressPartner = :numberAddressPartner,
            typeAddressPartner = :typeAddressPartner,
            nameAddressPartner = :nameAddressPartner,
            complementAddressPartner = :complementAddressPartner,
            zipAddressPartner = :zipAddressPartner,
            cityAddressPartner = :cityAddressPartner,
            phonePartner = :phonePartner,
            statusPartner = :statusPartner,
            typeGarage = :typeGarage,
            typeTechnicalControl = :typeTechnicalControl,
            mailPartner = :mailPartner,        
            nameBilling = :nameBilling,
            siretPartner = :siretPartner,
            numberAddressBilling = :numberAddressBilling,
            typeAddressBilling = :typeAddressBilling,
            nameAddressBilling = :nameAddressBilling,
            complementAddressBilling = :complementAddressBilling,
            zipAddressBilling = :zipAddressBilling,
            cityAddressBilling = :cityAddressBilling
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "usernamePartner" => htmlspecialchars(strip_tags($this->usernamePartner)),
            "mixedPassword" => password_hash($this->mixedPassword, PASSWORD_DEFAULT),
            "namePartner" => htmlspecialchars(strip_tags($this->namePartner)),
            "numberAddressPartner" => htmlspecialchars(strip_tags($this->numberAddressPartner)),
            "typeAddressPartner" => htmlspecialchars(strip_tags($this->typeAddressPartner)),
            "nameAddressPartner" => htmlspecialchars(strip_tags($this->nameAddressPartner)),
            "complementAddressPartner" => htmlspecialchars(strip_tags($this->complementAddressPartner)),
            "zipAddressPartner" => htmlspecialchars(strip_tags($this->zipAddressPartner)),
            "cityAddressPartner" => htmlspecialchars(strip_tags($this->cityAddressPartner)),
            "phonePartner" => htmlspecialchars(strip_tags($this->phonePartner)),
            "statusPartner" => htmlspecialchars(strip_tags($this->statusPartner)),
            "typeGarage" => htmlspecialchars(strip_tags($this->typeGarage)),
            "typeTechnicalControl" => htmlspecialchars(strip_tags($this->typeTechnicalControl)),
            "mailPartner" => htmlspecialchars(strip_tags($this->mailPartner)),
            "nameBilling" => htmlspecialchars(strip_tags($this->nameBilling)),
            "siretPartner" => htmlspecialchars(strip_tags($this->siretPartner)),
            "numberAddressBilling" => htmlspecialchars(strip_tags($this->numberAddressBilling)),
            "typeAddressBilling" => htmlspecialchars(strip_tags($this->typeAddressBilling)),
            "nameAddressBilling" => htmlspecialchars(strip_tags($this->nameAddressBilling)),
            "complementAddressBilling" => htmlspecialchars(strip_tags($this->complementAddressBilling)),
            "zipAddressBilling" => htmlspecialchars(strip_tags($this->zipAddressBilling)),
            "cityAddressBilling" => htmlspecialchars(strip_tags($this->cityAddressBilling))
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

    public function searchPartnerById() {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idPartner = :idPartner
        LIMIT 0,1";
        $stmt = $this->conn->prepare($query);
        $params = ["idPartner" => htmlspecialchars(strip_tags($this->idPartner))];
        $stmt->execute($params);
        if ($stmt->execute($params)) {
            $row = $stmt->fetch();    
            return $row;
        }
        return false;
    }

    public function searchPartnerByUsername() {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            WHERE usernamePartner = :usernamePartner
            LIMIT 0,1";
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
            numberAddressPartner = :numberAddressPartner,
            typeAddressPartner = :typeAddressPartner,
            nameAddressPartner = :nameAddressPartner,
            complementAddressPartner = :complementAddressPartner,
            zipAddressPartner = :zipAddressPartner,
            cityAddressPartner = :cityAddressPartner,
            phonePartner = :phonePartner,
            statusPartner = :statusPartner,
            typeGarage = :typeGarage,
            typeTechnicalControl = :typeTechnicalControl,
            mailPartner = :mailPartner,        
            nameBilling = :nameBilling,
            siretPartner = :siretPartner,
            numberAddressBilling = :numberAddressBilling,
            typeAddressBilling = :typeAddressBilling,
            nameAddressBilling = :nameAddressBilling,
            complementAddressBilling = :complementAddressBilling,
            zipAddressBilling = :zipAddressBilling,
            cityAddressBilling = :cityAddressBilling
            WHERE
            idPartner = :idPartner
        ";
        $stmt = $this->conn->prepare($query);
        $params = [
            "usernamePartner" => htmlspecialchars(strip_tags($this->usernamePartner)),
            "namePartner" => htmlspecialchars(strip_tags($this->namePartner)),
            "numberAddressPartner" => htmlspecialchars(strip_tags($this->numberAddressPartner)),
            "typeAddressPartner" => htmlspecialchars(strip_tags($this->typeAddressPartner)),
            "nameAddressPartner" => htmlspecialchars(strip_tags($this->nameAddressPartner)),
            "complementAddressPartner" => htmlspecialchars(strip_tags($this->complementAddressPartner)),
            "zipAddressPartner" => htmlspecialchars(strip_tags($this->zipAddressPartner)),
            "cityAddressPartner" => htmlspecialchars(strip_tags($this->cityAddressPartner)),
            "phonePartner" => htmlspecialchars(strip_tags($this->phonePartner)),
            "statusPartner" => htmlspecialchars(strip_tags($this->statusPartner)),
            "typeGarage" => htmlspecialchars(strip_tags($this->typeGarage)),
            "typeTechnicalControl" => htmlspecialchars(strip_tags($this->typeTechnicalControl)), 
            "mailPartner" => htmlspecialchars(strip_tags($this->mailPartner)),
            "nameBilling" => htmlspecialchars(strip_tags($this->nameBilling)),
            "siretPartner" => htmlspecialchars(strip_tags($this->siretPartner)),
            "numberAddressBilling" => htmlspecialchars(strip_tags($this->numberAddressBilling)),
            "typeAddressBilling" => htmlspecialchars(strip_tags($this->typeAddressBilling)),
            "nameAddressBilling" => htmlspecialchars(strip_tags($this->nameAddressBilling)),
            "complementAddressBilling" => htmlspecialchars(strip_tags($this->complementAddressBilling)),
            "zipAddressBilling" => htmlspecialchars(strip_tags($this->zipAddressBilling)),
            "cityAddressBilling" => htmlspecialchars(strip_tags($this->cityAddressBilling)),
            "idPartner" => htmlspecialchars(strip_tags($this->idPartner))
        ];

        if ($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function changePassword() 
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
            "idPartner" => htmlspecialchars(strip_tags($this->idPartner)),
            "mixedPassword" => password_hash($this->mixedPassword, PASSWORD_DEFAULT),
        ];
        if ($stmt->execute($params)) {
            return true;
        }
        return false;
    }


    public function deletePartner() 
    {
        $query = "
            DELETE
            FROM " . $this->table .
            " WHERE usernamePartner = :usernamePartner
        ";
        $stmt = $this->conn->prepare($query);
        $params = ["usernamePartner" => htmlspecialchars(strip_tags($this->usernamePartner))];
        if ($stmt->execute($params)) {
            return true;
        }
        return false;
        
    }
    
}