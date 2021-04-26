<?php
class Booking {

    private $conn;
    private $table = "bookings";

    public $idBooking;
    public $idCustomer;
    public $idPartner;
    public $hoursForth;
    public $dateForth;
    public $statusBooking;
    public $formulaBooking;
    public $dateBack;
    public $hoursBack;
    public $idCar;
    public $idForthAddress;
    public $idBackAddress;
    public $idAgency;
    public $originBooking;

    public function __construct($db) 
    {
        $this->conn = $db;
    }

    public function createBooking() 
    {
        $query = "
            INSERT INTO "
            . $this->table .
            " SET
            idCustomer = :idCustomer,
            idPartner = :idPartner,
            hoursForth = :hoursForth,
            dateForth = :dateForth,
            statusBooking = :statusBooking,
            formulaBooking = :formulaBooking,
            dateBack = :dateBack,
            hoursBack = :hoursBack,        
            idCar = :idCar,
            idForthAddress = :idForthAddress,
            idBackAddress = :idBackAddress,
            idAgency = :idAgency,
            distanceForth = :distanceForth,
            durationForth = :durationForth,
            distanceBack = :distanceBack,
            durationBack = :durationBack,
            originBooking = :originBooking
            ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idCustomer" => htmlspecialchars(strip_tags($this->idCustomer)),
            "idPartner" => htmlspecialchars(strip_tags($this->idPartner)),
            "hoursForth" => htmlspecialchars(strip_tags($this->hoursForth)),
            "dateForth" => htmlspecialchars(strip_tags($this->dateForth)),
            // "statusBooking" => htmlspecialchars(strip_tags($this->statusBooking)),
            "statusBooking" => "Validée",
            "formulaBooking" => htmlspecialchars(strip_tags($this->formulaBooking)),
            "dateBack" => htmlspecialchars(strip_tags($this->dateBack)),
            "hoursBack" => htmlspecialchars(strip_tags($this->hoursBack)),
            "idCar" => htmlspecialchars(strip_tags($this->idCar)),
            "idForthAddress" => htmlspecialchars(strip_tags($this->idForthAddress)),
            "idBackAddress" => htmlspecialchars(strip_tags($this->idBackAddress)),
            "idAgency" => htmlspecialchars(strip_tags($this->idAgency)),
            "distanceForth" => htmlspecialchars(strip_tags($this->distanceForth)),
            "durationForth" => htmlspecialchars(strip_tags($this->durationForth)),
            "distanceBack" => htmlspecialchars(strip_tags($this->distanceBack)),
            "durationBack" => htmlspecialchars(strip_tags($this->durationBack)),
            "originBooking" => htmlspecialchars(strip_tags($this->originBooking))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function listBookings() 
    {
        $query = "
            SELECT *
            FROM "
            . $this->table . " 
            ORDER BY
            idBooking DESC";
        $stmt = $this->conn->prepare($query);

        $stmt->execute();
        return $stmt;
    }

    // public function prepareCalendar() 
    // {
    //     $query = "
    //         SELECT *
    //         FROM "
    //         . $this->table . "
    //         WHERE ((dateForth >= :startDate AND dateForth <= :endDate) OR (dateBack >= :startDate AND dateBack <= :endDate))";
    //     $stmt = $this->conn->prepare($query);

    //     $params = [
    //         "startDate" => date('d/m/Y'),
    //         "endDate" => date('d/m/Y', strtotime('+60 days'))
    //     ];

    //     if ($stmt->execute($params)) {
    //         return $stmt;
    //     }
    //     return false;
    // }

    public function searchBookingById() 
    {
        $query = "
        SELECT *
        FROM "
        . $this->table . " 
        WHERE idBooking = :idBooking";
        $stmt = $this->conn->prepare($query);

        $params = ["idBooking" => htmlspecialchars(strip_tags($this->idBooking))];

        if($stmt->execute($params)) {
            $row = $stmt->fetch();
            return $row;
        }
        return false;
    }

    public function searchBookingsByPartner() 
    {
        $query = "
        SELECT *
        FROM bookings
        WHERE idPartner = :idPartner";
        $stmt = $this->conn->prepare($query);

        $params = ["idPartner" => htmlspecialchars(strip_tags($this->idPartner))];

        if($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function searchBookingsByCustomer() 
    {
        $query = "
        SELECT *
        FROM bookings
        WHERE idCustomer = :idCustomer
        ORDER BY dateForth";
        $stmt = $this->conn->prepare($query);

        $params = ["idCustomer" => htmlspecialchars(strip_tags($this->idCustomer))];

        if($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function searchBookingsByAgency() 
    {
        $query = "
        SELECT *
        FROM bookings
        WHERE idAgency = :idAgency";
        $stmt = $this->conn->prepare($query);

        $params = ["idAgency" => htmlspecialchars(strip_tags($this->idAgency))];

        if($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

    public function searchBookingsByDay() 
    {
        $query = "
        SELECT *
        FROM bookings
        WHERE dateForth = :dateForth
        ORDER BY hoursForth ASC";
        $stmt = $this->conn->prepare($query);

        $params = ["dateForth" => htmlspecialchars(strip_tags($this->dateForth))];

        if($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }
 
    public function updateBooking() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            idPartner = :idPartner,
            hoursForth = :hoursForth,
            dateForth = :dateForth,
            formulaBooking = :formulaBooking,
            dateBack = :dateBack,
            hoursBack = :dateBack,
            idCar = :idCar,
            idForthAddress = :idForthAddress,
            idBackAddress = :idBackAddress,
            idAgency = :idAgency,
            originBooking = :originBooking
            WHERE
            idBooking = :idBooking       
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idPartner" => htmlspecialchars(strip_tags($this->idPartner)),
            "hoursForth" => htmlspecialchars(strip_tags($this->hoursForth)),
            "dateForth" => htmlspecialchars(strip_tags($this->dateForth)),
            "formulaBooking" => htmlspecialchars(strip_tags($this->formulaBooking)),
            "dateBack" => htmlspecialchars(strip_tags($this->dateBack)),
            "hoursBack" => htmlspecialchars(strip_tags($this->hoursBack)),
            "idCar" => htmlspecialchars(strip_tags($this->idCar)),
            "idForthAddress" => htmlspecialchars(strip_tags($this->idForthAddress)),
            "idBackAddress" => htmlspecialchars(strip_tags($this->idBackAddress)),
            "idAgency" => htmlspecialchars(strip_tags($this->idAgency)),
            "idBooking" => htmlspecialchars(strip_tags($this->idBooking)),
            "originBooking" => htmlspecialchars(strip_tags($this->originBooking))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;
    }

    public function updateBookingStatus() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            statusBooking = :statusBooking,
            WHERE
            idBooking = :idBooking       
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "statusBooking" => htmlspecialchars(strip_tags($this->statusBooking)),
            "idBooking" => htmlspecialchars(strip_tags($this->idBooking))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false;        
    }

    public function cancelBooking() 
    {
        $query = "
            UPDATE "
            . $this->table .
            " SET
            statusBooking = :statusBooking,
            WHERE
            idBooking = :idBooking       
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "statusBooking" => 'cancelled',
            "idBooking" => htmlspecialchars(strip_tags($this->idBooking))
        ];

        if($stmt->execute($params)) {
            return true;
        }
        return false; 
    }
}