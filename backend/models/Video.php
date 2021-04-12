<?php
class Video {
    private $conn;
    private $table = "videos";

    public $idVideo;
    public $urlVideo;
    public $idContract;
    public $videoType;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function createVideo() {
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            urlVideo = :urlVideo,
            idContract = :idContract,
            videoType = :videoType";
        $stmt = $this->conn->prepare($query);
        $params = [
            "urlVideo" => "adresseServeur/" . htmlspecialchars(strip_tags($this->urlVideo)),
            "idContract" => htmlspecialchars(strip_tags($this->idContract)),
            "videoType" => htmlspecialchars(strip_tags($this->videoType))
        ];

        if ($stmt->execute($params)) {
            return true; 
        }
        return false;
    }

    public function listVideos() 
    {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            ORDER BY
            idContract DESC";
        $stmt = $this->conn->prepare($query);

        if ($stmt->execute()) {
            return $stmt; 
        }
        return false;
    }

    public function searchContractVideos() 
    {
        $query = "
            SELECT *
            FROM " . $this->table . "
            WHERE idContract = :idContract
            ORDER BY dateVideo ASC";
        $stmt = $this->conn->prepare($query);

        $params = ["idContract" => htmlspecialchars(strip_tags($this->idContract))];

        if ($stmt->execute($params)) {
            return $stmt; 
        }
        return false;
    }

    public function searchVideo() 
    {
        $query = "
            SELECT *
            FROM " . $this->table . "
            WHERE idVideo = :idVideo";
        $stmt = $this->conn->prepare($query);

        $params = ["idVideo" => htmlspecialchars(strip_tags($this->idVideo))];

        if ($stmt->execute($params)) {
            $row = $stmt->fetch();    
            return $row;
        }
        return false;
    }
}