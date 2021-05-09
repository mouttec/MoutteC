<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/CarProcess.php";

$db = new Database();
$conn = $db->connect();
$carProcess = new carProcess($conn);

// $process->idBooking = $decodedData->idBooking;
// $process->idPartner = $decodedData->idPartner;
// $process->carStatus = $decodedData->carStatus;

$processSteps = [
	['En attente', 'En attente', 'En attente'],
	['Transit vers le Partenaire', 'Véhicule pris en charge par Mouttec' ,'Véhicule pris en charge par Mouttec'],
	['Dépôt du véhicule chez le Partenaire', 'Dépôt du véhicule au garage partenaire', 'Dépôt du véhicule au garage partenaire'],
	['Travaux en cours', 'Véhicule pris en charge par le garage partenaire', 'Véhicule pris en charge par le garage partenaire'],
	['Travaux terminés', 'Paiement en attente', 'Véhicule pris en charge par le garage partenaire'],
	['Véhicule disponible chez le Partenaire', 'Véhicule disponible', 'Véhicule pris en charge par le garage partenaire'],
	['Récupération du véhicule par le driver', 'Récupération du véhicule par Mouttec', 'Récupération du véhicule par Mouttec'],
	['Transit à l\'adresse du client', 'Véhicule pris en charge par Mouttec', 'Retour du véhicule à l\'adresse indiquée'],	
	['Restitution du véhicule au client', 'Véhicule pris en charge par Mouttec', 'Restitution en cours'],
	['Véhicule rendu', 'Véhicule restitué', 'Véhicule restitué']
];

if (isset($_GET['idCar'])) {
    $process->idCar = $_GET['idCar'];
    $carInProcess = $carProcess->searchProcessByIdCar($carProcess);
    $carInProcess->carStatus = $processSteps[$carInProcess->carStatus];
    $result = $carInProcess;
} else { 
	if (isset($_GET['idAgency'])) {
		$carProcess->idAgency = $_GET['idAgency'];
		$carsInProcess = $carProcess->listCarProcessesByAgency($carProcess);
	} else if (isset($_GET['idPartner'])) {
        $carProcess->idPartner = $_GET['idPartner'];
        $carsInProcess = $carProcess->listCarProcessesByPartner($carProcess);
    } else {
    	$carsInProcess = $carProcess->listCarsInProcess();
    }
    $counter = $carsInProcess->rowCount();
    if ($counter > 0) {
        $processes_array = array();
        while ($row = $carsInProcess->fetch()) {
            extract($row);
            $process_item = [
                 "idProcess" => $idProcess,
                 "idCar" => $idCar,
                 "idPartner" => $idPartner,
                 "idBooking" => $idBooking,
                 "idAgency" => $idAgency,
                 "carStatus" => $processSteps[$carStatus]
            ];
            array_push($processes_array, $process_item);
        }
        $result = $processes_array;
    }
}

if ($result) {
    echo json_encode($result);
} else {
	http_response_code(404); 
}