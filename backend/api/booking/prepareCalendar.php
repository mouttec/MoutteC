<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/Booking.php";

$db = new Database();
$conn = $db->connect();
$booking = new Booking($conn);

$booking->idAgency = $_GET['idAgency'];
$bookings = $booking->prepareCalendar($booking);
$counter = $bookings->rowCount();
if ($counter > 0) {
    $bookings_array = array();
    while ($row = $bookings->fetch()) {
        extract($row);
        $booking_item = [
            "hoursBooking" => $hoursBooking,
            "dateBooking" => $dateBooking,
            "dateReturn" => $dateReturn,
            "hoursReturn" => $hoursReturn
        ];
        array_push($bookings_array, $booking_item);
    }
    $result = $bookings_array;
}

if (isset($result) && !empty($result)) {
    echo json_encode($result);
} else { 
    http_response_code(404); 
}