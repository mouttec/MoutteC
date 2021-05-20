<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/Address.php";

$db = new Database();
$conn = $db->connect();
$address = new Address($conn);

$decodedData = json_decode(file_get_contents("php://input"));

$address->idCustomer = $decodedData->idCustomer;
$address->address = $decodedData->address;


if (!empty($decodedData->idAddress)) {
    $address->idAddress = $decodedData->idAddress;
    $result = $address->updateAddress($address);
} else {
    $result = $address->createAddress($address);
}

if ($result) {
    echo json_encode([
    	"address" => $result, 
		"message" => "L'adresse a été éditée !" 
		]);
} else {
    echo json_encode([ "message" => "L'adresse n'a pas pu être éditée..." ]);
}