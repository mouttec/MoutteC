<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/Booking.php";

$db = new Database();
$conn = $db->connect();
$booking = new Booking($conn);

$booking->idBooking = $_GET['idBooking'];
$result = $booking->cancelBooking($booking);

if ($result) {
    echo json_encode(["message" => "La réservation a été effacée !"]);
} else {
    echo json_encode(["message" => "La réservation n'a pas pu être effacée..."]);
}
