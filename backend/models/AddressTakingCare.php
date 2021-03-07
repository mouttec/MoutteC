<?php
class AddressTakingCare {
    // Propriétés privées de connexion à la DB
    private $conn;
    private $table = "addressTakingCares";
    // Propriétés publiques de l'objet Post
    public $idAddressTakingCare;
    public $idCustomer;
    public $numberTakingCare;
    public $typeTakingCare;
    public $nameTakingCare;
    public $complementTakingCare;
    public $zipTakingCare;
    public $cityTakingCare;
    // Constructeur : quand on instancie l'objet, on lui passe la connexion à la DB

    public function __construct($db) {
        $this->conn = $db;
    }

    // Récupérer la liste des posts
    public function readAddressTakingCare() {
        // création de la requête
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            ORDER BY
            dateManager DESC";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // exécution de la requête
        $stmt->execute();
        // on retourne le résultat
        return $stmt;
    }
    // Récupérer un post
    public function readSingleAddressTakingCare() {
        // création de la requête
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idAddressTakingCare = :idAddressTakingCare
        LIMIT 0,1";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // tableau associatif qui lie :id à l'id reçue en paramètre
        $params = ["idAddressTakingCare" => $this->idAddressTakingCare];
        // excécution de la requête
        if($stmt->execute($params)) {
            // on récupère le résultat et on le stocke dans une variable (type: array)
            $row = $stmt->fetch();
    
            return $row;
        }
        return false;
    }

    public function readAddressTakingCareFunctionCustomer() {
        // création de la requête
        $query = "
        SELECT *
        FROM addressTakingCares, customers
        WHERE idAddressTakingCare.addressTakingCares = idAddressTakingCare.customers";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // tableau associatif qui lie :id à l'id reçue en paramètre
        $params = ["idAddressTakingCare" => $this->idAddressTakingCare];
        // excécution de la requête
        if($stmt->execute($params)) {
            // on récupère le résultat et on le stocke dans une variable (type: array)
            $row = $stmt->fetch();
    
            return $row;
        }
        return false;
    }

    public function readAddressTakingCareFunctionBooking() {
        // création de la requête
        $query = "
        SELECT *
        FROM addressTakingCares, bookings
        WHERE idAddressTakingCare.addressTakingCares = idAddressTakingCare.bookings";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // tableau associatif qui lie :id à l'id reçue en paramètre
        $params = ["idAddressTakingCare" => $this->idAddressTakingCare];
        // excécution de la requête
        if($stmt->execute($params)) {
            // on récupère le résultat et on le stocke dans une variable (type: array)
            $row = $stmt->fetch();
    
            return $row;
        }
        return false;
    }
    // Créer un post
    public function createAddressTakingCare() {
        // On crée la requête
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            idCustomer = :idCustomer,
            numberTakingCare = :numberTakingCare,
            typeTakingCare = :typeTakingCare,
            nameTakingCare = :nameTakingCare,
            complementTakingCare = :complementTakingCare,        
            zipTakingCare = :zipTakingCare,
            cityTakingCare = :cityTakingCare
        ";
        // on prépare la requête
        $stmt = $this->conn->prepare($query);
        // On nettoie et sécurise les inputs
        // référence strip_tags(): https://www.php.net/manual/en/function.strip-tags.php
        // référence htmlspecialchars() : https://www.php.net/manual/en/function.htmlspecialchars.php 
        $this->idCustomer = htmlspecialchars(strip_tags($this->idCustomer));
        $this->numberTakingCare = htmlspecialchars(strip_tags($this->numberTakingCare));
        $this->typeTakingCare = htmlspecialchars(strip_tags($this->typeTakingCare));
        $this->nameTakingCare = htmlspecialchars(strip_tags($this->nameTakingCare));
        $this->complementTakingCare = htmlspecialchars(strip_tags($this->complementTakingCare));
        $this->zipTakingCare = htmlspecialchars(strip_tags($this->zipTakingCare));
        $this->cityTakingCare = htmlspecialchars(strip_tags($this->cityTakingCare));
        // tableau associatif pour lier les paramètres reçus à la requête
        $params = [
            "idCustomer" => $this->idCustomer,
            "numberTakingCare" => $this->numberTakingCare,
            "typeTakingCare" => $this->typeTakingCare,
            "nameTakingCare" => $this->nameTakingCare,
            "complementTakingCare" => $this->complementTakingCare,
            "zipTakingCare" => $this->zipTakingCare,
            "cityTakingCare" => $this->cityTakingCare
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
        public function updateAddressTakingCare($idAddressTakingCare) {
            // On crée la requête
            $query = "
                UPDATE "
                . $this->table .
                " SET
                idCustomer = :idCustomer,
                numberTakingCare = :numberTakingCare,
                typeTakingCare = :typeTakingCare,
                nameTakingCare = :nameTakingCare,
                complementTakingCare = :complementTakingCare,        
                zipTakingCare = :zipTakingCare,
                cityTakingCare = :cityTakingCare
                WHERE
                idAddressTakingCare = :idAddressTakingCare       
            ";
    
            // on prépare la requête
            $stmt = $this->conn->prepare($query);
   
            // on nettoie et sécurise les inputs
            $this->idCustomer = htmlspecialchars(strip_tags($this->idCustomer));
            $this->numberTakingCare = htmlspecialchars(strip_tags($this->numberTakingCare));
            $this->typeTakingCare = htmlspecialchars(strip_tags($this->typeTakingCare));
            $this->nameTakingCare = htmlspecialchars(strip_tags($this->nameTakingCare));
            $this->complementTakingCare = htmlspecialchars(strip_tags($this->complementTakingCare));
            $this->zipTakingCare = htmlspecialchars(strip_tags($this->zipTakingCare));
            $this->cityTakingCare = htmlspecialchars(strip_tags($this->cityTakingCare));
            $this->idAddressTakingCare = htmlspecialchars(strip_tags($idAddressTakingCare));
    var_dump($this->nameTakingCare);
            // tableau associatif pour lier les paramètres reçus à la requête
            $params = [
                "idCustomer" => $this->idCustomer,
                "numberTakingCare" => $this->numberTakingCare,
                "typeTakingCare" => $this->typeTakingCare,
                "nameTakingCare" => $this->nameTakingCare,
                "complementTakingCare" => $this->complementTakingCare,
                "zipTakingCare" => $this->zipTakingCare,
                "cityTakingCare" => $this->cityTakingCare,
                "idAddressTakingCare" => $this->idAddressTakingCare
            ];
    
            // on exécute la requête et on vérifie si elle s'est bien déroulée
            if($stmt->execute($params)) {
    
                // dans ce cas on retourne true
                return true;
            }
    
            // sinon on retourne false
    
            return false;
        }
        public function deleteAddressTakingCare() {
            // On crée la requête
            $query = "
                DELETE
                FROM " . $this->table .
                " WHERE idAddressTakingCare = :idAddressTakingCare
            ";
            // on prépare la requête
            $stmt = $this->conn->prepare($query);
            // on nettoie et sécurise l'input
            $this->idAddressTakingCare = htmlspecialchars(strip_tags($this->idAddressTakingCare));
            // tableau associatif pour lier les paramètres reçus à la requête
            $params = ["idAddressTakingCare" => $this->idAddressTakingCare];
            // on exécute la requête et on vérifie si elle s'est bien déroulée
            if($stmt->execute($params)) {
                // dans ce cas on retourne true
                return true;
            }
            // sinon on retourne false
            return false;
            
        }
    
}