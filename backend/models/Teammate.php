<?php
class Teammate {

    private $conn;
    private $table = "teammates";

    public $idTeammate;
    public $firstNameTeammate;
    public $lastNameTeammate;
    public $usernameTeammate;
    public $mailTeammate;
    public $phoneTeammate;
    public $mixedPassword;
    public $statusTeammate;
    public $jobTeammate;
    public $idAgency;
    public $superAdmin;
    public $dateTeammate;

    public function __construct($db) 
    {
        $this->conn = $db;
    }
    
    public function createTeammate($teammateData) 
    {
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            firstNameTeammate = :firstNameTeammate,
            lastNameTeammate = :lastNameTeammate,
            usernameTeammate = :usernameTeammate,
            mailTeammate = :mailTeammate,
            phoneTeammate = :phoneTeammate,
            mixedPassword = :mixedPassword,
            statusTeammate = :statusTeammate,
            jobTeammate = :jobTeammate,
            idAgency = :idAgency,
            superAdmin = :superAdmin
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "firstNameTeammate" => htmlspecialchars(strip_tags($this->firstNameTeammate)),
            "lastNameTeammate" => htmlspecialchars(strip_tags($this->lastNameTeammate)),
            "usernameTeammate" => htmlspecialchars(strip_tags($this->usernameTeammate)),
            "mailTeammate" => htmlspecialchars(strip_tags($this->mailTeammate)),
            "phoneTeammate" => htmlspecialchars(strip_tags($this->phoneTeammate)),
            "mixedPassword" => password_hash($this->mixedPassword, PASSWORD_DEFAULT),
            "statusTeammate" => htmlspecialchars(strip_tags($this->statusTeammate)),
            "jobTeammate" => htmlspecialchars(strip_tags($this->jobTeammate)),
            "idAgency" => htmlspecialchars(strip_tags($this->idAgency)),
            "superAdmin" => htmlspecialchars(strip_tags($this->superAdmin))
        ];

        if ($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function listTeammates() 
    {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            ORDER BY
            dateTeammate ASC";
        $stmt = $this->conn->prepare($query);
        
        if ($stmt->execute()) {
            return $stmt;
        }
        return false;
    }

    public function searchTeammateById() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idTeammate = :idTeammate";
        $stmt = $this->conn->prepare($query);

        $params = ["idTeammate" => htmlspecialchars(strip_tags($this->idTeammate))];

        if ($stmt->execute($params)) {
            $row = $stmt->fetch();    
            return $row;
        }
        return false;
    }

    public function searchTeammatesByJob() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE jobTeammate = :jobTeammate";
        $stmt = $this->conn->prepare($query);

        $params = ["jobTeammate" => htmlspecialchars(strip_tags($this->jobTeammate))];

        if ($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function searchTeammatesByAgency() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idAgency = :idAgency";
        $stmt = $this->conn->prepare($query);

        $params = ["idAgency" => htmlspecialchars(strip_tags($this->idAgency))];

        if ($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function searchTeammateByUsername() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE usernameTeammate = :usernameTeammate";
        $stmt = $this->conn->prepare($query);

        $params = ["usernameTeammate" => htmlspecialchars(strip_tags($this->usernameTeammate))];

        if ($stmt->execute($params)) {
            $row = $stmt->fetch();    
            return $row;
        }
        return false;
    }

    public function updateTeammate() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            firstNameTeammate = :firstNameTeammate,
            lastNameTeammate = :lastNameTeammate,
            usernameTeammate = :usernameTeammate,
            mailTeammate = :mailTeammate,
            phoneTeammate = :phoneTeammate,
            statusTeammate = :statusTeammate,
            jobTeammate = :jobTeammate,
            idAgency = :idAgency,
            superAdmin = :superAdmin
            WHERE
            idTeammate = :idTeammate
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "firstNameTeammate" => htmlspecialchars(strip_tags($this->firstNameTeammate)),
            "lastNameTeammate" => htmlspecialchars(strip_tags($this->lastNameTeammate)),
            "usernameTeammate" => htmlspecialchars(strip_tags($this->usernameTeammate)),
            "mailTeammate" => htmlspecialchars(strip_tags($this->mailTeammate)),
            "phoneTeammate" => htmlspecialchars(strip_tags($this->phoneTeammate)),
            "statusTeammate" => htmlspecialchars(strip_tags($this->statusTeammate)),
            "jobTeammate" => htmlspecialchars(strip_tags($this->jobTeammate)),
            "idAgency" => htmlspecialchars(strip_tags($this->idAgency)),
            "superAdmin" => htmlspecialchars(strip_tags($this->superAdmin)),
            "idTeammate" => htmlspecialchars(strip_tags($this->idTeammate))
        ];

        if ($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function passwordUpdate() {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            mixedPassword = :mixedPassword
            WHERE
            idTeammate = :idTeammate
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "mixedPassword" => password_hash($this->mixedPassword, PASSWORD_DEFAULT),
            "idTeammate" => htmlspecialchars(strip_tags($this->idTeammate))
        ];

        if ($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function deactivateTeammate() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            statusTeammate = :statusTeammate
            WHERE
            idTeammate = :idTeammate
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "statusTeammate" => "Inactif·ve",
            "idTeammate" => htmlspecialchars(strip_tags($this->idTeammate))
        ];

        if ($stmt->execute($params)) {
            return true;
        }
        return false;
    }
}