<?php
class Partner 
{
    // Propriétés privées de connexion à la DB
    private $conn;
    private $table = "partners";
    // Propriétés publiques de l'objet Post
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

    // Constructeur : quand on instancie l'objet, on lui passe la connexion à la DB
    public function __construct($db) 
    {
        $this->conn = $db;
    }

    public function createPartner() 
    {
        // On crée la requête
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
            numberAddrerssBilling = :numberAddressBilling,
            typeAddressBilling = :typeAddressBilling,
            nameAddressBilling = :nameAddressBilling,
            complementAddressBilling = :complementAddressBilling,
            zipAddressBilling = :zipAddressBilling,
            cityAddressBilling = :cityAddressBilling
        ";
        // on prépare la requête
        $stmt = $this->conn->prepare($query);
        $params = [
            "usernamePartner" => $this->$usernamePartner,
            "mixedPassword" => password_hash($this->$mixedPassword, PASSWORD_DEFAULT),
            "namePartner" => $this->$namePartner,
            "numberAddressPartner" => $this->$numberAddressPartner,
            "typeAddressPartner" => $this->$typeAddressPartner,
            "nameAddressPartner" => $this->$nameAddressPartner,
            "complementAddressPartner" => $this->$complementAddressPartner,
            "zipAddressPartner" => $this->$zipAddressPartner,
            "cityAddressPartner" => $this->$cityAddressPartner,
            "phonePartner" => $this->$phonePartner,
            "statusPartner" => $this->$statusPartner,
            "typeGarage" => $this->$typeGarage,
            "typeTechnicalControl" => $this->$typeTechnicalControl,
            "mailPartner" => $this->$mailPartner,
            "nameBilling" => $this->$nameBilling,
            "siretPartner" => $this->$siretPartner,
            "numberAddressBilling" => $this->$numberAddressBilling,
            "typeAddressBilling" => $this->$typeAddressBilling,
            "nameAddressBilling" => $this->$nameAddressBilling,
            "complementAddressBilling" => $this->$complementAddressBilling,
            "zipAddressBilling" => $this->$zipAddressBilling,
            "cityAddressBilling" => $this->$cityAddressBilling
        ];
        // on exécute la requête et on vérifie si elle s'est bien déroulée 
        $result = $stmt->execute($params);
        if ($result) {
            return true; 
        } else {
            return false;
        }
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
        $stmt->execute(); 

        return $stmt;
    }

    public function searchPartnerById() {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idPartner = :idPartner
        LIMIT 0,1";
        $stmt = $this->conn->prepare($query);
        $params = ["idPartner" => $idPartner];
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
        $params = ["usernamePartner" => $usernamePartner];
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
            numberAddrerssBilling = :numberAddressBilling,
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
            "usernamePartner" => $this->usernamePartner,
            "numberAddressPartner" => $this->numberAddressPartner,
            "typeAddressPartner" => $this->typeAddressPartner,
            "nameAddressPartner" => $this->nameAddressPartner,
            "complementAddressPartner" => $this->complementAddressPartner,
            "zipAddressPartner" => $this->zipAddressPartner,
            "cityAddressPartner" => $this->cityAddressPartner,
            "phonePartner" => $this->phonePartner,
            "statusPartner" => $this->statusPartner,
            "typeGarage" => $this->typeGarage,
            "typeTechnicalControl" => $this->typeTechnicalControl, 
            "mailPartner" => $this->mailPartner,
            "nameBilling" => $this->nameBilling,
            "siretPartner" => $this->siretPartner,
            "numberAddressBilling" => $this->numberAddressBilling,
            "typeAddressBilling" => $this->typeAddressBilling,
            "nameAddressBilling" => $this->nameAddressBilling,
            "complementAddressBilling" => $this->complementAddressBilling,
            "zipAddressBilling" => $this->zipAddressBilling,
            "cityAddressBilling" => $this->cityAddressBilling,
            "idPartner" => $this->idPartner
        ];
        $stmt->execute($params); 
        if (!empty($stmt)) {
            return true; 
        } else { 
            return false;
        }
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
            "idPartner" => $this->idPartner,
            "mixedPassword" => password_hash($this->mixedPassword, PASSWORD_DEFAULT),
        ];
        $stmt->execute($params);
        return true;
    }


    public function deletePartner() 
    {
        $query = "
            DELETE
            FROM " . $this->table .
            " WHERE usernamePartner = :usernamePartner
        ";
        $stmt = $this->conn->prepare($query);
        $params = ["usernamePartner" => $this->usernamePartner];
        $stmt->execute($params); 
        return true;
        
    }
    
}