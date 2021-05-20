<?php
class Customer {
    private $conn;
    private $table = "customers";

    public $idCustomer;
    public $idBillingAddress;
    public $firstNameCustomer;
    public $lastNameCustomer;
    public $dateOfBirthdayCustomer;
    public $phoneCustomer;
    public $mailCustomer;
    public $statusCustomer;
    public $mixedPassword;
    public $idPartner;
    public $dateCustomer;

    public function __construct($db) 
    {
        $this->conn = $db;
    }

    public function createCustomer() 
    {
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            idBillingAddress = :idBillingAddress,
            firstNameCustomer = :firstNameCustomer,
            lastNameCustomer = :lastNameCustomer,
            dateOfBirthdayCustomer = :dateOfBirthdayCustomer,
            phoneCustomer = :phoneCustomer, 
            mailCustomer = :mailCustomer,
            statusCustomer = :statusCustomer,
            mixedPassword = :mixedPassword
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idBillingAddress" => htmlspecialchars(strip_tags($this->idBillingAddress)),
            "firstNameCustomer" => htmlspecialchars(strip_tags($this->firstNameCustomer)),
            "lastNameCustomer" => htmlspecialchars(strip_tags($this->lastNameCustomer)),
            "dateOfBirthdayCustomer" => htmlspecialchars(strip_tags($this->dateOfBirthdayCustomer)),
            "phoneCustomer" => htmlspecialchars(strip_tags($this->phoneCustomer)),
            "mailCustomer" => htmlspecialchars(strip_tags($this->mailCustomer)),
            "statusCustomer" => "Actif",
            "mixedPassword" => password_hash($this->mixedPassword, PASSWORD_DEFAULT)
        ];

        if ($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function listCustomers() 
    {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            ORDER BY
            idCustomer ASC";
        $stmt = $this->conn->prepare($query);

        if ($stmt->execute()) {
            return $stmt;
        }
        return false;
    }

    public function searchCustomersByPartner() 
    {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            WHERE idPartner = :idPartner";
        $stmt = $this->conn->prepare($query);

        $params = ["idPartner" => $this->idPartner];

        if($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function searchCustomerByEmail() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE mailCustomer = :mailCustomer
        LIMIT 0,1";
        $stmt = $this->conn->prepare($query);

        $params = ["mailCustomer" => htmlspecialchars(strip_tags($this->mailCustomer))];

        if($stmt->execute($params)) {
            $row = $stmt->fetch();
            return $row;
        }
        return false;
    }

    public function searchCustomerById() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idCustomer = :idCustomer
        LIMIT 0,1";
        $stmt = $this->conn->prepare($query);

        $params = ["idCustomer" => htmlspecialchars(strip_tags($this->idCustomer))];

        if($stmt->execute($params)) {
            $row = $stmt->fetch();
            return $row;
        }
        return false;
    }

    public function searchCustomerByNames() 
    {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            WHERE (lastNameCustomer = :lastNameCustomer AND firstNameCustomer = :firstNameCustomer)";
        $stmt = $this->conn->prepare($query);

        $params = [
            "lastNameCustomer" => htmlspecialchars(strip_tags($this->lastNameCustomer)),
            "firstNameCustomer" => htmlspecialchars(strip_tags($this->firstNameCustomer))
        ];

        if ($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function updateCustomer() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            idBillingAddress = :idBillingAddress,
            firstNameCustomer = :firstNameCustomer,
            lastNameCustomer = :lastNameCustomer,
            dateOfBirthdayCustomer = :dateOfBirthdayCustomer,
            phoneCustomer = :phoneCustomer,
            mailCustomer = :mailCustomer
            WHERE
            idCustomer = :idCustomer       
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idBillingAddress" => htmlspecialchars(strip_tags($this->idBillingAddress)),
            "firstNameCustomer" => htmlspecialchars(strip_tags($this->firstNameCustomer)),
            "lastNameCustomer" => htmlspecialchars(strip_tags($this->lastNameCustomer)),
            "dateOfBirthdayCustomer" => htmlspecialchars(strip_tags($this->dateOfBirthdayCustomer)),
            "phoneCustomer" => htmlspecialchars(strip_tags($this->phoneCustomer)),
            "mailCustomer" => htmlspecialchars(strip_tags($this->mailCustomer)),
            "idCustomer" => htmlspecialchars(strip_tags($this->idCustomer))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function updateStatusCustomer() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            statusCustomer = :statusCustomer
            WHERE
            idCustomer = :idCustomer       
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "statusCustomer" => htmlspecialchars(strip_tags($this->statusCustomer)),
            "idCustomer" => htmlspecialchars(strip_tags($this->idCustomer))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function bindPartnerToCustomer() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            idPartner = :idPartner
            WHERE
            idCustomer = :idCustomer       
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idPartner" => htmlspecialchars(strip_tags($this->idPartner)),
            "idCustomer" => htmlspecialchars(strip_tags($this->idCustomer))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function updatePasswordCustomer() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            mixedPassword = :mixedPassword
            WHERE
            idCustomer = :idCustomer       
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "mixedPassword" => password_hash($this->mixedPassword, PASSWORD_DEFAULT),
            "idCustomer" => htmlspecialchars(strip_tags($this->idCustomer))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function deactivateCustomer() 
    {
       $query = "
            UPDATE "
            . $this->table .
            " SET
            statusCustomer = :statusCustomer
            WHERE
            idCustomer = :idCustomer       
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "statusCustomer" => "Inactif",
            "idCustomer" => htmlspecialchars(strip_tags($this->idCustomer))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }
}