<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
include_once("database.php");
include_once "../../models/Partner.php";

$db = new Database();
$conn = $db->connect();
$partner = new Partner($conn);

$decodedData = json_decode(file_get_contents("php://input"));
$partner->usernamePartner = $decodedData->usernamePartner;
$password = htmlspecialchars($decodedData->password);

$partnerExists = $partner->searchPartnerByUsername($partner);

//Si un partner existe avec cet username et que le password matche
if (!empty($partnerExists) && 
	(password_verify($password, $partnerExists['mixedPassword'])) {
		echo json_encode($partnerExists);
} else {
	http_response_code(404);	
}