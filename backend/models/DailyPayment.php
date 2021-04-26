<?php
class DailyPayment 
{
    private $conn;
    private $table = "dailyPayments";

    public $idDailyPayment;
    public $idBooking;
    public $statusDailyPayment;
    public $priceDailyPayment;
    public $idPartner;
    public $idCustomer;
    public $dateDailyPayment;
    public $originBooking;
 
    public function __construct($db) 
    {
        $this->conn = $db;
    }

    public function createPayment() 
    {
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            idBooking = :idBooking,
            statusDailyPayment = :statusDailyPayment,
            priceDailyPayment = :priceDailyPayment,
            idPartner = :idPartner,
            idCustomer = :idCustomer,
            originBooking= :originBooking
            ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idBooking" => htmlspecialchars(strip_tags($this->idBooking)),
            "statusDailyPayment" => 'En attente',
            "priceDailyPayment" => htmlspecialchars(strip_tags($this->priceDailyPayment)),
            "idPartner" => htmlspecialchars(strip_tags($this->idPartner)),
            "idCustomer" => htmlspecialchars(strip_tags($this->idCustomer)),
            "originBooking" => htmlspecialchars(strip_tags($this->originBooking))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function listPayments() 
    {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            ORDER BY
            dateDailyPayment ASC";
        $stmt = $this->conn->prepare($query);

        if ($stmt->execute()) {
            return $stmt;
        }
        return false;
    }

    public function listPaymentsByPartner() 
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

    public function listPaymentsByCustomer() 
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

    public function searchPaymentByBooking() 
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

    public function searchPaymentById() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idDailyPayment = :idDailyPayment
        ";
        $stmt = $this->conn->prepare($query);

        $params = ["idDailyPayment" => htmlspecialchars(strip_tags($this->idDailyPayment))];

        if($stmt->execute($params)) {
            $row = $stmt->fetch();    
            return $row;
        }
        return false;
    }

    public function listPaymentsByDay()
    {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            WHERE
            (dateDailyPayment >= :dayStart AND
             dateDailyPayment <= :dayEnd)
            ORDER BY idPartner ASC";
        $stmt = $this->conn->prepare($query);

        $dateDailyPayment = htmlspecialchars(strip_tags($this->dateDailyPayment));

        $params = [
            "dayStart" => $dateDailyPayment ." 00:00:00",
            "dayEnd" => $dateDailyPayment ." 23:59:59"
        ];

        if ($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function listPaymentsByMonth($monthRequired, $yearRequired)
    {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            WHERE
            (dateDailyPayment >= :monthStart AND
             dateDailyPayment <= :monthEnd)
             ORDER BY idPartner ASC";
        $stmt = $this->conn->prepare($query);

        $d = cal_days_in_month(CAL_GREGORIAN, $m, $y);
        $m = htmlspecialchars(strip_tags($monthRequired));
        $y = htmlspecialchars(strip_tags($yearRequired));

        $params = [
            "monthStart" => $y ."-". $m ."-1 00:00:00",
            "monthEnd" => $y ."-". $m ."-". $d ." 23:59:59"
        ];

        if ($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function updatePaymentStatus() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            statusDailyPayment = :statusDailyPayment
            WHERE
            idDailyPayment = :idDailyPayment       
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "statusDailyPayment" => htmlspecialchars(strip_tags($this->statusDailyPayment)),
            "idDailyPayment" => htmlspecialchars(strip_tags($this->idDailyPayment))
        ];

        if($stmt->execute($params)) {
           return true;
        }
        return false;
    }
}