<?php
class Bokking {
    // Propriétés privées de connexion à la DB
    private $conn;
    private $table = "bookings";
    // Propriétés publiques de l'objet Post
    public $idBooking;
    public $idCustomer;
    public $idPartner;
    public $hoursBooking;
    public $dateBooking;
    public $statusBooking;
    public $idCar;
    public $idAddressTakingCare;
    public $idAddressReturn;
    // Constructeur : quand on instancie l'objet, on lui passe la connexion à la DB
    public function __construct($db) {
        $this->conn = $db;
    }
    // Récupérer la liste des posts
    public function readBooking() {
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
    public function readSingleBooking() {
        // création de la requête
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idBooking = :idBooking
        LIMIT 0,1";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // tableau associatif qui lie :id à l'id reçue en paramètre
        $params = ["idBooking" => $this->idBooking];
        // excécution de la requête
        if($stmt->execute($params)) {
            // on récupère le résultat et on le stocke dans une variable (type: array)
            $row = $stmt->fetch();
    
            return $row;
        }
        return false;
    }

    public function readBookingFunctionPartner() {
        // création de la requête
        $query = "
        SELECT *
        FROM bookings, partners
        WHERE idPartner.bookings = idPartner.partners";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // tableau associatif qui lie :id à l'id reçue en paramètre
        $params = ["idBooking" => $this->idBooking];
        // excécution de la requête
        if($stmt->execute($params)) {
            // on récupère le résultat et on le stocke dans une variable (type: array)
            $row = $stmt->fetch();
    
            return $row;
        }
        return false;
    }

    public function readBookingFunctionCustomer() {
        // création de la requête
        $query = "
        SELECT *
        FROM bookings, customers
        WHERE idCustomer.bookings = idCustomer.customers";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // tableau associatif qui lie :id à l'id reçue en paramètre
        $params = ["idBooking" => $this->idBooking];
        // excécution de la requête
        if($stmt->execute($params)) {
            // on récupère le résultat et on le stocke dans une variable (type: array)
            $row = $stmt->fetch();
    
            return $row;
        }
        return false;
    }
    // Créer un post
    public function createBooking() {
        // On crée la requête
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            idCustomer = :idCustomer,
            idPartner = :idPartner,
            hoursBooking = :hoursBooking,
            dateBooking = :dateBooking,
            statusBooking = :statusBooking,        
            idCar = :idCar,
            idAddressTakingCare = :idAddressTakingCare,
            idAddressReturn = :idAddresReturn
        ";
        // on prépare la requête
        $stmt = $this->conn->prepare($query);
        // On nettoie et sécurise les inputs
        // référence strip_tags(): https://www.php.net/manual/en/function.strip-tags.php
        // référence htmlspecialchars() : https://www.php.net/manual/en/function.htmlspecialchars.php 
        $this->idCustomer = htmlspecialchars(strip_tags($this->idCustomer));
        $this->idPartner = htmlspecialchars(strip_tags($this->idPartner));
        $this->hoursBooking = htmlspecialchars(strip_tags($this->hoursBooking));
        $this->dateBooking = htmlspecialchars(strip_tags($this->dateBooking));
        $this->statusBooking = htmlspecialchars(strip_tags($this->statusBooking));
        $this->idCar = htmlspecialchars(strip_tags($this->idCar));
        $this->idAddressTakingCare = htmlspecialchars(strip_tags($this->idAddressTakingCare));
        $this->idAddressReturn = htmlspecialchars(strip_tags($this->idAddressReturn));
        // tableau associatif pour lier les paramètres reçus à la requête
        $params = [
            "idCustomer" => $this->idCustomer,
            "idPartner" => $this->idPartner,
            "hoursBooking" => $this->hoursBooking,
            "dateBooking" => $this->dateBooking,
            "statusBooking" => $this->statusBooking,
            "idCar" => $this->idCar,
            "idAddressTakingCare" => $this->idAddressTakingCare,
            "idAddressReturn" => $this->idAddressReturn
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
        public function updateBooking($idBooking) {
            // On crée la requête
            $query = "
                UPDATE "
                . $this->table .
                " SET
                idCustomer = :idCustomer,
                idPartner = :idPartner,
                hoursBooking = :hoursBooking,
                dateBooking = :dateBooking,
                statusBooking = :statusBooking,        
                idCar = :idCar,
                idAddressTakingCare = :idAddressTakingCare,
                idAddressReturn = :idAddresReturn
                WHERE
                idBooking = :idBooking       
            ";
    
            // on prépare la requête
            $stmt = $this->conn->prepare($query);
   
            // on nettoie et sécurise les inputs
            $this->idCustomer = htmlspecialchars(strip_tags($this->idCustomer));
            $this->idPartner = htmlspecialchars(strip_tags($this->idPartner));
            $this->hoursBooking = htmlspecialchars(strip_tags($this->hoursBooking));
            $this->dateBooking = htmlspecialchars(strip_tags($this->dateBooking));
            $this->statusBooking = htmlspecialchars(strip_tags($this->statusBooking));
            $this->idCar = htmlspecialchars(strip_tags($this->idCar));
            $this->idAddressTakingCare = htmlspecialchars(strip_tags($this->idAddressTakingCare));
            $this->idAddressReturn = htmlspecialchars(strip_tags($this->idAddressReturn));
            $this->idBooking = htmlspecialchars(strip_tags($idBooking));
    var_dump($this->hoursBooking);
            // tableau associatif pour lier les paramètres reçus à la requête
            $params = [
                "idCustomer" => $this->idCustomer,
                "idPartner" => $this->idPartner,
                "hoursBooking" => $this->hoursBooking,
                "dateBooking" => $this->dateBooking,
                "statusBooking" => $this->statusBooking,
                "idCar" => $this->idCar,
                "idAddressTakingCare" => $this->idAddressTakingCare,
                "idAddressReturn" => $this->idAddressReturn
            ];
    
            // on exécute la requête et on vérifie si elle s'est bien déroulée
            if($stmt->execute($params)) {
    
                // dans ce cas on retourne true
                return true;
            }
    
            // sinon on retourne false
    
            return false;
        }
        public function deleteBooking() {
            // On crée la requête
            $query = "
                DELETE
                FROM " . $this->table .
                " WHERE idBooking = :idBooking
            ";
            // on prépare la requête
            $stmt = $this->conn->prepare($query);
            // on nettoie et sécurise l'input
            $this->idBooking = htmlspecialchars(strip_tags($this->idBooking));
            // tableau associatif pour lier les paramètres reçus à la requête
            $params = ["idBooking" => $this->idBooking];
            // on exécute la requête et on vérifie si elle s'est bien déroulée
            if($stmt->execute($params)) {
                // dans ce cas on retourne true
                return true;
            }
            // sinon on retourne false
            return false;
            
        }
    
}