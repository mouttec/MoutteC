<?php
class Agency {
    private $conn;
    private $table = "agencies";

    public $idAgency;
    public $nameAgency;
    public $addressAgency;
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
            "nameAgency" => htmlspecialchars(strip_tags($this->nameAgency)),
            "numberAddressAgency" => htmlspecialchars(strip_tags($this->numberAddressAgency)),
            "typeAddressAgency" => htmlspecialchars(strip_tags($this->typeAddressAgency)),
            "nameAddressAgency" => htmlspecialchars(strip_tags($this->nameAddressAgency)),
            "complementAddressAgency" => htmlspecialchars(strip_tags($this->complementAddressAgency)),
            "zipAddressAgency" => htmlspecialchars(strip_tags($this->zipAddressAgency)),
            "cityAddressAgency" => htmlspecialchars(strip_tags($this->cityAddressAgency)),
            "phoneAgency" => htmlspecialchars(strip_tags($this->phoneAgency)),
            "mailAgency" => htmlspecialchars(strip_tags($this->mailAgency)),
            "statusAgency" => htmlspecialchars(strip_tags($this->statusAgency))
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
            dateAgency ASC";
        $stmt = $this->conn->prepare($query);

        if ($stmt->execute()) {
            return $stmt;
        }
        return false;
    }

    public function searchAgency() {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idAgency = :idAgency
        LIMIT 0,1";
        
        $stmt = $this->conn->prepare($query);
        $params = ["idAgency" => htmlspecialchars(strip_tags($this->idAgency))];

        if ($stmt->execute($params)) {
            $row = $stmt->fetch();    
            return $row;
        }
        return false;
    }

    public function updateAgency() {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            nameAgency = :nameAgency,
            addressAgency = :addressAgency,
            phoneAgency = :phoneAgency,
            mailAgency = :mailAgency,
            WHERE
            idAgency = :idAgency
        ";

        $stmt = $this->conn->prepare($query);
        $params = [
            "nameAgency" => htmlspecialchars(strip_tags($this->nameAgency)),
            "addressAgency" => htmlspecialchars(strip_tags($this->addressAgency)),
            "phoneAgency" => htmlspecialchars(strip_tags($this->phoneAgency)),
            "mailAgency" => htmlspecialchars(strip_tags($this->mailAgency)),
            "idAgency" => htmlspecialchars(strip_tags($this->idAgency))
        ];

        if ($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function updateStatusAgency() {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            statusAgency = :statusAgency
            WHERE
            idAgency = :idAgency
        ";

        $stmt = $this->conn->prepare($query);
        $params = [
            "statusAgency" => htmlspecialchars(strip_tags($this->idAgency)),
            "idAgency" => htmlspecialchars(strip_tags($this->idAgency))
        ];

        if ($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function closeAgency() {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            statusAgency = :statusAgency
            WHERE
            idAgency = :idAgency
        ";

        $stmt = $this->conn->prepare($query);
        $params = [
            "statusAgency" => "Fermée",
            "idAgency" => htmlspecialchars(strip_tags($this->idAgency))
        ];

        if ($stmt->execute($params)) {
            return true;
        }
        return false;
    }
}