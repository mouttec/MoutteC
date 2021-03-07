<?php
class AddressReturn {
    // Propriétés privées de connexion à la DB
    private $conn;
    private $table = "addressReturn";
    // Propriétés publiques de l'objet Post
    public $idAddressReturn;
    public $idCustomer;
    public $numberReturn;
    public $typeReturn;
    public $nameReturn;
    public $complementReturn;
    public $zipReturn;
    public $cityReturn;
    // Constructeur : quand on instancie l'objet, on lui passe la connexion à la DB

    public function __construct($db) {
        $this->conn = $db;
    }

    // Récupérer la liste des posts
    public function readAddressReturn() {
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
    public function readSingleAddressReturn() {
        // création de la requête
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idAddressReturn = :idAddressReturn
        LIMIT 0,1";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // tableau associatif qui lie :id à l'id reçue en paramètre
        $params = ["idAddressReturn" => $this->idAddressReturn];
        // excécution de la requête
        if($stmt->execute($params)) {
            // on récupère le résultat et on le stocke dans une variable (type: array)
            $row = $stmt->fetch();
    
            return $row;
        }
        return false;
    }

    public function readAddressReturnFunctionCustomer() {
        // création de la requête
        $query = "
        SELECT *
        FROM addressTReturn, customers
        WHERE idAddressReturn.addressTReturn = idAddressReturn.customers";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // tableau associatif qui lie :id à l'id reçue en paramètre
        $params = ["idAddressReturn" => $this->idAddressReturn];
        // excécution de la requête
        if($stmt->execute($params)) {
            // on récupère le résultat et on le stocke dans une variable (type: array)
            $row = $stmt->fetch();
    
            return $row;
        }
        return false;
    }

    public function readAddresReturnFunctionBooking() {
        // création de la requête
        $query = "
        SELECT *
        FROM addressReturn, bookings
        WHERE idAddresReturn.addressReturn = idAddresReturn.bookings";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // tableau associatif qui lie :id à l'id reçue en paramètre
        $params = ["idAddressReturn" => $this->idAddressReturn];
        // excécution de la requête
        if($stmt->execute($params)) {
            // on récupère le résultat et on le stocke dans une variable (type: array)
            $row = $stmt->fetch();
    
            return $row;
        }
        return false;
    }
    // Créer un post
    public function createAddressReturn() {
        // On crée la requête
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            idCustomer = :idCustomer,
            numberReturn = :numberReturn,
            typeReturn = :typeReturn,
            nameReturn = :nameReturn,
            complementReturn = :complementReturn,        
            zipReturn = :zipReturn,
            cityReturn = :cityReturn
        ";
        // on prépare la requête
        $stmt = $this->conn->prepare($query);
        // On nettoie et sécurise les inputs
        // référence strip_tags(): https://www.php.net/manual/en/function.strip-tags.php
        // référence htmlspecialchars() : https://www.php.net/manual/en/function.htmlspecialchars.php 
        $this->idCustomer = htmlspecialchars(strip_tags($this->idCustomer));
        $this->numberReturn = htmlspecialchars(strip_tags($this->numberReturn));
        $this->typeReturn = htmlspecialchars(strip_tags($this->typeReturn));
        $this->nameReturn = htmlspecialchars(strip_tags($this->nameReturn));
        $this->complementReturn = htmlspecialchars(strip_tags($this->complementReturn));
        $this->zipReturn = htmlspecialchars(strip_tags($this->zipReturn));
        $this->cityReturn = htmlspecialchars(strip_tags($this->cityReturn));
        // tableau associatif pour lier les paramètres reçus à la requête
        $params = [
            "idCustomer" => $this->idCustomer,
            "numberReturn" => $this->numberReturn,
            "typeReturn" => $this->typeReturn,
            "nameReturn" => $this->nameReturn,
            "complementReturn" => $this->complementReturn,
            "zipReturn" => $this->zipReturn,
            "cityReturn" => $this->cityReturn
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
        public function updateAddressReturn($idAddressReturn) {
            // On crée la requête
            $query = "
                UPDATE "
                . $this->table .
                " SET
                idCustomer = :idCustomer,
                numberReturn = :numberReturn,
                typeReturn = :typeReturn,
                nameReturn = :nameReturn,
                complementReturn = :complementReturn,        
                zipReturn = :zipReturn,
                cityReturn = :cityReturn
                WHERE
                idAddressReturn = :idAddressReturn       
            ";
    
            // on prépare la requête
            $stmt = $this->conn->prepare($query);
   
            // on nettoie et sécurise les inputs
            $this->idCustomer = htmlspecialchars(strip_tags($this->idCustomer));
            $this->numberReturn = htmlspecialchars(strip_tags($this->numberReturn));
            $this->typeReturn = htmlspecialchars(strip_tags($this->typeReturn));
            $this->nameReturn = htmlspecialchars(strip_tags($this->nameReturn));
            $this->complementReturn = htmlspecialchars(strip_tags($this->complementReturn));
            $this->zipReturn = htmlspecialchars(strip_tags($this->zipReturn));
            $this->cityReturn = htmlspecialchars(strip_tags($this->cityReturn));
            $this->idAddressReturn = htmlspecialchars(strip_tags($idAddressReturn));
    var_dump($this->nameReturn);
            // tableau associatif pour lier les paramètres reçus à la requête
            $params = [
                "idCustomer" => $this->idCustomer,
                "numberReturn" => $this->numberReturn,
                "typeReturn" => $this->typeReturn,
                "nameReturn" => $this->nameReturn,
                "complementReturn" => $this->complementReturn,
                "zipReturn" => $this->zipReturn,
                "cityReturn" => $this->cityReturn,
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
        public function deleteAddressReturn() {
            // On crée la requête
            $query = "
                DELETE
                FROM " . $this->table .
                " WHERE idAddressReturn = :idAddressReturn
            ";
            // on prépare la requête
            $stmt = $this->conn->prepare($query);
            // on nettoie et sécurise l'input
            $this->idAddressReturn = htmlspecialchars(strip_tags($this->idAddressReturn));
            // tableau associatif pour lier les paramètres reçus à la requête
            $params = ["idAddressReturn" => $this->idAddressReturn];
            // on exécute la requête et on vérifie si elle s'est bien déroulée
            if($stmt->execute($params)) {
                // dans ce cas on retourne true
                return true;
            }
            // sinon on retourne false
            return false;
            
        }
    
}