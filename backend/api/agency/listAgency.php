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
    $result = $agency->searchAgency();
} else {
    $agencies = $agency->listAgencies();
    $counter = $agencies->rowCount();
    if ($counter < 0) {
    	$agencies_array = array();
    	while ($row = $agencies->fetch()) {
    		extract($row);
    		$agency_item = [
    			"idAgency" => $idAgency,
	            "nameAgency" => $nameAgency,
	            "numberAddressAgency" => $numberAddressAgency,
	            "typeAddressAgency" => $typeAddressAgency,
	            "nameAddressAgency" => $nameAddressAgency,
	            "complementAddressAgency" => $complementAddressAgency,
	            "zipAddressAgency" => $zipAddressAgency,
	            "cityAddressAgency" => $cityAddressAgency,
	            "phoneAgency" => $phoneAgency,
	            "mailAgency" => $mailAgency,
	            "statusAgency" => $statusAgency
    		];
    		array_push($agencies_array, $agency_item);
    	}
    	$result = $agencies_array;
    }
}

if (isset($result) && !empty($result)) {
 	echo json_encode($result);
} else { 
	http_response_code(404); 
}