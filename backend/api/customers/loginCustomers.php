<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once("database.php");
include_once "../../models/Customer.php";
include_once "../../models/Booking.php";
include_once "../../models/Partner.php";

$db = new Database();
$conn = $db->connect();
$customer = new Customer($conn);

$decodedData = json_decode(file_get_contents("php://input"));

$customer->mailCustomer = $decodedData->mailCustomer;
$proposedPassword = $decodedData->mixedPassword;

$thisCustomer = $customer->searchCustomerByEmail($customer)
if (password_verify($proposedPassword, $thisCustomer->mixedPassword)) {
	$booking = new Booking($conn);
	$bookings = $booking->searchBookingsByCustomer($thisCustomer);
    $counter = $bookings->rowCount();
    if ($counter > 0) {
	    $partner = new Partner($conn);
        $partnersId_array = array();
	    $partners_array = array();
        while (($row = $bookings->fetch()) && (count($partnersId_array) <= 5)) {
            extract($row);
            if (!in_array($idPartner, $partnersId_array)) {
		    	$thisPartner = $partner->searchPartnerById($idPartner);
            	array_push($partnersId_array, $idPartner);
				array_push($partners_array, $thisPartner);
        	}
        }
    }
}
echo json_encode([
	"message" => "Bienvenue ". $thisCustomer->lastNameCustomer ." ". $thisCustomer->firstNameCustomer,
	"customerData" => $thisCustomer,
	"partnersData" => $partners_array
]);
} else {
	http_response_code(404);
}