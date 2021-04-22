<?php
class MonthlyBilling {
    private $conn;
    private $table = "monthlyBillings";

    public $idMonthlyPayment;
    public $idPartner;
    public $statusMonthlyPayment;
    public $monthMonthlyPayment;
    public $urlMonthlyPayment;
    public $invoiceAmount;
    public $dateMonthlyPayment;
 
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
            monthMonthlyPayment = :monthMonthlyPayment,
            urlMonthlyPayment = :urlMonthlyPayment,
            invoiceAmount = :invoiceAmount
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idPartner" => htmlspecialchars(strip_tags($this->idPartner)),
            "statusMonthlyPayment" => htmlspecialchars(strip_tags($this->statusMonthlyPayment)),
            "monthMonthlyPayment" => htmlspecialchars(strip_tags($this->monthMonthlyPayment)),
            "urlMonthlyPayment" => htmlspecialchars(strip_tags($this->urlMonthlyPayment)),
            "invoiceAmount" => htmlspecialchars(strip_tags($this->invoiceAmount))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function listMonthlyBills() {
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

    public function listMonthlyBillsByPartner() {
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

    public function listMonthlyBillsByMonth() {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            WHERE monthMonthlyPayment = :monthMonthlyPayment
            ORDER BY
            idPartner ASC";

        $stmt = $this->conn->prepare($query);

        $params = ["monthMonthlyPayment" => htmlspecialchars(strip_tags($this->monthMonthlyPayment))];

        $stmt->execute();
        return $stmt;
    }
    public function searchMonthlyBill() {
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

    public function updateBillStatus() {
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