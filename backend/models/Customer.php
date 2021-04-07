<?php
class Customer {
    private $conn;
    private $table = "customers";

    public $idCustomer;
    public $firstNameCustomer;
    public $lastNameCustomer;
    public $dateOfBirthdayCustomer;
    public $phoneCustomer;
    public $mailCustomer;
    public $mixedPassword;
    public $idPartner;
    public $dateCustomer;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function createCustomer() {
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            firstNameCustomer = :firstNameCustomer,
            lastNameCustomer = :lastNameCustomer,
            dateOfBirthdayCustomer = :dateOfBirthdayCustomer,
            phoneCustomer = :phoneCustomer, 
            mailCustomer = :mailCustomer,
            mixedPassword = :mixedPassword
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "firstNameCustomer" => htmlspecialchars(strip_tags($this->firstNameCustomer)),
            "lastNameCustomer" => htmlspecialchars(strip_tags($this->lastNameCustomer)),
            "dateOfBirthdayCustomer" => htmlspecialchars(strip_tags($this->dateOfBirthdayCustomer)),
            "phoneCustomer" => htmlspecialchars(strip_tags($this->phoneCustomer))
            "mailCustomer" => htmlspecialchars(strip_tags($this->mailCustomer)),
            "mixedPassword" => password_hash(htmlspecialchars(strip_tags($this->passwordCustomer)), PASSWORD_DEFAULT)
        ];

        if ($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function listCustomers() {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            ORDER BY
            firstNameCustomer ASC";
        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

    // Récupérer un client
    public function listCustomer($mailCustomer) {
        // création de la requête
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE mailCustomer = :mailCustomer
        LIMIT 0,1";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // tableau associatif qui lie :mailCustomer à l'email reçu en paramètre
        $params = ["mailCustomer" => $this->mailCustomer];
        // excécution de la requête
        if($stmt->execute($params)) {
            // on récupère le résultat et on le stocke dans une variable (type: array)
            $row = $stmt->fetch();
            return $row;
        }
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
        mixedPassword = :passwordCustomer,
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
    $this->mixedPassword = password_hash(htmlspecialchars(strip_tags($this->passwordCustomer)), PASSWORD_DEFAULT);;
    $this->idPartner = htmlspecialchars(strip_tags($this->idPartner));
    $this->idCustomer = htmlspecialchars(strip_tags($idCustomer));
    //var_dump($this->firstNameCustomer);
    // tableau associatif pour lier les paramètres reçus à la requête
    $params = [
        "firstNameCustomer" => $this->firstNameCustomer,
        "lastNameCustomer" => $this->lastNameCustomer,
        "phoneCustomer" => $this->phoneCustomer,
        "mailCustomer" => $this->mailCustomer,
        "mixedPassword" => $this->mixedPassword,
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