<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/Partner.php";

$db = new Database();
$conn = $db->connect();
$partner = new Partner($conn);

if (isset($_GET['idPartner'])) {
	$partner->idPartner = $_GET['idPartner'];
    $result = $partner->searchPartnerById($partner);
} else {
	if (isset($_GET['idAgency'])) {
		$partner->idAgency = $_GET['idAgency'];
		$partners = $partner->listPartnersByAgency($partner);
	} else {
	    $partners = $partner->listPartners();		
	}
    $counter = $partners->rowCount();
    if ($counter > 0) {
    	$partners_array = array();
    	while ($row = $partners->fetch()) {
    		extract($row);
    		$partner_item = [
				"idPartner" => $idPartner,
	            "usernamePartner" => $usernamePartner,
	            "namePartner" => $namePartner,
	            "addressPartner" => $addressPartner,
	            "phonePartner" => $phonePartner,
	            "statusPartner" => $statusPartner,
	            "typePartner" => $typePartner,
	            "mailPartner" => $mailPartner,        
	            "nameBilling" => $nameBilling,
	            "siretPartner" => $siretPartner,
	            "addrerssBilling" => $addressBilling,
	            "idAgency" => $idAgency,
	            "typeBilling" => $typeBilling
    		];
    		array_push($partners_array, $partner_item);
    	}
    	$result = $partners_array;
    }
}

if (isset($result) && !empty($result)) {
 	echo json_encode($result);
} else { 
	http_response_code(404); 
}