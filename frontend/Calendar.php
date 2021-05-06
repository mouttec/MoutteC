<?php
class Calendar {
    // Propriétés privées de connexion à la DB
    private $conn;
    private $table = "calendar";
    // Propriétés publiques de l'objet Post
    public $idBooking;
    public $day;
    public $hours;
    public $statusCalendar;
    public $statusBooking;
    public $statusCar;
    public $firstNameCustomer;
    public $lastNameCustomer;
    public $phoneCustomer;
    public $mailCustomer;
    public $dateOfBirthdayCustomer;
    public $licensePlateCar;
    public $brandCar;
    public $modelCar;
    public $motorizationCar;
    public $dateOfCirculation;
    public $addressForth;
    public $addressBack;
    public $namePartner;
    public $formulaBooking;
    // Constructeur : quand on instancie l'objet, on lui passe la connexion à la DB
    public function __construct($db) {
        $this->conn = $db;
    }
    // Récupérer la liste des posts
    public function readCalendar() {
        // création de la requête
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            ORDER BY
            idBooking";
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

    //     // Modifier un post
    //     public function update($day, $hours) {
    //     // On crée la requête
    //     $query = "
    //         UPDATE "
    //         . $this->table .
    //         " SET
    //         firstNameManager = :firstNameManager,
    //         lastNameManager = :lastNameManager,
    //         usernameManager = :usernameManager,
    //         mailManager = :mailManager,
    //         phoneManager = :phoneManager,        
    //         passwordManager = :passwordManager,
    //         statusManager = :statusManager
    //         WHERE
    //         day = :day AND hours = :hours       
    //     ";

    //     // on prépare la requête
    //     $stmt = $this->conn->prepare($query);

    //     // on nettoie et sécurise les inputs
    //     $this->firstNameManager = htmlspecialchars(strip_tags($this->firstNameManager));
    //     $this->lastNameManager = htmlspecialchars(strip_tags($this->lastNameManager));
    //     $this->usernameManager = htmlspecialchars(strip_tags($this->usernameManager));
    //     $this->mailManager = htmlspecialchars(strip_tags($this->mailManager));
    //     $this->phoneManager = htmlspecialchars(strip_tags($this->phoneManager));
    //     $this->passwordManager = htmlspecialchars(strip_tags($this->passwordManager));
    //     $this->statusManager = htmlspecialchars(strip_tags($this->statusManager));
    //     $this->day = htmlspecialchars(strip_tags($day));
    //     $this->hours = htmlspecialchars(strip_tags($hours));
    //     // tableau associatif pour lier les paramètres reçus à la requête
    //     $params = [
    //         "firstNameManager" => $this->firstNameManager,
    //         "lastNameManager" => $this->lastNameManager,
    //         "usernameManager" => $this->usernameManager,
    //         "mailManager" => $this->mailManager,
    //         "phoneManager" => $this->phoneManager,
    //         "passwordManager" => $this->passwordManager,
    //         "statusManager" => $this->statusManager,
    //         "idManager" => $this->idManager
    //     ];

    //     // on exécute la requête et on vérifie si elle s'est bien déroulée
    //     if($stmt->execute($params)) {

    //         // dans ce cas on retourne true
    //         return true;
    //     }

    //     // sinon on retourne false

    //     return false;
    // }
}