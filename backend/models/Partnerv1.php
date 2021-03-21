<?php
class Partner {
    // Propriétés privées de connexion à la DB
    private $conn;
    private $table = "partners";
    // Propriétés publiques de l'objet Post
    public $idPartner;
    public $usernamePartner;
    public $namePartner;
    public $numberAddressPartner;
    public $typeAddressPartner;
    public $nameAddressPartner;
    public $complementAddressPartner;
    public $zipAddressPartner;
    public $cityAddressPartner;
    public $phonePartner;
    public $statusPartner;
    public $typePartner;
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
    public function __construct($db) {
        $this->conn = $db;
    }
    // Récupérer la liste des partners
    public function listPartners() {
        // création de la requête
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            ORDER BY
            idPartner";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // exécution de la requête
        $stmt->execute();
        // on retourne le résultat
        return $stmt;
    }
    // Rechercher un partner
    public function searchPartner($usernamePartner) {
        // création de la requête
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE usernamePartner = :usernamePartner
        LIMIT 0,1";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // tableau associatif qui lie :siretPartner au siret reçue en paramètre
        $params = ["usernamePartner" => $usernamePartner];
        // excécution de la requête
        if($stmt->execute($params)) {
            // on récupère le résultat et on le stocke dans une variable (type: array)
            $row = $stmt->fetch();
            return $row;
        }
        return false;
    }
    // Créer un partner
    public function createPartner() {
        // On crée la requête
        $query = "
            INSERT INTO "
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
            typePartner = :typePartner,
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
        // On nettoie et sécurise les inputs
        // référence strip_tags(): https://www.php.net/manual/en/function.strip-tags.php
        // référence htmlspecialchars() : https://www.php.net/manual/en/function.htmlspecialchars.php 
        // $this->usernamePartner = htmlspecialchars(strip_tags($this->usernamePartner));
        // $this->namePartner = htmlspecialchars(strip_tags($this->namePartner));
        // $this->numberAddressPartner = htmlspecialchars(strip_tags($this->numberAddressPartner));
        // $this->typeAddressPartner = htmlspecialchars(strip_tags($this->typeAddressPartner));
        // $this->nameAddressPartner = htmlspecialchars(strip_tags($this->nameAddressPartner));
        // $this->complementAddressPartner = htmlspecialchars(strip_tags($this->complementAddressPartner));
        // $this->zipAddressPartner = htmlspecialchars(strip_tags($this->zipAddressPartner));
        // $this->cityAddressPartner = htmlspecialchars(strip_tags($this->cityAddressPartner));
        // $this->phonePartner = htmlspecialchars(strip_tags($this->phonePartner));
        // $this->statusPartner = htmlspecialchars(strip_tags($this->statusPartner));
        // $this->typePartner = htmlspecialchars(strip_tags($this->typePartner));
        // $this->mailPartner = htmlspecialchars(strip_tags($this->mailPartner));
        // $this->nameBilling = htmlspecialchars(strip_tags($this->nameBilling));
        // $this->siretPartner = htmlspecialchars(strip_tags($this->siretPartner));
        // $this->numberAddressBilling = htmlspecialchars(strip_tags($this->numberAddressBilling));
        // $this->typeAddressBilling = htmlspecialchars(strip_tags($this->typeAddressBilling));
        // $this->nameAddressBilling = htmlspecialchars(strip_tags($this->nameAddressBilling));
        // $this->complementAddressBilling = htmlspecialchars(strip_tags($this->complementAddressBilling));
        // $this->zipAddressBilling = htmlspecialchars(strip_tags($this->zipAddressBilling));
        // $this->cityAddressBilling = htmlspecialchars(strip_tags($this->cityAddressBilling));
        // tableau associatif pour lier les paramètres reçus à la requête
        $params = [
            "usernamePartner" => $this->usernamePartner,
            "namePartner" => $this->namePartner,
            "numberAddressPartner" => $this->numberAddressPartner,
            "typeAddressPartner" => $this->typeAddressPartner,
            "nameAddressPartner" => $this->nameAddressPartner,
            "complementAddressPartner" => $this->complementAddressPartner,
            "zipAddressPartner" => $this->zipAddressPartner,
            "cityAddressPartner" => $this->cityAddressPartner,
            "phonePartner" => $this->phonePartner,
            "statusPartner" => $this->statusPartner,
            "typePartner" => $this->typePartner,
            "mailPartner" => $this->mailPartner,
            "nameBilling" => $this->nameBilling,
            "siretPartner" => $this->siretPartner,
            "numberAddressBilling" => $this->numberAddressBilling,
            "typeAddressBilling" => $this->typeAddressBilling,
            "nameAddressBilling" => $this->nameAddressBilling,
            "complementAddressBilling" => $this->complementAddressBilling,
            "zipAddressBilling" => $this->zipAddressBilling,
            "cityAddressBilling" => $this->cityAddressBilling,
        ];
        // on exécute la requête et on vérifie si elle s'est bien déroulée 
        if($stmt->execute($params)) {
            // Dans ce cas on retourne true
            return true;
        }
        // sinon on retourne false
        return false;
    }
        // Modifier un post
        public function updatePartner($partner) {
            // On crée la requête
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
                typePartner = :typePartner,
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
    
            // on prépare la requête
            $stmt = $this->conn->prepare($query);
   
            // on nettoie et sécurise les inputs
            // $this->usernamePartner = htmlspecialchars(strip_tags($this->usernamePartner));
            // $this->namePartner = htmlspecialchars(strip_tags($this->namePartner));
            // $this->numberAddressPartner = htmlspecialchars(strip_tags($this->numberAddressPartner));
            // $this->typeAddressPartner = htmlspecialchars(strip_tags($this->typeAddressPartner));
            // $this->nameAddressPartner = htmlspecialchars(strip_tags($this->nameAddressPartner));
            // $this->complementAddressPartner = htmlspecialchars(strip_tags($this->complementAddressPartner));
            // $this->zipAddressPartner = htmlspecialchars(strip_tags($this->zipAddressPartner));
            // $this->cityAddressPartner = htmlspecialchars(strip_tags($this->cityAddressPartner));
            // $this->phonePartner = htmlspecialchars(strip_tags($this->phonePartner));
            // $this->statusPartner = htmlspecialchars(strip_tags($this->statusPartner));
            // $this->typePartner = htmlspecialchars(strip_tags($this->typePartner));
            // $this->mailPartner = htmlspecialchars(strip_tags($this->mailPartner));
            // $this->nameBilling = htmlspecialchars(strip_tags($this->nameBilling));
            // $this->siretPartner = htmlspecialchars(strip_tags($this->siretPartner));
            // $this->numberAddressBilling = htmlspecialchars(strip_tags($this->numberAddressBilling));
            // $this->typeAddressBilling = htmlspecialchars(strip_tags($this->typeAddressBilling));
            // $this->nameAddressBilling = htmlspecialchars(strip_tags($this->nameAddressBilling));
            // $this->complementAddressBilling = htmlspecialchars(strip_tags($this->complementAddressBilling));
            // $this->zipAddressBilling = htmlspecialchars(strip_tags($this->zipAddressBilling));
            // $this->cityAddressBilling = htmlspecialchars(strip_tags($this->cityAddressBilling));
            // $this->idPartner = htmlspecialchars(strip_tags($idPartner));
            //var_dump($this->namePartner);
            // tableau associatif pour lier les paramètres reçus à la requête
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
                "typePartner" => $this->typePartner,
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
    
            // on exécute la requête et on vérifie si elle s'est bien déroulée
            if($stmt->execute($params)) {
    
                // dans ce cas on retourne true
                return true;
            }
    
            // sinon on retourne false
    
            return false;
        }
        public function deletePartner($usernamePartner) {
            // On crée la requête
            $query = "
                DELETE
                FROM " . $this->table .
                " WHERE usernamePartner = :usernamePartner
            ";
            // on prépare la requête
            $stmt = $this->conn->prepare($query);
            // on nettoie et sécurise l'input
            // $this->usernamePartner = htmlspecialchars(strip_tags($usernamePartner));
            // tableau associatif pour lier les paramètres reçus à la requête
            $params = ["usernamePartner" => $this->usernamePartner];
            // on exécute la requête et on vérifie si elle s'est bien déroulée
            if($stmt->execute($params)) {
                // dans ce cas on retourne true
                return true;
            }
            // sinon on retourne false
            return false;
            
        }
    
}