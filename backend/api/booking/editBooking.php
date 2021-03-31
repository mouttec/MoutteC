<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/Booking.php";

$db = new Database();
$conn = $db->connect();
$booking = new Booking($conn);

$decodedData = json_decode(file_get_contents("php://input"));

$booking->idCustomer = $decodedData->idCustomer;
$booking->idPartner = $decodedData->idPartner;
$booking->hoursBooking = $decodedData->hoursBooking;
$booking->dateBooking = $decodedData->dateBooking;
$booking->statusBooking = $decodedData->statusBooking;
$booking->formulaBooking = $decodedData->formulaBooking;
$booking->dateReturn = $decodedData->dateReturn;
$booking->hoursReturn = $decodedData->hoursReturn;
$booking->idCar = $decodedData->idCar;
$booking->idPickupAddress = $decodedData->idPickupAddress;
$booking->idReturnAddress = $decodedData->idReturnAddress;

if (!empty($decodedData->idBooking)) {
    $booking->idBooking = $decodedData->idBooking;
    $result = $booking->updateBooking($booking);
} else {
    $result = $booking->createBooking($booking);
}

if ($result) {
    echo json_encode([ "message" => "La réservation a été éditée !" ]);
} else {     
    echo json_encode([ "message" => "La réservation n'a pas pu être éditée..." ]);
}