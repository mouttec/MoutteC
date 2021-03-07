<?php
class Car {
    // Propriétés privées de connexion à la DB
    private $conn;
    private $table = "cars";
    // Propriétés publiques de l'objet Post
    public $idCar;
    public $idCustomer;
    public $licensePlateCar;
    public $brandCar;
    public $modelCar;

    // Constructeur : quand on instancie l'objet, on lui passe la connexion à la DB
    public function __construct($db) {
        $this->conn = $db;
    }
    // Récupérer la liste des posts
    public function readCarFunctionCustomer() {
        // création de la requête
        $query = "
            SELECT *
            FROM cars, customers
            WHERE idCustomer.cars = idCustomer.customers";
            // préparation de la requête
            $stmt = $this->conn->prepare($query);
            // tableau associatif qui lie :id à l'id reçue en paramètre
            $params = ["idCar" => $this->idCar];
            // excécution de la requête
            if($stmt->execute($params)) {
                // on récupère le résultat et on le stocke dans une variable (type: array)
                $row = $stmt->fetch();
        
                return $row;
            }
            return false;
    }
    // Récupérer un post
    public function readSingleCar() {
        // création de la requête
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idCar = :idCar
        LIMIT 0,1";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // tableau associatif qui lie :id à l'id reçue en paramètre
        $params = ["idCar‡" => $this->idCar‡];
        // excécution de la requête
        if($stmt->execute($params)) {
            // on récupère le résultat et on le stocke dans une variable (type: array)
            $row = $stmt->fetch();
    
            return $row;
        }
        return false;
    }
    // Créer un post
    public function createCar() {
        // On crée la requête
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            idCustomer = :idCustomer,
            licensePlateCar = :licensePlateCar,
            brandCar = :brandCar,
            modelCar = :modelCar
        ";
        // on prépare la requête
        $stmt = $this->conn->prepare($query);
        // On nettoie et sécurise les inputs
        // référence strip_tags(): https://www.php.net/manual/en/function.strip-tags.php
        // référence htmlspecialchars() : https://www.php.net/manual/en/function.htmlspecialchars.php 
        $this->idCustomer = htmlspecialchars(strip_tags($this->idCustomer));
        $this->licensePlateCar = htmlspecialchars(strip_tags($this->licensePlateCar));
        $this->brandCar = htmlspecialchars(strip_tags($this->brandCar));
        $this->modelCar = htmlspecialchars(strip_tags($this->modelCar));
        // tableau associatif pour lier les paramètres reçus à la requête
        $params = [
            "idCustomer" => $this->idCustomer,
            "licensePlate" => $this->licensePlate,
            "brandCar" => $this->brandCar,
            "modelCar" => $this->modelCar
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
        public function updateCar($idCar) {
            // On crée la requête
            $query = "
                UPDATE "
                . $this->table .
                " SET
                idCustomer = :idCustomer,
                licensePlateCar = :licensePlateCar,
                brandCar = :brandCar,
                modelCar = :modelCar
                WHERE
                idCar = :idCar       
            ";
    
            // on prépare la requête
            $stmt = $this->conn->prepare($query);
   
            // on nettoie et sécurise les inputs
            $this->idCustomer = htmlspecialchars(strip_tags($this->idCustomer));
            $this->licensePlateCar = htmlspecialchars(strip_tags($this->licensePlateCar));
            $this->brandCar = htmlspecialchars(strip_tags($this->brandCar));
            $this->modelCar = htmlspecialchars(strip_tags($this->modelCar));
            $this->idCar = htmlspecialchars(strip_tags($idCar));
    var_dump($this->licensePlateCar);
            // tableau associatif pour lier les paramètres reçus à la requête
            $params = [
                "idCustomer" => $this->idCustomer,
                "licensePlate" => $this->licensePlate,
                "brandCar" => $this->brandCar,
                "modelCar" => $this->modelCar
            ];
    
            // on exécute la requête et on vérifie si elle s'est bien déroulée
            if($stmt->execute($params)) {
    
                // dans ce cas on retourne true
                return true;
            }
    
            // sinon on retourne false
    
            return false;
        }
        public function deleteCar() {
            // On crée la requête
            $query = "
                DELETE
                FROM " . $this->table .
                " WHERE idCar = :idCar
            ";
            // on prépare la requête
            $stmt = $this->conn->prepare($query);
            // on nettoie et sécurise l'input
            $this->idCar = htmlspecialchars(strip_tags($this->idCar));
            // tableau associatif pour lier les paramètres reçus à la requête
            $params = ["idCar" => $this->idCar];
            // on exécute la requête et on vérifie si elle s'est bien déroulée
            if($stmt->execute($params)) {
                // dans ce cas on retourne true
                return true;
            }
            // sinon on retourne false
            return false;
            
        }
    
}