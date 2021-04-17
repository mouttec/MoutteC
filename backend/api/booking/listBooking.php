<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/Booking.php";

$db = new Database();
$conn = $db->connect();
$booking = new Booking($conn);

if (isset($_GET['idBooking'])) {
    $booking->idBooking = $_GET['idBooking'];
    $result = $booking->searchBookingById();
} else {
    if (isset($_GET['idPartner'])) {
        $booking->idPartner = $_GET['idPartner'];
        $bookings = $booking->searchBookingsByPartner($booking);
    } elseif (isset($_GET['idCustomer'])) {
        $booking->idCustomer = $_GET['idCustomer'];
        $bookings = $booking->searchBookingsByCustomer($bookings);
    } elseif (isset($_GET['idAgency'])) {
        $booking->idAgency = $_GET['idAgency'];
        $bookings = $booking->searchBookingsByAgency($booking);
    } elseif (isset($_GET['dateBooking'])) {
        $booking->dateBooking = $_GET['dateBooking'];
        $bookings = $booking->searchBookingsByDay($booking);
    } else {
        $bookings = $booking->listBookings();
    }
    $counter = $bookings->rowCount();
    if ($counter > 0) {
        $bookings_array = array();
        while ($row = $bookings->fetch()) {
            extract($row);
            $booking_item = [
                 "idBooking" => $idBooking,
                 "idCustomer" => $idCustomer,
                 "idPartner" => $idPartner,
                 "statusBooking" => $statusBooking,
                 "formulaBooking" => $formulaBooking,
                 "idCar" => $idCar,
                 "idAgency" => $idAgency,
                 "dateForth" => $dateForth,
                 "hoursForth" => $hoursForth,
                 "idForthAddress" => $idForthAddress,
                 "distanceForth" => $distanceForth,
                 "durationForth" => $durationForth,
                 "idBackAddress" => $idBackAddress,
                 "dateBack" => $dateBack,
                 "hoursBack" => $hoursBack,
                 "distanceBack" => $distanceBack,
                 "durationBack" => $durationBack,
            ];
            array_push($bookings_array, $booking_item);
        }
        $result = $bookings_array;
    }
}

if (isset($result) && !empty($result)) {
    echo json_encode($result);
} else { 
    http_response_code(404); 
}