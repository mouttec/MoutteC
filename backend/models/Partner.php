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

    public function createPartner($partnerData) 
    {
        // On crée la requête
        $query = "
            INSERT INTO "
            . $this->table .
            " SET 
            usernamePartner = 'usernameduPartner',
            namePartner = 'nameDuPartner',
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
        $stmt = $partnerData->conn->prepare($query);
        $mixedPassword = password_hash($partnerData->passwordPartner, PASSWORD_DEFAULT);
        // tableau associatif pour lier les paramètres reçus à la requête
        $params = [
            "usernamePartner" => $partnerData->usernamePartner,
            "mixedPassword" => $mixedPassword,
            "namePartner" => $partnerData->namePartner,
            "numberAddressPartner" => $partnerData->numberAddressPartner,
            "typeAddressPartner" => $partnerData->typeAddressPartner,
            "nameAddressPartner" => $partnerData->nameAddressPartner,
            "complementAddressPartner" => $partnerData->complementAddressPartner,
            "zipAddressPartner" => $partnerData->zipAddressPartner,
            "cityAddressPartner" => $partnerData->cityAddressPartner,
            "phonePartner" => $partnerData->phonePartner,
            "statusPartner" => $partnerData->statusPartner,
            "typeGarage" => $partnerData->typeGarage,
            "typeTechnicalControl" => $partnerData->typeTechnicalControl, 
            "mailPartner" => $partnerData->mailPartner,
            "nameBilling" => $partnerData->nameBilling,
            "siretPartner" => $partnerData->siretPartner,
            "numberAddressBilling" => $partnerData->numberAddressBilling,
            "typeAddressBilling" => $partnerData->typeAddressBilling,
            "nameAddressBilling" => $partnerData->nameAddressBilling,
            "complementAddressBilling" => $partnerData->complementAddressBilling,
            "zipAddressBilling" => $partnerData->zipAddressBilling,
            "cityAddressBilling" => $partnerData->cityAddressBilling,
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
        if (!empty($stmt)) {
            return $stmt->fetchAll();
        } else {
            return false;
        }
    }

    public function searchPartner($usernamePartner) {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE usernamePartner = :usernamePartner
        LIMIT 0,1";
        $stmt = $this->conn->prepare($query);
        $params = ["usernamePartner" => $usernamePartner];
        $stmt->execute($params);
        if (!empty($stmt)) {
            return $stmt->fetch();
        } else {
            return false;
        }
    }

    public function updatePartner() 
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

    public function passwordUpdate() 
    {
    //     $query = "
    //         UPDATE "
    //         . $this->table .
    //         " SET
    //         mixedPassword = :mixedPassword
    //         WHERE
    //         usernamePartner = :usernamePartner       
    //     ";
    //     $stmt = $this->conn->prepare($query);
    //     $params = [
    //         "usernamePartner" => $this->usernamePartner,
    //         "mixedPassword" => password_hash($this->newPassword, PASSWORD_DEFAULT),
    //     ];
    //     $stmt->execute($params); 
    //     return true;
    }


    public function deletePartner($usernamePartner) 
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