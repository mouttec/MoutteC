<?php
class Customer {
    // Propriétés privées de connexion à la DB
    private $conn;
    private $table = "customers";
    // Propriétés publiques de l'objet Post
    public $idCustomer;
    public $firstNameCustomer;
    public $lastNameCustomer;
    public $phoneCustomer;
    public $mailCustomer;
    public $passwordCustomer;
    public $idPartner;
    public $dateCustomer;

    // Constructeur : quand on instancie l'objet, on lui passe la connexion à la DB
    public function __construct($db) {
        $this->conn = $db;
    }

    // Récupérer la liste des clients
    public function readCustomer() {
        // création de la requête
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            ORDER BY
            firstNameCustomer ASC";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // exécution de la requête
        $stmt->execute();
        // on retourne le résultat
        return $stmt;
    }

    // Récupérer un client
    public function readSingleCustomer() {
        // création de la requête
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idCustomer = :idCustomer
        LIMIT 0,1";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // tableau associatif qui lie :id à l'id reçue en paramètre
        $params = ["idCustomer" => $this->idCustomer];
        // excécution de la requête
        if($stmt->execute($params)) {
            // on récupère le résultat et on le stocke dans une variable (type: array)
            $row = $stmt->fetch();
    
            return $row;
        }
        return false;
    }

    // Créer un client
    public function createCustomer() {
        // On crée la requête
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            firstNameCustomer = :firstNameCustomer,
            lastNameCustomer = :lastNameCustomer,
            phoneCustomer = :phoneCustomer, 
            mailCustomer = :mailCustomer,
            passwordCustomer = :passwordCustomer
        ";
        // on prépare la requête
        $stmt = $this->conn->prepare($query);
        // On nettoie et sécurise les inputs
        // référence strip_tags(): https://www.php.net/manual/en/function.strip-tags.php
        // référence htmlspecialchars() : https://www.php.net/manual/en/function.htmlspecialchars.php 
        $this->firstNameCustomer = htmlspecialchars(strip_tags($this->firstNameCustomer));
        $this->lastNameCustomer = htmlspecialchars(strip_tags($this->lastNameCustomer));
        $this->phoneCustomer = htmlspecialchars(strip_tags($this->phoneCustomer));
        $this->mailCustomer = htmlspecialchars(strip_tags($this->mailCustomer));
        $this->passwordCustomer = htmlspecialchars(strip_tags($this->passwordCustomer));
        // tableau associatif pour lier les paramètres reçus à la requête
        $params = [
            "firstNameCustomer" => $this->firstNameCustomer,
            "lastNameCustomer" => $this->lastNameCustomer,
            "phoneCustomer" => $this->phoneCustomer,
            "mailCustomer" => $this->mailCustomer,
            "passwordCustomer" => $this->passwordCustomer
        ];
        // on exécute la requête et on vérifie si elle s'est bien déroulée 
        if($stmt->execute($params)) {
            // Dans ce cas on retourne true
            return true;
        }
        // sinon on retourne false
        return false;
    }

    // Modifier un client
    public function updateCustomer($idCustomer) {
    // On crée la requête
    $query = "
        UPDATE "
        . $this->table .
        " SET
        firstNameCustomer = :firstNameCustomer,
        lastNameCustomer = :lastNameCustomer,
        phoneCustomer = :phoneCustomer,    
        mailCustomer = :mailCustomer,
        passwordCustomer = :passwordCustomer,
        idPartner = :idPartner
        WHERE
        idCustomer = :idCustomer       
    ";

    // on prépare la requête
    $stmt = $this->conn->prepare($query);

    // on nettoie et sécurise les inputs
    $this->firstNameCustomer = htmlspecialchars(strip_tags($this->firstNameCustomer));
    $this->lastNameCustomer = htmlspecialchars(strip_tags($this->lastNameCustomer));
    $this->phoneCustomer = htmlspecialchars(strip_tags($this->phoneCustomer));
    $this->mailCustomer = htmlspecialchars(strip_tags($this->mailCustomer));
    $this->passwordCustomer = htmlspecialchars(strip_tags($this->passwordCustomer));
    $this->idPartner = htmlspecialchars(strip_tags($this->idPartner));
    $this->idCustomer = htmlspecialchars(strip_tags($idCustomer));
var_dump($this->firstNameCustomer);
    // tableau associatif pour lier les paramètres reçus à la requête
    $params = [
        "firstNameCustomer" => $this->firstNameCustomer,
        "lastNameCustomer" => $this->lastNameCustomer,
        "phoneCustomer" => $this->phoneCustomer,
        "mailCustomer" => $this->mailCustomer,
        "passwordCustomer" => $this->passwordCustomer,
        "idPartner" => $this->idPartner,
        "idCustomer" => $this->idCustomer
    ];

    // on exécute la requête et on vérifie si elle s'est bien déroulée
    if($stmt->execute($params)) {

        // dans ce cas on retourne true
        return true;
    }

    // sinon on retourne false

    return false;
}
public function deleteCustomer() {
    // On crée la requête
    $query = "
        DELETE
        FROM " . $this->table .
        " WHERE idCustomer = :idCustomer
    ";
    // on prépare la requête
    $stmt = $this->conn->prepare($query);
    // on nettoie et sécurise l'input
    // $this->idCustomer = htmlspecialchars(strip_tags($this->idCustomer));
    // tableau associatif pour lier les paramètres reçus à la requête
    $params = ["idCustomer" => $this->idCustomer];
    // on exécute la requête et on vérifie si elle s'est bien déroulée
    if($stmt->execute($params)) {
        // dans ce cas on retourne true
        return true;
    }
    // sinon on retourne false
    return false;
    
    }

}