<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/Partner.php";

$db = new Database();
$conn = $db->connect();
$partner = new Partner($conn);

$decodedData = json_decode(file_get_contents("php://input"));

$partner->namePartner = $decodedData->namePartner;
$partner->numberAddressPartner = $decodedData->numberAddressPartner;
$partner->typeAddressPartner = $decodedData->typeAddressPartner;
$partner->nameAddressPartner = $decodedData->nameAddressPartner;
$partner->complementAddressPartner = $decodedData->complementAddressPartner;
$partner->zipAddressPartner = $decodedData->zipAddressPartner;
$partner->cityAddressPartner = $decodedData->cityAddressPartner;
$partner->phonePartner = $decodedData->phonePartner;
$partner->typePartner = $decodedData->typePartner;
$partner->mailPartner = $decodedData->mailPartner;
$partner->nameBilling = $decodedData->nameBilling;
$partner->siretPartner = $decodedData->siretPartner;
$partner->numberAddressBilling = $decodedData->numberAddressBilling;
$partner->typeAddressBilling = $decodedData->typeAddressBilling;
$partner->nameAddressBilling = $decodedData->nameAddressBilling;
$partner->complementAddressBilling = $decodedData->complementAddressBilling;
$partner->zipAddressBilling = $decodedData->zipAddressBilling;
$partner->cityAddressBilling = $decodedData->cityAddressBilling;
$partner->idAgency = $decodedData->idAgency;

if (isset($decodedData->usernamePartner)) {
	$partner->usernamePartner = $decodedData->usernamePartner;
	if (isset($decodedData->statusPartner)) {
		$partner->statusPartner = $decodedData->statusPartner;
		$result = $partner->activatePartner($partner);
	} else {
    	$result = $partner->updatePartner($partner);
	}
} else {
	if (isset($decodedData->password)) {
		$partner->mixedPassword = $decodedData->password;
	    $result = $partner->createPartner($partner);
	}
}

if ($result) {
    echo json_encode([ "message" => "Le Partner a été édité !" ]);
} else {
    echo json_encode([ "message" => "Le Partner n'a pas pu être édité..." ]);
}