<?php
class DailyPayment 
{
    private $conn;
    private $table = "dailyPayments";

    public $idDailyPayment;
    public $idContract;
    public $statusDailyPayment;
    public $priceDailyPayment;
    public $idPartner;
    public $dateDailyPayment;
 
    public function __construct($db) {
        $this->conn = $db;
    }

    public function createPayment() 
    {
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            idContract = :idContract,
            statusDailyPayment = :statusDailyPayment,
            priceDailyPayment = :priceDailyPayment,
            idPartner = :idPartner
            ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idContract" => htmlspecialchars(strip_tags($this->idContract)),
            "statusDailyPayment" => htmlspecialchars(strip_tags($this->statusDailyPayment)),
            "priceDailyPayment" => htmlspecialchars(strip_tags($this->priceDailyPayment)),
            "idPartner" => htmlspecialchars(strip_tags($this->idPartner))
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
            $row = $stmt->fetch();    
            return $row;
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
            $row = $stmt->fetch();    
            return $row;
        }
        return false;
    }

    public function searchPaymentByContract() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idContract = :idContract
        ";
        $stmt = $this->conn->prepare($query);

        $params = ["idContract" => htmlspecialchars(strip_tags($this->idContract))];

        if($stmt->execute($params)) {
            $row = $stmt->fetch();    
            return $row;
        }
        return false;
    }

    public function searchBillingsByMonth($monthRequired, $yearRequired)
    {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            WHERE
            (dateDailyPayment >= :monthStart AND
             dateDailyPayment =< :monthEnd)
             ORDER BY idPartner ASC";
        $stmt = $this->conn->prepare($query);

        $m = htmlspecialchars(strip_tags($monthRequired));
        $y = htmlspecialchars(strip_tags($yearRequired));
        $d = cal_days_in_month(CAL_GREGORIAN, $m, $y);

        $params = [
            "monthStart" => date($y ."-". $m ."-1 00:00:00"),
            "monthEnd" => date($y ."-". $m ."-". $d ." 23:59:59")
        ];

        if ($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    // public function preparePartnerInvoice($monthRequired, $yearRequired, $idPartner) 
    // {
    //     $query = "
    //         SELECT *
    //         FROM "
    //         . $this->table . " 
    //         WHERE
    //         (dateDailyPayment >= :monthStart AND
    //          dateDailyPayment =< :monthEnd AND 
    //          idPartner = :idPartner)
    //          ORDER BY dateDailyPayment ASC";
    //     $stmt = $this->conn->prepare($query);

    //     $m = htmlspecialchars(strip_tags($monthRequired));
    //     $y = htmlspecialchars(strip_tags($yearRequired));
    //     $d = cal_days_in_month(CAL_GREGORIAN, $m, $y);

    //     $params = [
    //         "monthStart" => date($y ."-". $m ."-1 00:00:00"),
    //         "monthEnd" => date($y ."-". $m ."-". $d ." 23:59:59"),
    //         "idPartner" => htmlspecialchars(strip_tags($idPartner))
    //     ];

    //     if ($stmt->execute($params)) {
    //         return $stmt;
    //     }
    //     return false;
    // }

    // public function updateDailyPayment() 
    // {
    //     $query = "
    //         UPDATE "
    //         . $this->table .
    //         " SET
    //         idContract = :idContract,
    //         priceDailyPayment = :priceDailyPayment,
    //         idPartner = :idPartner
    //         WHERE
    //         idDailyPayment = :idDailyPayment       
    //     ";
    //     $stmt = $this->conn->prepare($query);

    //     $params = [
    //         "idContract" => htmlspecialchars(strip_tags($this->idContract)),
    //         "priceDailyPayment" => htmlspecialchars(strip_tags($this->priceDailyPayment)),
    //         "idPartner" => htmlspecialchars(strip_tags($this->idPartner)),
    //         "idDailyPayment" => htmlspecialchars(strip_tags($this->idDailyPayment))
    //     ];

    //     if($stmt->execute($params)) {
    //        return true;
    //     }
    //     return false;
    // }

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

    public function deleteDailyPayment() 
    {
        $query = "
            DELETE
            FROM " . $this->table .
            " WHERE idPaymentOfDay = :idPaymentOfDay
        ";
        $stmt = $this->conn->prepare($query);

        $params = ["idPaymentOfDay" => htmlspecialchars(strip_tags($this->idPaymentOfDay))];

        if($stmt->execute($params)) {
            return true;
        }
        return false;        
    }
}