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
        $bookings = $booking->searchBookingByPartner($booking);
    } elseif (isset($_GET['idCustomer'])) {
        $booking->idCustomer = $_GET['idCustomer'];
        $bookings = $booking->searchBookingByCustomer($bookings);
    } elseif (isset($_GET['idAgency'])) {
        $booking->idAgency == $_GET['idAgency'];
        $bookings = $booking->searchBookingByAgency($booking);
    } elseif (isset($_GET['dateBooking'])) {
        $booking->dateBooking == $_GET['dateBooking'];
        $bookings = $booking->searchBookingByDay($booking);
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
                 "hoursBooking" => $hoursBooking,
                 "dateBooking" => $dateBooking,
                 "statusBooking" => $statusBooking,
                 "formulaBooking" => $formulaBooking,
                 "dateReturn" => $dateReturn,
                 "hoursReturn" => $hoursReturn,
                 "idCar" => $idCar,
                 "idPickupAddress" => $idPickupAddress,
                 "idReturnAddress" => $idReturnAddress,
                 "idAgency" => $idAgency
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