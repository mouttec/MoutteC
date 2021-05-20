<?php
class technicalControlInvoice 
{
    private $conn;
    private $table = "technicalControlInvoices";

    public $idTechnicalControlInvoices;
    public $idPartner;
    public $monthlyInvoice;
    public $urlInvoice;
    public $priceInvoice;

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
            idTechnicalControlInvoices = :idTechnicalControlInvoices,
            idPartner = :idPartner,
            monthlyInvoice = :monthlyInvoice,
            urlInvoice = :modelCar,
            priceInvoice = :priceInvoice
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idTechnicalControlInvoices" => htmlspecialchars(strip_tags($this->idCustomer)),
            "idPartner" => htmlspecialchars(strip_tags($this->licensePlateCar)),
            "monthlyInvoice" => htmlspecialchars(strip_tags($this->brandCar)),
            "urlInvoice" => "adresseServeur/technicalControlInvoice" . htmlspecialchars(strip_tags($this->urlInvoice)),
            "priceInvoice" => htmlspecialchars(strip_tags($this->dateOfCirculationCar))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function listInvoices() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table;
        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

    public function searchInvoicesByPartner() 
    {
        $query = "
            SELECT *
            FROM " . $this->table . "
            WHERE idPartner = :idPartner";
        $stmt = $this->conn->prepare($query);

        $params = ["idPartner" => htmlspecialchars(strip_tags($this->idCustomer))];

        if($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function searchInvoiceById() 
    {
        $query = "
            SELECT *
            FROM " . $this->table . "
            WHERE idTechnicalControlInvoices = :idTechnicalControlInvoices";
        $stmt = $this->conn->prepare($query);

        $params = ["idTechnicalControlInvoices" => htmlspecialchars(strip_tags($this->idTechnicalControlInvoices))];

        if($stmt->execute($params)) {
            $row = $stmt->fetch();
            return $row;
        }
        return false;
    }

    public function updateInvoices() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            idPartner = :idPartner,
            monthlyInvoice = :monthlyInvoice,
            urlInvoice = :modelCar,
            priceInvoice = :priceInvoice
            WHERE
            idTechnicalControlInvoices = :idTechnicalControlInvoices  
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idTechnicalControlInvoices" => htmlspecialchars(strip_tags($this->idCustomer)),
            "idPartner" => htmlspecialchars(strip_tags($this->licensePlateCar)),
            "monthlyInvoice" => htmlspecialchars(strip_tags($this->brandCar)),
            "urlInvoice" => "adresseServeur/technicalControlInvoice" . htmlspecialchars(strip_tags($this->urlInvoice)),
            "priceInvoice" => htmlspecialchars(strip_tags($this->dateOfCirculationCar))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }  
}