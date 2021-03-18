<?php
class Contract 
{
    // Propriétés privées de connexion à la DB
    private $conn;
    private $table = "contracts";
    // Propriétés publiques de l'objet Post
    public $idContract;
    public $idCustomer;
    public $idPartner;
    public $idBooking;
    public $urlContract;
    public $dateContract;
    public $idCar;
    public $idPickupAddress;
    public $idReturnAddress;
    public $idTeammatePickup;
    public $idTeammateReturn;
    public $idVideoPickup;
    public $idVideoDepositPartner;
    public $idVideoWithdrawalPartner;
    public $idVideoReturn;

    // Constructeur : quand on instancie l'objet, on lui passe la connexion à la DB
    public function __construct($db) 
    {
        $this->conn = $db;
    }

    // Créer un post
    public function createContract() 
    {
        // On crée la requête
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            idCustomer = :idCustomer,
            idPartner = :idPartner,
            urlContract = :urlContract,
            idCar = :idCar,
            idPickupAddress = :idPickupAddress,
            idReturnAddress = :idReturnAddress,
            idVideoPickup = :idVideoPickup
        ";
        // on prépare la requête
        $stmt = $this->conn->prepare($query);
        // On nettoie et sécurise les inputs
        // référence strip_tags(): https://www.php.net/manual/en/function.strip-tags.php
        // référence htmlspecialchars() : https://www.php.net/manual/en/function.htmlspecialchars.php 
        // $this->idCustomer = htmlspecialchars(strip_tags($this->idCustomer));
        // $this->idPartner = htmlspecialchars(strip_tags($this->idPartner));
        // $this->urlContract = htmlspecialchars(strip_tags($this->urlContract));
        // $this->idCar = htmlspecialchars(strip_tags($this->idCar));
        // $this->idAddressTakingCare = htmlspecialchars(strip_tags($this->idAddressTakingCare));
        // $this->idAddressReturn = htmlspecialchars(strip_tags($this->idAddressReturn));
        // tableau associatif pour lier les paramètres reçus à la requête
        $params = [
            "idCustomer" => $this->idCustomer,
            "idPartner" => $this->idPartner,
            "urlContract" => $this->urlContract,
            "idCar" => $this->idCar,
            "idPickupAddress" => $this->idPickupAddress,
            "idReturnAddress" => $this->idReturnAddress,
        ];
        // on exécute la requête et on vérifie si elle s'est bien déroulée 
        $stmt->execute($params) : return true ? return false;
    }

    // Récupérer la liste des Contracts
    public function listContracts() 
    {
        // création de la requête
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            ORDER BY
            dateContract DESC";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // exécution de la requête
        $stmt->execute();
        // on retourne le résultat
        return $stmt->fetchAll();
    }

    // Récupérer les Contracts d'un Partner
    public function searchPartnerContracts($idPartner) 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idPartner = :idPartner";
        $stmt = $this->conn->prepare($query);
        $params = ["idPartner" => $idPartner];
        $stmt->execute($params) : return $stmt->fetchAll() ? return false;
    }

    // Récupérer les Contracts d'un Customer
    public function searchCustomerContracts($idCustomer) 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idCustomer = :idCustomer";
        $stmt = $this->conn->prepare($query);
        $params = ["idCustomer" => $idCustomer];
        $stmt->execute($params) : return $stmt->fetchAll() ? return false;
    }

    // Récupérer les Contracts d'une Car
    public function searchCarContracts($idCar) 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idCar = :idCar";
        $stmt = $this->conn->prepare($query);
        $params = ["idCar" => $idCar];
        $stmt->execute($params) : return $stmt->fetchAll() ? return false;
    }

    // Récupérer un Contract
    public function searchContract() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idContract = :idContract
        LIMIT 0,1";
        $stmt = $this->conn->prepare($query);
        $params = ["idContract" => $this->idContract];
        $stmt->execute($params) : return $stmt->fetch() ? return false;
    }

    // Modifier un post
    public function updateContract() 
    {
        // On crée la requête
        $query = "
            UPDATE "
            . $this->table .
            " SET
            idCustomer = :idCustomer,
            idPartner = :idPartner,
            urlContract = :urlContract,
            idCar = :idCar,
            idPickupAddress = :idPickupAddress,
            idReturnAddress = :idReturnAddress,
            WHERE
            idContract = :idContract       
        ";
        // on prépare la requête
        $stmt = $this->conn->prepare($query);
        $params = [
            "idContract" => $this->idContract,
            "idCustomer" => $this->idCustomer,
            "idPartner" => $this->idPartner,
            "urlContract" => $this->urlContract,
            "idCar" => $this->idCar,
            "idPickupAddress" => $this->idPickupAddress,
            "idReturnAddress" => $this->idReturnAddress,
        ];
        // on exécute la requête et on vérifie si elle s'est bien déroulée
        $stmt->execute($params) : return true ? return false;
    }

    public function teammateAction($contract, $action) 
    {
        // On crée la requête
        $query = "
            UPDATE "
            . $this->table .
            " SET
            idTeammate".$action." = :idTeammate,
            WHERE
            idContract = :idContract       
        ";
        // on prépare la requête
        $stmt = $this->conn->prepare($query);
        $params = [
            "idContract" => $contract->idContract,
            "idTeammate" => $contract->idTeammate,
        ];
        // on exécute la requête et on vérifie si elle s'est bien déroulée
        $stmt->execute($params) : return true ? return false;
    }

    public function deleteContract($idContract) 
    {
        // On crée la requête
        $query = "
            DELETE
            FROM " . $this->table .
            " WHERE idContract = :idContract
        ";
        // on prépare la requête
        $stmt = $this->conn->prepare($query);
        // on nettoie et sécurise l'input
        // $this->idContract = htmlspecialchars(strip_tags($this->idContract));
        // tableau associatif pour lier les paramètres reçus à la requête
        $params = ["idContract" => $idContract];
        // on exécute la requête et on vérifie si elle s'est bien déroulée
        if($stmt->execute($params) : return true ? return false;
    }    
}