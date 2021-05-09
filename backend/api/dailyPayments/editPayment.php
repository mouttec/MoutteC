<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/DailyPayment.php";
include_once "../../models/Booking.php";

$db = new Database();
$conn = $db->connect();
$dailyPayment = new DailyPayment($conn);

$decodedData = json_decode(file_get_contents("php://input"));

$booking = new Booking($conn);
$thisBooking = $booking->searchBookingById($booking);

$dailyPayment->idContract = $decodedData->idContract;
$dailyPayment->idBooking = $decodedData->idBooking;
$dailyPayment->priceDailyPayment = $decodedData->priceDailyPayment;
$dailyPayment->idPartner = $decodedData->idPartner;
$dailyPayment->idCustomer = $decodedData->idCustomer;
$dailyPayment->originBooking = $thisBooking->originBooking;

if ((isset($decodedData->statusDailyPayment)) && (isset($decodedData->idDailyPayment))) {
	$dailyPayment->statusDailyPayment = $decodedData->statusDailyPayment;
	$dailyPayment->idDailyPayment = $decodedData->idDailyPayment;	
	$result = $dailyPayment->updatePaymentStatus($dailyPayment);
} else {
	$dailyPayment->statusDailyPayment = $decodedData->statusDailyPayment;
	$result = $dailyPayment->createPayment($dailyPayment);
}

if ($result) {
    echo json_encode([ "message" => "La facture a été éditée !" ]);
} else {
    echo json_encode([ "message" => "La facture n'a pas pu être éditée..." ]);
}