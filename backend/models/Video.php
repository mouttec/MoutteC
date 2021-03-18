<?php
class Video {
    // Propriétés privées de connexion à la DB
    private $conn;
    private $table = "videos";
    // Propriétés publiques de l'objet Post
    public $idVideo;
    public $urlVideo;
    public $idContract;
    public $videoType;

    // Constructeur : quand on instancie l'objet, on lui passe la connexion à la DB
    public function __construct($db) {
        $this->conn = $db;
    }

    // Créer une vidéo
    public function createVideo() {
        // On crée la requête
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            urlVideo = :urlVideo,
            idCustomer = :idContract,
            videoType = :videoType
        ";
        // on prépare la requête
        $stmt = $this->conn->prepare($query);
        // On nettoie et sécurise les inputs
        // référence strip_tags(): https://www.php.net/manual/en/function.strip-tags.php
        // référence htmlspecialchars() : https://www.php.net/manual/en/function.htmlspecialchars.php 
        // $this->urlVideo = htmlspecialchars(strip_tags($this->urlVideo));
        // $this->idCustomer = htmlspecialchars(strip_tags($this->idCustomer));
        // tableau associatif pour lier les paramètres reçus à la requête
        $params = [
            "urlVideo" => $this->urlVideo,
            "idContract" => $this->idContract,
            "videoType" => $this->videoType,
        ];
        // on exécute la requête et on vérifie si elle s'est bien déroulée 
        $stmt->execute($params) : return true ? return false;
    }

    // Récupérer la liste des vidéos
    public function listVideos() 
    {
        // création de la requête
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            ORDER BY
            idContract DESC";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // exécution de la requête
        $stmt->execute() : return $stmt ? return false;
    }

    // Récupérer la liste des Vidéos d'un Contract
    public function searchContractVideos($idContract) 
    {
        // création de la requête
        $query = "
            SELECT *
            FROM " . $this->table . "
            WHERE idContract = :idContract
            ORDRE BY dateVideo ASC";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // tableau associatif qui lie :id à l'id reçue en paramètre
        $params = ["idContract" => $idContract];
        // excécution de la requête
        $stmt->execute($params) : return $stmt->fetchAll() ? return false;       
    }

    // Récupérer une Vidéo
    public function searchVideo($idVideo) {
        // création de la requête
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idVideo = :idVideo
        LIMIT 0,1";
        // préparation de la requête
        $stmt = $this->conn->prepare($query);
        // tableau associatif qui lie :id à l'id reçue en paramètre
        $params = ["idVideo" => $idVideo];
        // excécution de la requête
        $stmt->execute($params) : return $stmt->fetch() ? return false;
    }
 
    //Supprimer une vidéo
    public function deleteVideo($idVideo) {
        // On crée la requête
        $query = "
            DELETE
            FROM " . $this->table .
            " WHERE idVideo = :idVideo
        ";
        // on prépare la requête
        $stmt = $this->conn->prepare($query);
        // on nettoie et sécurise l'input
        // $this->idVideo = htmlspecialchars(strip_tags($this->idVideo));
        // tableau associatif pour lier les paramètres reçus à la requête
        $params = ["idVideo" => $idVideo];
        // on exécute la requête et on vérifie si elle s'est bien déroulée
        $stmt->execute($params) : return true ? return false;
            
        }
    
}