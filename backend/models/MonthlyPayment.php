<?php
class MonthlyPayment {
    // Propriétés privées de connexion à la DB
    private $conn;
    private $table = "monthlyPayment";
    // Propriétés publiques de l'objet Post
    public $idMonthlyPayment;
    public $idPartner;
    public $statusMonthlyPayment;
    public $monthMonthlyPayment;
    public $urlMonthlyPayment;
    public $dateMonthlyPayment;
 
    // Constructeur : quand on instancie l'objet, on lui passe la connexion à la DB
    public function __construct($db) {
        $this->conn = $db;
    }
    // Récupérer la liste des posts
    public function readMonthlyPayment() {
        // création de la requête
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            ORDER BY
            dateMonthlyPayment DESC";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // exécution de la requête
        $stmt->execute();
        // on retourne le résultat
        return $stmt;
    }
    // Récupérer un post
    public function readSingleMonthlyPayment() {
        // création de la requête
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idMonthlyPayment = :idMonthlyPayment
        LIMIT 0,1";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // tableau associatif qui lie :id à l'id reçue en paramètre
        $params = ["idMonthlyPayment" => $this->idMonthlyPayment];
        // excécution de la requête
        if($stmt->execute($params)) {
            // on récupère le résultat et on le stocke dans une variable (type: array)
            $row = $stmt->fetch();
    
            return $row;
        }
        return false;
    }
    // Créer un post
    public function createMonthlyPayment() {
        // On crée la requête
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            idPartner = :idPartner,
            statusMonthlyPayment = :statusMonthlyPayment,
            monthMonthlyPayment = :monthMonthlyPayment,
            urlMonthlyPayment = :urlMonthlyPayment
        ";
        // on prépare la requête
        $stmt = $this->conn->prepare($query);
        // On nettoie et sécurise les inputs
        // référence strip_tags(): https://www.php.net/manual/en/function.strip-tags.php
        // référence htmlspecialchars() : https://www.php.net/manual/en/function.htmlspecialchars.php 
        $this->idPartner = htmlspecialchars(strip_tags($this->idPartner));
        $this->statusMonthlyPayment = htmlspecialchars(strip_tags($this->statusMonthlyPayment));
        $this->monthMonthlyPayment = htmlspecialchars(strip_tags($this->monthMonthlyPayment));
        $this->urlMonthlyPayment = htmlspecialchars(strip_tags($this->urlMonthlyPayment));
        // tableau associatif pour lier les paramètres reçus à la requête
        $params = [
            "idPartner" => $this->idPartner,
            "statusMonthlyPayment" => $this->statusMonthlyPayment,
            "monthMonthlyPayment" => $this->monthMonthlyPayment,
            "urlMonthlyPayment" => $this->urlMonthlyPayment
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
        public function updateMonthlyPayment($idMonthlyPayment) {
            // On crée la requête
            $query = "
                UPDATE "
                . $this->table .
                " SET
                idPartner = :idPartner,
                statusMonthlyPayment = :statusMonthlyPayment,
                monthMonthlyPayment = :monthMonthlyPayment,
                urlmonthlyPayment = :urlmonthlyPayment
                WHERE
                idMonthlyPayment = :idMonthlyPayment       
            ";
    
            // on prépare la requête
            $stmt = $this->conn->prepare($query);
   
            // on nettoie et sécurise les inputs
            $this->idPartner = htmlspecialchars(strip_tags($this->idPartner));
            $this->statusMonthlyPayment = htmlspecialchars(strip_tags($this->statusMonthlyPayment));
            $this->monthMonthlyPayment = htmlspecialchars(strip_tags($this->monthMonthlyPayment));
            $this->urlMonthlyPayment = htmlspecialchars(strip_tags($this->urlMonthlyPayment));
            $this->idMonthlyPayment = htmlspecialchars(strip_tags($idMonthlyPayment));
    var_dump($this->urlMonthlyPayment);
            // tableau associatif pour lier les paramètres reçus à la requête
            $params = [
                "idPartner" => $this->idPartner,
                "statusMonthlyPayment" => $this->statusMonthlyPayment,
                "monthMonthlyPayment" => $this->monthMonthlyPayment,
                "urlMonthlyPayment" => $this->urlMonthlyPayment,
                "idMonthlyPayment" => $this->idMonthlyPayment
            ];
    
            // on exécute la requête et on vérifie si elle s'est bien déroulée
            if($stmt->execute($params)) {
    
                // dans ce cas on retourne true
                return true;
            }
    
            // sinon on retourne false
    
            return false;
        }
        public function deleteMonthlyPayment() {
            // On crée la requête
            $query = "
                DELETE
                FROM " . $this->table .
                " WHERE idMonthlyPayment = :idMonthlyPayment
            ";
            // on prépare la requête
            $stmt = $this->conn->prepare($query);
            // on nettoie et sécurise l'input
            $this->idMonthlyPayment = htmlspecialchars(strip_tags($this->idMonthlyPayment));
            // tableau associatif pour lier les paramètres reçus à la requête
            $params = ["idMonthlyPayment" => $this->idMonthlyPayment];
            // on exécute la requête et on vérifie si elle s'est bien déroulée
            if($stmt->execute($params)) {
                // dans ce cas on retourne true
                return true;
            }
            // sinon on retourne false
            return false;
            
        }
    
}