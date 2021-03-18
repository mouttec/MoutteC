<?php
class Teammate {
    // Propriétés privées de connexion à la DB
    private $conn;
    private $table = "teammates";
    // Propriétés publiques de l'objet Post
    public $idTeammate;
    public $firstNameTeammate;
    public $lastNameTeammate;
    public $usernameTeammate;
    public $mailTeammate;
    public $phoneTeammate;
    public $mixedPassword;
    public $statusTeammate;
    public $teamManager;
    public $superAdmin;
    public $dateTeammate;

    // Constructeur : quand on instancie l'objet, on lui passe la connexion à la DB
    public function __construct($db) {
        $this->conn = $db;
    }
    
    // Créer un teammate
    public function createTeammate($teammateData) 
    {
        // On crée la requête
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            firstNameTeammate = :firstNameTeammate,
            lastNameTeammate = :lastNameTeammate,
            usernameTeammate = :usernameTeammate,
            mailTeammate = :mailTeammate,
            phoneTeammate = :phoneTeammate,        
            mixedPassword = :mixedPassword,
            statusTeammate = :statusTeammate,
            teamManager = :teamManager,
            superAdmin = :superAdmin,
        ";
        // on prépare la requête
        $stmt = $this->conn->prepare($query);
        // On nettoie et sécurise les inputs
        // référence strip_tags(): https://www.php.net/manual/en/function.strip-tags.php
        // référence htmlspecialchars() : https://www.php.net/manual/en/function.htmlspecialchars.php 
        // $this->firstNameTeammate = htmlspecialchars(strip_tags($this->firstNameTeammate));
        // $this->lastNameTeammate = htmlspecialchars(strip_tags($this->lastNameTeammate));
        // $this->usernameTeammate = htmlspecialchars(strip_tags($this->usernameTeammate));
        // $this->mailTeammate = htmlspecialchars(strip_tags($this->mailTeammate));
        // $this->phoneTeammate = htmlspecialchars(strip_tags($this->phoneTeammate));
        $mixedPassword = password_hash($this->passwordTeammate, PASSWORD_DEFAULT);
        // $this->statusTeammate = htmlspecialchars(strip_tags($this->statusTeammate));
        // $this->teamManager = htmlspecialchars(strip_tags($this->teamManager));
        // $this->superAdmin = htmlspecialchars(strip_tags($this->superAdmin));
        // tableau associatif pour lier les paramètres reçus à la requête
        $params = [
            "firstNameTeammate" => $this->firstNameTeammate,
            "lastNameTeammate" => $this->lastNameTeammate,
            "usernameTeammate" => $this->usernameTeammate,
            "mailTeammate" => $this->mailTeammate,
            "phoneTeammate" => $this->phoneTeammate,
            "mixedPassword" => $mixedPassword,
            "statusTeammate" => $this->statusTeammate,
            "teamManager" => $this->teamManager,
            "superAdmin" => $this->superAdmin,
        ];
        // on exécute la requête et on vérifie si elle s'est bien déroulée 
        $stmt->execute($params) : return true ? return false;
    }
    // Récupérer la liste des teammates
    public function listTeammates() 
    {
        // création de la requête
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            ORDER BY
            dateTeammate DESC";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // exécution de la requête
        $stmt->execute() : return $stmt ? return false;

    }
    // Chercher un teammate
    public function searchTeammate($usernameTeammate) 
    {
        // création de la requête
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE usernameTeammate = :usernameTeammate
        LIMIT 0,1";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // tableau associatif qui lie :mail à mail reçu en paramètre
        $params = ["usernameTeammate" => $this->usernameTeammate];
        // excécution de la requête
        $stmt->execute($params) : return $stmt->fetch() ? return false;
    }

        // Editer un teammate
    public function updateTeammate() 
    {
        // On crée la requête
        $query = "
            UPDATE "
            . $this->table .
            " SET
            firstNameTeammate = :firstNameTeammate,
            lastNameTeammate = :lastNameTeammate,
            usernameTeammate = :usernameTeammate,
            mailTeammate = :mailTeammate,
            phoneTeammate = :phoneTeammate,        
            statusTeammate = :statusTeammate,
            teamManager = :teamManager,
            superAdmin = :superAdmin
            WHERE
            idTeammate = :idTeammate       
        ";

        // on prépare la requête
        $stmt = $this->conn->prepare($query);

        // on nettoie et sécurise les inputs
        // $this->firstNameTeammate = htmlspecialchars(strip_tags($this->firstNameTeammate));
        // $this->lastNameTeammate = htmlspecialchars(strip_tags($this->lastNameTeammate));
        // $this->usernameTeammate = htmlspecialchars(strip_tags($this->usernameTeammate));
        // $this->mailTeammate = htmlspecialchars(strip_tags($this->mailTeammate));
        // $this->phoneTeammate = htmlspecialchars(strip_tags($this->phoneTeammate));
        // $this->mixedPassword = password_hash(/*htmlspecialchars(strip_tags(*/$this->passwordTeammate/*))*/, PASSWORD_DEFAULT);
        // $this->statusTeammate = htmlspecialchars(strip_tags($this->statusTeammate));
        // $this->teamManager = htmlspecialchars(strip_tags($this->teamManager));
        // $this->superAdmin = htmlspecialchars(strip_tags($this->superAdmin)); 
        // $this->idTeammate = htmlspecialchars(strip_tags($this->$idTeammate));
        // tableau associatif pour lier les paramètres reçus à la requête
        $params = [
            "firstNameTeammate" => $this->firstNameTeammate,
            "lastNameTeammate" => $this->lastNameTeammate,
            "usernameTeammate" => $this->usernameTeammate,
            "mailTeammate" => $this->mailTeammate,
            "phoneTeammate" => $this->phoneTeammate,
            // "mixedPassword" => $this->mixedPassword,
            "statusTeammate" => $this->statusTeammate,
            "teamManager" => $this->teamManager,
            "superAdmin" => $this->superAdmin,
            "idTeammate" => $this->idTeammate,
        ];

        // on exécute la requête et on vérifie si elle s'est bien déroulée
        $stmt->execute($params) : return true ? return false;
    }

    public function passwordUpdate() {
                // On crée la requête
        $query = "
            UPDATE "
            . $this->table .
            " SET
            mixedPassword = :mixedPassword
            WHERE
            usernameTeammate = :usernameTeammate       
        ";

        // on prépare la requête
        $stmt = $this->conn->prepare($query);
        $params = [
            "usernameTeammate" => $this->usernameTeammate,
            "mixedPassword" => password_hash($this->newPassword, PASSWORD_DEFAULT),
        ];

        // on exécute la requête et on vérifie si elle s'est bien déroulée
        $stmt->execute($params) : return true ? return false;
    }

    public function deleteTeammate($idTeammate) 
    {
        // On crée la requête
        $query = "
            DELETE
            FROM " . $this->table .
            " WHERE idTeammate = :idTeammate
        ";
        // on prépare la requête
        $stmt = $this->conn->prepare($query);
        // on nettoie et sécurise l'input
        // $this->idTeammate = htmlspecialchars(strip_tags($idTeammate));
        // tableau associatif pour lier les paramètres reçus à la requête
        $params = ["idTeammate" => $this->idTeammate];
        // on exécute la requête et on vérifie si elle s'est bien déroulée
        $stmt->execute($params) : return true ? return false;
    }
}