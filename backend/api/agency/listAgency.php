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

if (isset($_GET['idAgency'])) {
	$agency->idAgency = htmlspecialchars(strip_tags($_GET['idAgency']));
    $result = $agency->searchAgency($agency->nameAgency);
} else {
    $result = $agency->listAgencies();
}

if (isset($result) && !empty($result)) {
 	echo json_encode($result);
} else { 
	http_response_code(404); 
}