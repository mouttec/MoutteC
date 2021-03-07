<?php
class Manager {
    // Propriétés privées de connexion à la DB
    private $conn;
    private $table = "managers";
    // Propriétés publiques de l'objet Post
    public $idManager;
    public $firstNameManager;
    public $lastNameManager;
    public $usernameManager;
    public $mailManager;
    public $phoneManager;
    public $passwordManager;
    public $statusManager;
    public $dateManager;
    // Constructeur : quand on instancie l'objet, on lui passe la connexion à la DB
    public function __construct($db) {
        $this->conn = $db;
    }
    // Récupérer la liste des posts
    public function readManager() {
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
    public function readSingleManager() {
        // création de la requête
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idManager = :idManager
        LIMIT 0,1";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // tableau associatif qui lie :id à l'id reçue en paramètre
        $params = ["idManager" => $this->idManager];
        // excécution de la requête
        if($stmt->execute($params)) {
            // on récupère le résultat et on le stocke dans une variable (type: array)
            $row = $stmt->fetch();
    
            return $row;
        }
        return false;
    }
    // Créer un post
    public function createManager() {
        // On crée la requête
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            firstNameManager = :firstNameManager,
            lastNameManager = :lastNameManager,
            usernameManager = :usernameManager,
            mailManager = :mailManager,
            phoneManager = :phoneManager,        
            passwordManager = :passwordManager,
            statusManager = :statusManager,
        ";
        // on prépare la requête
        $stmt = $this->conn->prepare($query);
        // On nettoie et sécurise les inputs
        // référence strip_tags(): https://www.php.net/manual/en/function.strip-tags.php
        // référence htmlspecialchars() : https://www.php.net/manual/en/function.htmlspecialchars.php 
        $this->firstNameManager = htmlspecialchars(strip_tags($this->firstNameManager));
        $this->lastNameManager = htmlspecialchars(strip_tags($this->lastNameManager));
        $this->usernameManager = htmlspecialchars(strip_tags($this->usernameManager));
        $this->mailManager = htmlspecialchars(strip_tags($this->mailManager));
        $this->phoneManager = htmlspecialchars(strip_tags($this->phoneManager));
        $this->passwordManager = htmlspecialchars(strip_tags($this->passwordManager));
        $this->statusManager = htmlspecialchars(strip_tags($this->statusManager));
        // tableau associatif pour lier les paramètres reçus à la requête
        $params = [
            "firstNameManager" => $this->firstNameManager,
            "lastNameManager" => $this->lastNameManager,
            "usernameManager" => $this->usernameManager,
            "mailManager" => $this->mailManager,
            "phoneManager" => $this->phoneManager,
            "passwordManager" => $this->passwordManager,
            "statusManager" => $this->statusManager
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
    public function updateManager($idManager) {
        // On crée la requête
        $query = "
            UPDATE "
            . $this->table .
            " SET
            firstNameManager = :firstNameManager,
            lastNameManager = :lastNameManager,
            usernameManager = :usernameManager,
            mailManager = :mailManager,
            phoneManager = :phoneManager,        
            passwordManager = :passwordManager,
            statusManager = :statusManager
            WHERE
            idManager = :idManager       
        ";

        // on prépare la requête
        $stmt = $this->conn->prepare($query);

        // on nettoie et sécurise les inputs
        $this->firstNameManager = htmlspecialchars(strip_tags($this->firstNameManager));
        $this->lastNameManager = htmlspecialchars(strip_tags($this->lastNameManager));
        $this->usernameManager = htmlspecialchars(strip_tags($this->usernameManager));
        $this->mailManager = htmlspecialchars(strip_tags($this->mailManager));
        $this->phoneManager = htmlspecialchars(strip_tags($this->phoneManager));
        $this->passwordManager = htmlspecialchars(strip_tags($this->passwordManager));
        $this->statusManager = htmlspecialchars(strip_tags($this->statusManager));
        $this->idManager = htmlspecialchars(strip_tags($idManager));
        var_dump($this->username);
        // tableau associatif pour lier les paramètres reçus à la requête
        $params = [
            "firstNameManager" => $this->firstNameManager,
            "lastNameManager" => $this->lastNameManager,
            "usernameManager" => $this->usernameManager,
            "mailManager" => $this->mailManager,
            "phoneManager" => $this->phoneManager,
            "passwordManager" => $this->passwordManager,
            "statusManager" => $this->statusManager,
            "idManager" => $this->idManager
        ];

        // on exécute la requête et on vérifie si elle s'est bien déroulée
        if($stmt->execute($params)) {

            // dans ce cas on retourne true
            return true;
        }

        // sinon on retourne false

        return false;
    }
    public function deleteManager() {
        // On crée la requête
        $query = "
            DELETE
            FROM " . $this->table .
            " WHERE idManager = :idManager
        ";
        // on prépare la requête
        $stmt = $this->conn->prepare($query);
        // on nettoie et sécurise l'input
        $this->idManager = htmlspecialchars(strip_tags($this->idManager));
        // tableau associatif pour lier les paramètres reçus à la requête
        $params = ["idManager" => $this->idManager];
        // on exécute la requête et on vérifie si elle s'est bien déroulée
        if($stmt->execute($params)) {
            // dans ce cas on retourne true
            return true;
        }
        // sinon on retourne false
        return false;
        
    }
    
}