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
    public $dateOfCirculationCar;
    public $motorizationCar;
    public $urlGrayCard;


    // Constructeur : quand on instancie l'objet, on lui passe la connexion à la DB
    public function __construct($db) 
    {
        $this->conn = $db;
    }

    // Création d'une Car
    public function createCar() 
    {
        // On crée la requête
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            idCustomer = :idCustomer,
            licensePlateCar = :licensePlateCar,
            brandCar = :brandCar,
            modelCar = :modelCar,
            dateOfCirculationCar = :dateOfCirculationCar,
            motorizationCar = :motorizationCar,
            $urlGrayCard = :urlGrayCard
        ";
        // on prépare la requête
        $stmt = $this->conn->prepare($query);
        // On nettoie et sécurise les inputs
        // référence strip_tags(): https://www.php.net/manual/en/function.strip-tags.php
        // référence htmlspecialchars() : https://www.php.net/manual/en/function.htmlspecialchars.php 
        // $this->idCustomer = htmlspecialchars(strip_tags($this->idCustomer));
        // $this->licensePlateCar = htmlspecialchars(strip_tags($this->licensePlateCar));
        // $this->brandCar = htmlspecialchars(strip_tags($this->brandCar));
        // $this->modelCar = htmlspecialchars(strip_tags($this->modelCar));
        // tableau associatif pour lier les paramètres reçus à la requête
        $params = [
            "idCustomer" => $this->idCustomer,
            "licensePlateCar" => $this->licensePlateCar,
            "brandCar" => $this->brandCar,
            "modelCar" => $this->modelCar,
            "dateOfCirculationCar" => $this->dateOfCirculationCar,
            "motorizationCar" => $this->motorizationCar,
            "urlGrayCard" => $this->urlGrayCard,
        ];
        // on exécute la requête et on vérifie si elle s'est bien déroulée 
        $stmt->execute($params) : return true ? return false;
    }

    // Liste toutes les Car
    public function listCars() 
    {
        // création de la requête
        $query = "
        SELECT *
        FROM "
        . $this->table;
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // excécution de la requête
        $stmt->execute();
        // on retourne les résultats dans un tableau associatif
        return $stmt->fetchAll();
    }

    // Récupérer la liste des Car d'un Customer
    public function searchCustomersCars($idCustomer) 
    {
        // création de la requête
        $query = "
            SELECT *
            FROM " . $this->table . "
            WHERE idCustomer = :idCustomer
            ORDRE BY idCar ASC";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // tableau associatif qui lie :id à l'id reçue en paramètre
        $params = ["idCustomer" => $idCustomer];
        // excécution de la requête
        $stmt->execute($params) : return $stmt->fetchAll() ? return false;       
    }

    // Récupérer une Car avec sa plaque d'immat
    public function searchCar($licensePlateCar) 
    {
        // création de la requête
        $query = "
            SELECT *
            FROM " . $this->table . "
            WHERE licensePlateCar = :licensePlateCar";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // tableau associatif qui lie :id à l'id reçue en paramètre
        $params = ["license" => $licensePlateCar];
        // excécution de la requête
        $stmt->execute($params)) : return $stmt->fetch() ? return false;
    }

    // Modifier un post
    public function updateCar() 
    {
        // On crée la requête
        $query = "
            UPDATE "
            . $this->table .
            " SET
            idCustomer = :idCustomer,
            licensePlateCar = :licensePlateCar,
            brandCar = :brandCar,
            modelCar = :modelCar,
            dateOfCirculationCar = :dateOfCirculationCar,
            motorizationCar = :motorizationCar,
            $urlGrayCard = :urlGrayCard
            WHERE
            licensePlateCar = :licensePlateCar       
        ";

        // on prépare la requête
        $stmt = $this->conn->prepare($query);

        // on nettoie et sécurise les inputs
//         $this->idCustomer = htmlspecialchars(strip_tags($this->idCustomer));
//         $this->licensePlateCar = htmlspecialchars(strip_tags($this->licensePlateCar));
//         $this->brandCar = htmlspecialchars(strip_tags($this->brandCar));
//         $this->modelCar = htmlspecialchars(strip_tags($this->modelCar));
//         $this->idCar = htmlspecialchars(strip_tags($idCar));
// var_dump($this->licensePlateCar);
        // tableau associatif pour lier les paramètres reçus à la requête
        $params = [
            // "idCar" => $this->idCar,
            "idCustomer" => $this->idCustomer,
            "licensePlateCar" => $this->licensePlateCar,
            "brandCar" => $this->brandCar,
            "modelCar" => $this->modelCar,
            "dateOfCirculationCar" => $this->dateOfCirculationCar,
            "motorizationCar" => $this->motorizationCar,
            "urlGrayCard" => $this->urlGrayCard,
        ];
        // on exécute la requête et on vérifie si elle s'est bien déroulée
        $stmt->execute($params) : return true ? return false;
    }

    public function deleteCar($idCar) 
    {
        // On crée la requête
        $query = "
            DELETE
            FROM " . $this->table .
            " WHERE idCar = :idCar
        ";
        // on prépare la requête
        $stmt = $this->conn->prepare($query);
        // on nettoie et sécurise l'input
        // $this->idCar = htmlspecialchars(strip_tags($this->idCar));
        // tableau associatif pour lier les paramètres reçus à la requête
        $params = ["idCar" => $idCar];
        // on exécute la requête et on vérifie si elle s'est bien déroulée
        $stmt->execute($params) : return true ? return false;
        
    }   
}