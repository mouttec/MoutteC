<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/CarProcess.php";
include_once "../../models/Booking.php"

$db = new Database();
$conn = $db->connect();
$carProcess = new carProcess($conn);

$decodedData = json_decode(file_get_contents("php://input"));

$processList = $carProcess->listCarsInProcess();
//S'il n'y a pas de véhicule pris en charge, on peut initialiser une nouvelle journée
if ($processList->rowCount() == 0) {
	$booking = new Booking($conn);
	$bookings->dateBooking = date("d/m/Y");
	$bookings = $booking->searchBookingsByDay($bookings);
    $counter = $bookings->rowCount();
    if ($counter > 0) {
        while ($row = $bookings->fetch()) {
            extract($row);
            $carProcess->$idBooking = $idBooking;
            $carProcess->idCar = $idCar;
            $carProcess->idPartner = $idPartner;
            $carProcess->processStep = 0;
            $carProcess->createNewCarProcess($carProcess);
		}
	}
	$result = $carProcess->listCarsInProcess();
}	

if ($result) {
    echo json_encode([$result]);
} else {
    echo json_encode([ "message" => "Il y a une erreur (liste des voitures en process non vide ?)" ]);
}