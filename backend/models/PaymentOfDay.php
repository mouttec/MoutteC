<?php
class PaymentOfDay {
    // Propriétés privées de connexion à la DB
    private $conn;
    private $table = "paymentOfDays";
    // Propriétés publiques de l'objet Post
    public $idPaymentOfDay;
    public $idCustomer;
    public $statusPaymentOfDay;
    public $idPartner;
    public $pricePaymentOfDay;
    public $datePaymentOfDay;
 
    // Constructeur : quand on instancie l'objet, on lui passe la connexion à la DB
    public function __construct($db) {
        $this->conn = $db;
    }
    // Récupérer la liste des posts
    public function readPaymentOfDay() {
        // création de la requête
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            ORDER BY
            datePaymentOfDay DESC";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // exécution de la requête
        $stmt->execute();
        // on retourne le résultat
        return $stmt;
    }
    // Récupérer un post
    public function readSinglePaymentOfDay() {
        // création de la requête
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idPaymentOfDay = :idPaymentOfDay
        LIMIT 0,1";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // tableau associatif qui lie :id à l'id reçue en paramètre
        $params = ["idPaymentOfDay" => $this->idPaymentOfDay];
        // excécution de la requête
        if($stmt->execute($params)) {
            // on récupère le résultat et on le stocke dans une variable (type: array)
            $row = $stmt->fetch();
    
            return $row;
        }
        return false;
    }
    // Créer un post
    public function createPaymentOfDay() {
        // On crée la requête
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            idCustomer = :idCustomer,
            statusPaymentOfDay = :statusPaymentOfDay,
            idPartner = :idPartner,
            pricePaymenetOfDay = :pricePaymenetOfDay
        ";
        // on prépare la requête
        $stmt = $this->conn->prepare($query);
        // On nettoie et sécurise les inputs
        // référence strip_tags(): https://www.php.net/manual/en/function.strip-tags.php
        // référence htmlspecialchars() : https://www.php.net/manual/en/function.htmlspecialchars.php 
        $this->idCustomer = htmlspecialchars(strip_tags($this->idCustomer));
        $this->statusPaymentOfDay = htmlspecialchars(strip_tags($this->statusPaymentOfDay));
        $this->idPartner = htmlspecialchars(strip_tags($this->idPartner));
        $this->pricePaymentOfDay = htmlspecialchars(strip_tags($this->pricePaymentOfDay));
        // tableau associatif pour lier les paramètres reçus à la requête
        $params = [
            "idCustomer" => $this->idCustomer,
            "statusPaymentOfDay" => $this->statusPaymentOfDay,
            "idPartner" => $this->idPartner,
            "pricePaymentOfDay" => $this->pricePaymentOfDay
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
        public function updatePaymentOfDay($idPaymentOfDay) {
            // On crée la requête
            $query = "
                UPDATE "
                . $this->table .
                " SET
                idCustomer = :idCustomer,
                statusPaymentOfDay = :statusPaymentOfDay,
                idPartner = :idPartner,
                pricePaymentOfDay = :pricePaymentOfDay
                WHERE
                idPaymentOfDay = :idPaymentOfDay       
            ";
    
            // on prépare la requête
            $stmt = $this->conn->prepare($query);
   
            // on nettoie et sécurise les inputs
            $this->idCustomer = htmlspecialchars(strip_tags($this->idCustomer));
            $this->statusPaymentOfDay = htmlspecialchars(strip_tags($this->statusPaymentOfDay));
            $this->idPartner = htmlspecialchars(strip_tags($this->idPartner));
            $this->pricePaymentOfDay = htmlspecialchars(strip_tags($this->pricePaymentOfDay));
            $this->idPaymentOfDay = htmlspecialchars(strip_tags($idPaymentOfDay));
    var_dump($this->username);
            // tableau associatif pour lier les paramètres reçus à la requête
            $params = [
                "idCustomer" => $this->idCustomer,
                "statusPaymentOfDay" => $this->statusPaymentOfDay,
                "idPartner" => $this->idPartner,
                "pricePaymentOfDay" => $this->pricePaymentOfDay,
                "idPaymentOfDay" => $this->idPaymentOfDay
            ];
    
            // on exécute la requête et on vérifie si elle s'est bien déroulée
            if($stmt->execute($params)) {
    
                // dans ce cas on retourne true
                return true;
            }
    
            // sinon on retourne false
    
            return false;
        }
        public function deletePaymentOfDay() {
            // On crée la requête
            $query = "
                DELETE
                FROM " . $this->table .
                " WHERE idPaymentOfDay = :idPaymentOfDay
            ";
            // on prépare la requête
            $stmt = $this->conn->prepare($query);
            // on nettoie et sécurise l'input
            $this->idPaymentOfDay = htmlspecialchars(strip_tags($this->idPaymentOfDay));
            // tableau associatif pour lier les paramètres reçus à la requête
            $params = ["idPaymentOfDay" => $this->idPaymentOfDay];
            // on exécute la requête et on vérifie si elle s'est bien déroulée
            if($stmt->execute($params)) {
                // dans ce cas on retourne true
                return true;
            }
            // sinon on retourne false
            return false;
            
        }
    
}