<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/CarProcess.php";

$db = new Database();
$conn = $db->connect();
$carProcess = new carProcess($conn);

$decodedData = json_decode(file_get_contents("php://input"));

$processList = $carProcess->listCarsInProcess();
$counter = $processList->rowCount();
if ($counter > 0) {
    while ($row = $bookings->fetch()) {
        extract($row);
        if ($processStep == 9) {
            $carProcess->idBooking = $idBooking; 
            $carProcess->deleteCarProcess($carProcess);
        }
	}
}

if ($result) {
    echo json_encode([$result]);
} else {
    echo json_encode([ "message" => "Il y a une erreur (process non terminés ?)" ]);
}