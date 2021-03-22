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

$decodedData = json_decode(file_get_contents("php://input"));

$agency = array();
foreach ($decodedData as $key => $value) {
    array_push($agency, array($key => htmlspecialchars(strip_tags($value))));
}

$db = new Database();
$conn = $db->connect();
$agencyRequest = new Agency($conn);

//On regarde quelle action de Read est demandée
switch ($agency['action']) {
    case 'searchAgency':
        $result = $agencyRequest->searchAgency($agency['nameAgency']);
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