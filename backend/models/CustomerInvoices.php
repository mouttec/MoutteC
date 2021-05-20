<?php
class CustomerInvoice 
{
    private $conn;
    private $table = "customerInvoices";

    public $idInvoice;
    public $invoiceNumber;
    public $invoiceLines;
    public $amountInvoice;
    public $invoiceDate;
    public $idPartner;
    public $idCustomer;
    public $idBooking;
    public $idContract;
    public $idCar;
 
    public function __construct($db) 
    {
        $this->conn = $db;
    }

    public function createInvoice() 
    {
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            invoiceNumber = :invoiceNumber,
            invoiceLines = :invoiceLines,
            amountInvoice = :amountInvoice
            idPartner = :idPartner,
            idCustomer = :idCustomer,
            idBooking = :idBooking,
            idContract = :idContract,
            idCar = :idCar
            ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "invoiceNumber" => htmlspecialchars(strip_tags($this->invoiceNumber)),
            "invoiceLines" => htmlspecialchars(strip_tags($this->invoiceLines)),
            "amountInvoice" => htmlspecialchars(strip_tags($this->amountInvoice)),
            "idPartner" => htmlspecialchars(strip_tags($this->idPartner)),
            "idCustomer" => htmlspecialchars(strip_tags($this->idCustomer)),
            "idBooking" => htmlspecialchars(strip_tags($this->idBooking)),
            "idContract" => htmlspecialchars(strip_tags($this->idContract))
            "idCar" => htmlspecialchars(strip_tags($this->idCar))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function listCustomerInvoices() 
    {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            ORDER BY
            invoiceDate ASC";
        $stmt = $this->conn->prepare($query);

        if ($stmt->execute()) {
            return $stmt;
        }
        return false;
    }

    public function listCustomerInvoicesByPartner() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idPartner = :idPartner
        ";
        $stmt = $this->conn->prepare($query);

        $params = ["idPartner" => htmlspecialchars(strip_tags($this->idPartner))];

        if($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function listInvoicesByCustomer() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idCustomer = :idCustomer
        ";
        $stmt = $this->conn->prepare($query);

        $params = ["idCustomer" => htmlspecialchars(strip_tags($this->idCustomer))];

        if($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function searchInvoiceByBooking() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idBooking = :idBooking
        ";
        $stmt = $this->conn->prepare($query);

        $params = ["idBooking" => htmlspecialchars(strip_tags($this->idBooking))];

        if($stmt->execute($params)) {
            $row = $stmt->fetch();    
            return $row;
        }
        return false;
    }

    public function searchInvoiceById() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idInvoice = :idInvoice
        ";
        $stmt = $this->conn->prepare($query);

        $params = ["idInvoice" => htmlspecialchars(strip_tags($this->idInvoice))];

        if($stmt->execute($params)) {
            $row = $stmt->fetch();    
            return $row;
        }
        return false;
    }

    public function listInvoicesByDate()
    {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            WHERE
            invoiceDate = :invoiceDate
            ORDER BY invoiceDate ASC";
        $stmt = $this->conn->prepare($query);

        $params = ["invoiceDate" => htmlspecialchars(strip_tags($this->invoiceDate))];

        if ($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }
}