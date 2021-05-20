<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
include_once "../../config/Database.php";
include_once "../../models/Address.php";
include_once "../../models/Booking.php";

$db = new Database();
$conn = $db->connect();
$address = new Address($conn);

if (isset($_GET['idAddress'])) {
	$address->idAddress = $_GET['idAddress'];
	$result = $address->searchAddress($address);
} elseif (isset($_GET['idBooking'])) {
	$booking = new Booking($conn);
	$booking->idBooking = $_GET['idBooking'];
	$thisBooking = $booking->searchBookingById($booking);
	$pickupAddress = $address->searchAddressById($thisBooking->idPickupAddress);
	$returnAddress = $address->searchAddressById($thisBooking->idReturnAddress);
	$result = [$pickupAddress, $returnAddress];
} else {
    if (isset($_GET['idCustomer'])) {
        $address->idCustomer = $_GET['idCustomer'];
        $addresses = $address->listAddressesByCustomer($address);
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
	            "address" => $address,
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
