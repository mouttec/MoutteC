<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/Address.php";

$db = new Database();
$conn = $db->connect();
$address = new Address($conn);

if (isset($_GET['idAddress'])) {
	$address->idAddress = $_GET['idAddress'];
	$result = $address->searchAddress($address);
} else {
    if (isset($_GET['idCustomer'])) {
        $address->idCustomer = $_GET['idCustomer'];
        $addresses = $address->listAddressesByCustomer($address);
    } else if (isset($_GET['idBooking'])) {
    	$address->idBooking = $_GET['idBooking'];
    	$addresses = $address->searchAddressesByBooking($address);
    } else {
        $addresses = $address->listAddresses();
    }
	$counter = $addresses->rowCount();
	if ($counter > 0) {
		$addresses_array = array();
		while($row = $addresses->fetch()) {
			extract($row);
			$address_item = [
	            "idCustomer" => $idCustomer,
	            "addressStreetNumber" => $addressStreetNumber,
	            "addressStreetType" => $addressStreetType,
	            "addressStreetName" => $addressStreetName,
	            "addressStreetComplement" => $addressStreetComplement,
	            "addressZip" => $addressZip,
	            "addressCity" => $addressCity
			];
			array_push($addresses_array, $address_item);
		}
		$result = $addresses_array;
	}
}

if (isset($result) && !empty($result)) {
 	echo json_encode($result);
} else { 
	http_response_code(404); 
}
