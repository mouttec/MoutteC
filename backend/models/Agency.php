<?php
class Agency {
    // Propriétés privées de connexion à la DB
    private $conn;
    private $table = "agencies";
    // Propriétés publiques de l'objet Post
    public $idAgency;
    public $nameAgency;
    public $numberAddressAgency;
    public $typeAddressAgency;
    public $nameAddressAgency;
    public $complementAddressAgency;
    public $zipAddressAgency;
    public $cityAddressAgency;
    public $phoneAgency;
    public $mailAgency;
    public $statusAgency;
    public $dateAgency;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function createAgency() {
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            nameAgency = :nameAgency,
            numberAddressAgency = :numberAddressAgency,
            typeAddressAgency = :typeAddressAgency,
            nameAddressAgency = :nameAddressAgency,
            complementAddressAgency = :complementAddressAgency,
            zipAddressAgency = :zipAddressAgency,
            cityAddressAgency = :cityAddressAgency,
            phoneAgency = :phoneAgency,
            mailAgency = :mailAgency,
            statusAgency = :statusAgency
        ";

        $stmt = $this->conn->prepare($query);
        $params = [
            "nameAgency" => $this->nameAgency,
            "numberAddressAgency" => $this->numberAddressAgency,
            "typeAddressAgency" => $this->typeAddressAgency,
            "nameAddressAgency" => $this->nameAddressAgency,
            "complementAddressAgency" => $this->complementAddressAgency,
            "zipAddressAgency" => $this->zipAddressAgency,
            "cityAddressAgency" => $this->cityAddressAgency,
            "phoneAgency" => $this->phoneAgency,
            "mailAgency" => $this->mailAgency,
            "statusAgency" => $this->statusAgency
        ];

        if ($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function listAgencies() {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            ORDER BY
            created_at DESC";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }

    public function searchAgency() {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE nameAgency = :nameAgency
        LIMIT 0,1";
        
        $stmt = $this->conn->prepare($query);
        $params = ["nameAgency" => $this->nameAgency];

        if ($stmt->execute($params)) {
            $row = $stmt->fetch();    
            return $row;
        }
        return false;
    }

    public function updateAgency() {
        // On crée la requête
        $query = "
            UPDATE "
            . $this->table .
            " SET
            nameAgency = :nameAgency,
            numberAddressAgency = :numberAddressAgency,
            typeAddressAgency = :typeAddressAgency,
            nameAddressAgency = :nameAddressAgency,
            complementAddressAgency : :complementAddressAgency,
            zipAddressAgency = :zipAddressAgency,
            cityAddressAgency = :cityAddressAgency,
            phoneAgency = :phoneAgency,
            mailAgency = :mailAgency,
            statusAgency = :statusAgency,
            dateAgency = :dateAgency
            WHERE
            id = :id        
        ";

        $stmt = $this->conn->prepare($query);
        $params = [
            "nameAgency" => $this->nameAgency,
            "numberAddressAgency" => $this->numberAddressAgency,
            "typeAddressAgency" => $this->typeAddressAgency,
            "nameAddressAgency" => $this->nameAddressAgency,
            "complementAddressAgency" => $this->complementAddressAgency,
            "zipAddressAgency" => $this->zipAddressAgency,
            "cityAddressAgency" => $this->cityAddressAgency,
            "phoneAgency" => $this->phoneAgency,
            "mailAgency" => $this->mailAgency,
            "statusAgency" => $this->statusAgency,
        ];

        if ($stmt->execute($params)) {
                return true;
            }
        return false;
    }

    public function deleteAgency() {
        $query = "
            DELETE
            FROM " . $this->table .
            " WHERE id = :id
        ";

        $stmt = $this->conn->prepare($query);
        $params = ["id" => $this->id];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }
}