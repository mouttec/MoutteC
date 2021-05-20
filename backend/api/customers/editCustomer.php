<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/Customer.php";

$db = new Database();
$conn = $db->connect();
$customer = new Customer($conn);

$decodedData = json_decode(file_get_contents("php://input"));

$customer->idBillingAddress = $decodedData->idBillingAddress;
$customer->firstNameCustomer = $decodedData->firstNameCustomer;
$customer->lastNameCustomer = $decodedData->lastNameCustomer;
$customer->dateOfBirthdayCustomer = $decodedData->dateOfBirthdayCustomer;
$customer->phoneCustomer = $decodedData->phoneCustomer;
$customer->mailCustomer = $decodedData->mailCustomer;

if (isset($decodedData->idCustomer)) {
    $customer->idCustomer = $decodedData->idCustomer;
	if (isset($decodedData->statusCustomer)) {
		$customer->statusCustomer = $decodedData->statusCustomer;
		$result = $customer->updateStatusCustomer($customer);
	} else if (isset($decodedData->idPartner)) {
		$customer->idPartner = $decodedData->idPartner;
		$result = $customer->bindPartnerToCustomer($customer);
	} else {
	    $result = $customer->updateCustomer($customer);
	}
} else {
	if (isset($decodedData->password)) {
		$customer->mixedPassword = $decodedData->password;
	} else {
	 	$chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
 		$maxLength = strlen($chars);
 		$randomStr = '';
 		for ($i = 0; $i < 30; $i++) {
			$randomStr .= $chars[rand(0, $maxLength - 1)];
 		}
 		$customer->mixedPassword = $randomStr;
 		//Envoi d'un mail au client pour son mot de passe 
 		// $randomStr est une chaîne de caractère aléatoire qui va être utilisée comme mot de passe temporaire, elle sera envoyée en get dans le lien
	}
    $result = $customer->createCustomer($customer);
    if (isset($decodedData->idPartner)) {
    	$customer->idPartner = $decodedData->idPartner;
    	$customer->bindPartnerToCustomer($customer);
    }
}

if ($result) {
    echo json_encode([ "message" => "Le client a été édité..." ]);
} else {
    echo json_encode([ "message" => "Le client n'a pas pu être édité..." ]);
}