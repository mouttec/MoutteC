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
include_once "../../models/Partner.php";

$decodedData = json_decode(file_get_contents("php://input"));
$partner = array();
foreach ($decodedData as $key => $value) {
    array_push($partner[$key] = htmlspecialchars(strip_tags($value)));
}

$db = new Database();
$conn = $db->connect();
$partnerRequest = new Partner($conn);

//On regarde quelle action de Read est demandée
switch ($partner['action']) {
    case 'searchPartner':
        $result = $partnerRequest->searchPartner($partner['usernamePartner']);
        break;
    default:
        $result = $partnerRequest->listPartners();
        break;
}

if (isset($result) && !empty($result)) {
 	echo json_encode($result);
} else { 
	http_response_code(404); 
}