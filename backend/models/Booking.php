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
    public $distanceForth;
    public $durationForth;
    public $distanceBack;
    public $durationBack;
    public $originBooking;
    public $dateBooking;

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
            hoursBooking = :hoursBooking,
            dateBooking = :dateBooking,
            statusBooking = :statusBooking,
            formulaBooking = :formulaBooking,
            dateReturn = :dateReturn,
            hoursReturn = :hoursReturn,        
            idCar = :idCar,
            idPickupAddress = :idPickupAddress,
            idReturnAddress = :idReturnAddress,
            idAgency = :idAgency,
            distanceForth = :distanceForth,
            durationForth = :durationForth,
            distanceBack = :distanceBack,
            durationBack = :durationBack
            ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idCustomer" => htmlspecialchars(strip_tags($this->idCustomer)),
            "idPartner" => htmlspecialchars(strip_tags($this->idPartner)),
            "hoursBooking" => htmlspecialchars(strip_tags($this->hoursBooking)),
            "dateBooking" => htmlspecialchars(strip_tags($this->dateBooking)),
            "statusBooking" => htmlspecialchars(strip_tags($this->statusBooking)),
            "formulaBooking" => htmlspecialchars(strip_tags($this->formulaBooking)),
            "dateReturn" => htmlspecialchars(strip_tags($this->dateReturn)),
            "hoursReturn" => htmlspecialchars(strip_tags($this->hoursReturn)),
            "idCar" => htmlspecialchars(strip_tags($this->idCar)),
            "idPickupAddress" => htmlspecialchars(strip_tags($this->idPickupAddress)),
            "idReturnAddress" => htmlspecialchars(strip_tags($this->idReturnAddress)),
            "idAgency" => htmlspecialchars(strip_tags($this->idAgency)),
            "distanceForth" => htmlspecialchars(strip_tags($this->distanceForth)),
            "durationForth" => htmlspecialchars(strip_tags($this->durationForth)),
            "distanceBack" => htmlspecialchars(strip_tags($this->distanceBack)),
            "durationBack" => htmlspecialchars(strip_tags($this->durationBack))
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

    public function prepareCalendar() 
    {
        $query = "
            SELECT *
            FROM "
            . $this->table . "
            WHERE (dateBooking >= :startDate AND dateBooking <= :endDate AND idAgency = :idAgency) 
            ORDER BY
            idBooking DESC";
        $stmt = $this->conn->prepare($query);

        $params = [
            "startDate" => date('j/m/Y'),
            "endDate" => date('d/m/Y', strtotime('+60 days')),
            "idAgency" => htmlspecialchars(strip_tags($this->idAgency))
        ];

        if ($stmt->execute($params)) {
            return $stmt;
        }
        return false;
    }

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
        ORDER BY dateBooking";
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
        WHERE dateBooking = :dateBooking
        ORDER BY hoursBooking ASC";
        $stmt = $this->conn->prepare($query);

        $params = ["dateBooking" => htmlspecialchars(strip_tags($this->dateBooking))];

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
            hoursBooking = :hoursBooking,
            dateBooking = :dateBooking,
            formulaBooking = :formulaBooking,
            dateReturn = :dateReturn,
            hoursReturn = :dateReturn,
            idCar = :idCar,
            idPickupAddress = :idPickupAddress,
            idReturnAddress = :idReturnAddress,
            idAgency = :idAgency
            WHERE
            idBooking = :idBooking       
        ";
        $stmt = $this->conn->prepare($query);

        $params = [
            "idPartner" => htmlspecialchars(strip_tags($this->idPartner)),
            "hoursBooking" => htmlspecialchars(strip_tags($this->hoursBooking)),
            "dateBooking" => htmlspecialchars(strip_tags($this->dateBooking)),
            "formulaBooking" => htmlspecialchars(strip_tags($this->formulaBooking)),
            "dateReturn" => htmlspecialchars(strip_tags($this->dateReturn)),
            "hoursReturn" => htmlspecialchars(strip_tags($this->hoursReturn)),
            "idCar" => htmlspecialchars(strip_tags($this->idCar)),
            "idPickupAddress" => htmlspecialchars(strip_tags($this->idPickupAddress)),
            "idReturnAddress" => htmlspecialchars(strip_tags($this->idReturnAddress)),
            "idAgency" => htmlspecialchars(strip_tags($this->idAgency)),
            "idBooking" => htmlspecialchars(strip_tags($this->idBooking))
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