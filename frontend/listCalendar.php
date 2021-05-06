<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/Calendar.php";

$db = new Database();
$conn = $db->connect();
$booking = new Calendar($conn);

if (isset($_GET['idBooking'])) {
    $booking->idBooking = $_GET['idBooking'];
    $result = $booking->searchBookingById();
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
                 "day" => $day,
                 "hours" => $hours,
                 "statusCalendar" => $statusCalendar,
                 "statusBooking" => $statusBooking,
                 "statusCar" => $statusCar,
                 "firstNameCustomer" => $firstNameCustomer,
                 "lastNameCustomer" => $lastNameCustomer,
                 "phoneCustomer" => $phoneCustomer,
                 "mailCustomer" => $mailCustomer,
                 "dateOfBirthdayCustomer" => $dateOfBirthdayCustomer,
                 "licensePlateCar" => $licensePlateCar,
                 "brandCar" => $brandCar,
                 "modelCar" => $modelCar,
                 "motorizationCar" => $motorizationCar,
                 "dateOfCirculation" => $dateOfCirculation,
                 "addressForth" => $addresForth,
                 "addressBack" => $addressBack,
                 "namePartner" => $namePartner,
                 "formulaBooking" => $formulaBooking
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