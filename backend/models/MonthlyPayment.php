<?php
class MonthlyPayment {
    private $conn;
    private $table = "monthlyPayment";

    public $idMonthlyPayment;
    public $idPartner;
    public $statusMonthlyPayment;
    public $invoiceNumber;
    public $invoiceAmount;
    public $invoiceLines;
    public $dateMonthlyPayment;
    public $partnerKey;
 
    public function __construct($db) {
        $this->conn = $db;
    }

    public function createMonthlyPayment() {
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            idPartner = :idPartner,
            statusMonthlyPayment = :statusMonthlyPayment,
            invoiceNumber = :invoiceNumber,
            invoiceAmount = :invoiceAmount,
            invoiceLines = :invoiceLines,
            dateMonthlyPayment = :dateMonthlyPayment,
            partnerKey = :partnerKey
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idPartner" => htmlspecialchars(strip_tags($this->idPartner)),
            "statusMonthlyPayment" => htmlspecialchars(strip_tags($this->statusMonthlyPayment)),
            "invoiceNumber" => htmlspecialchars(strip_tags($this->invoiceNumber)),
            "invoiceAmount" => htmlspecialchars(strip_tags($this->invoiceAmount)),
            "invoiceLines" => htmlspecialchars(strip_tags($this->invoiceLines)),
            "dateMonthlyPayment" => htmlspecialchars(strip_tags($this->dateMonthlyPayment)),
            "partnerKey" => htmlspecialchars(strip_tags($this->partnerKey))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function listMonthlyPayments() {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            ORDER BY
            dateMonthlyPayment DESC";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();
        return $stmt;
    }

    public function listMonthlyPaymentsByPartner() {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            WHERE idPartner = :idPartner
            ORDER BY
            dateMonthlyPayment DESC";

        $stmt = $this->conn->prepare($query);

        $params = ["idPartner" => htmlspecialchars(strip_tags($this->idPartner))];

        $stmt->execute();
        return $stmt;
    }

    public function listMonthlyPaymentsByDate() {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            WHERE dateMonthlyPayment = :dateMonthlyPayment
            ORDER BY
            idPartner ASC";

        $stmt = $this->conn->prepare($query);

        $params = ["dateMonthlyPayment" => htmlspecialchars(strip_tags($this->dateMonthlyPayment))];

        $stmt->execute();
        re
        turn $stmt;
    }

    public function searchMonthlyPaymentById() {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            WHERE idMonthlyPayment = :idMonthlyPayment";
        $stmt = $this->conn->prepare($query);

        $params = ["idMonthlyPayment" => htmlspecialchars(strip_tags($this->idMonthlyPayment))];

        if($stmt->execute($params)) {
            $row = $stmt->fetch();
            return $row;
        }
        return false;
    }

    public function searchMonthlyPaymentByInvoiceNumber() {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            WHERE invoiceNumber = :invoiceNumber";
        $stmt = $this->conn->prepare($query);

        $params = ["invoiceNumber" => htmlspecialchars(strip_tags($this->invoiceNumber))];

        if($stmt->execute($params)) {
            $row = $stmt->fetch();
            return $row;
        }
        return false;
    }

    public function updatePaymentStatus() {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            statusMonthlyPayment = :statusMonthlyPayment,
            WHERE
            idMonthlyPayment = :idMonthlyPayment       
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "statusMonthlyPayment" => htmlspecialchars(strip_tags($this->statusMonthlyPayment)),
            "idMonthlyPayment" => htmlspecialchars(strip_tags($this->idMonthlyPayment))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }
}