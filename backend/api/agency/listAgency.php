<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/Agency.php";

$db = new Database();
$conn = $db->connect();
$agency = new Agency($conn);

if (isset($_GET['idAgency'])) {
	$agency->idAgency = $_GET['idAgency'];
    $result = $agency->searchAgency($agency);
} else {
    $agencies = $agency->listAgencies();
    $counter = $agencies->rowCount();
    if ($counter > 0) {
    	$agencies_array = array();
    	while ($row = $agencies->fetch()) {
    		extract($row);
    		$agency_item = [
    			"idAgency" => $idAgency,
	            "nameAgency" => $nameAgency,
	            "addressAgency" => $addressAgency,
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