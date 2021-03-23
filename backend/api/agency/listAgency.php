<?php
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);
// On envoie les headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
// On inclus les objets (ou classes) nécessaires
include_once "../../config/Database.php";
include_once "../../models/Agency.php";

$db = new Database();
$conn = $db->connect();
$agency = new Agency($conn);

$decodedData = json_decode(file_get_contents("php://input"));
$agency->nameAgency = htmlspecialchars(strip_tags($decodedData->nameAgency));

$action = htmlspecialchars(strip_tags($decodedData->action));

//On regarde quelle action de Read est demandée
switch ($action) {
    case 'searchAgency':
        $result = $agencyRequest->searchAgency($agency->nameAgency);
        break;
    default:
        $result = $agencyRequest->listAgencies();
        break;
}

if (isset($result) && !empty($result)) {
 	echo json_encode($result);
} else { 
	http_response_code(404); 
}