<?php
class Contract {
    // Propriétés privées de connexion à la DB
    private $conn;
    private $table = "contracts";
    // Propriétés publiques de l'objet Post
    public $idContract;
    public $idCustomer;
    public $idPartner;
    public $urlContract;
    public $dateContract;
    public $idCar;
    public $idAddressTakingCare;
    public $idAddressReturn;

    // Constructeur : quand on instancie l'objet, on lui passe la connexion à la DB
    public function __construct($db) {
        $this->conn = $db;
    }
    // Récupérer la liste des posts
    public function readContract() {
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
    public function readSingleContract() {
        // création de la requête
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idContract = :idContract
        LIMIT 0,1";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // tableau associatif qui lie :id à l'id reçue en paramètre
        $params = ["idContract" => $this->idContract];
        // excécution de la requête
        if($stmt->execute($params)) {
            // on récupère le résultat et on le stocke dans une variable (type: array)
            $row = $stmt->fetch();
    
            return $row;
        }
        return false;
    }
    // Créer un post
    public function createContract() {
        // On crée la requête
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            idCustomer = :idCustomer,
            idPartner,
            urlContract = :urlContract,
            idCar = :idCar,
            idAddressTakingCare,
            idAddressReturn
        ";
        // on prépare la requête
        $stmt = $this->conn->prepare($query);
        // On nettoie et sécurise les inputs
        // référence strip_tags(): https://www.php.net/manual/en/function.strip-tags.php
        // référence htmlspecialchars() : https://www.php.net/manual/en/function.htmlspecialchars.php 
        $this->idCustomer = htmlspecialchars(strip_tags($this->idCustomer));
        $this->idPartner = htmlspecialchars(strip_tags($this->idPartner));
        $this->urlContract = htmlspecialchars(strip_tags($this->urlContract));
        $this->idCar = htmlspecialchars(strip_tags($this->idCar));
        $this->idAddressTakingCare = htmlspecialchars(strip_tags($this->idAddressTakingCare));
        $this->idAddressReturn = htmlspecialchars(strip_tags($this->idAddressReturn));
        // tableau associatif pour lier les paramètres reçus à la requête
        $params = [
            "idCustomer" => $this->idCustomer,
            "idPartner" => $this->idPartner,
            "urlContract" => $this->urlContract,
            "idCar" => $this->idCar,
            "idAddressTakingCare" => $this->idAddressTakingCare,
            "idAddressReturn" => $this->idAddressReturn
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
        public function updateContract($idContract) {
            // On crée la requête
            $query = "
                UPDATE "
                . $this->table .
                " SET
                idCustomer = :idCustomer,
                idPartner,
                urlContract = :urlContract,
                idCar = :idCar,
                idAddressTakingCare,
                idAddressReturn
                WHERE
                idContract = :idContract       
            ";
    
            // on prépare la requête
            $stmt = $this->conn->prepare($query);
   
            // on nettoie et sécurise les inputs
            $this->idCustomer = htmlspecialchars(strip_tags($this->idCustomer));
            $this->idPartner = htmlspecialchars(strip_tags($this->idPartner));
            $this->urlContract = htmlspecialchars(strip_tags($this->urlContract));
            $this->idCar = htmlspecialchars(strip_tags($this->idCar));
            $this->idAddressTakingCare = htmlspecialchars(strip_tags($this->idAddressTakingCare));
            $this->idAddressReturn = htmlspecialchars(strip_tags($this->idAddressReturn));
            $this->idContract = htmlspecialchars(strip_tags($idContract));
    var_dump($this->urlContract);
            // tableau associatif pour lier les paramètres reçus à la requête
            $params = [
                "idCustomer" => $this->idCustomer,
                "idPartner" => $this->idPartner,
                "urlContract" => $this->urlContract,
                "idCar" => $this->idCar,
                "idAddressTakingCare" => $this->idAddressTakingCare,
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
        public function deleteContract() {
            // On crée la requête
            $query = "
                DELETE
                FROM " . $this->table .
                " WHERE idContract = :idContract
            ";
            // on prépare la requête
            $stmt = $this->conn->prepare($query);
            // on nettoie et sécurise l'input
            $this->idContract = htmlspecialchars(strip_tags($this->idContract));
            // tableau associatif pour lier les paramètres reçus à la requête
            $params = ["idContract" => $this->idContract];
            // on exécute la requête et on vérifie si elle s'est bien déroulée
            if($stmt->execute($params)) {
                // dans ce cas on retourne true
                return true;
            }
            // sinon on retourne false
            return false;
            
        }
    
}