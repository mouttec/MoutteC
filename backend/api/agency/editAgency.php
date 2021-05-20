<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/Agency.php";

$db = new Database();
$conn = $db->connect();
$agency = new Agency($conn);

$decodedData = json_decode(file_get_contents("php://input"));

$agency->nameAgency = $decodedData->nameAgency;
$agency->addressAgency = $decodedData->addressAgency;
$agency->phoneAgency = $decodedData->phoneAgency;
$agency->mailAgency = $decodedData->mailAgency;

if (!empty($decodedData->idAgency)) {
	$agency->idAgency = $decodedData->idAgency;
	if (!empty($decodedData->statusAgency)) {
		$agency->statusAgency = $decodedData->statusAgency;
		$result = $agency->updateStatusAgency($agency);
	} else {
    	$result = $agency->updateAgency($agency);
	}
} else { 
    $result = $agency->createAgency($agency);
}

if ($result) {
    echo json_encode(["message" => "L'agence a été éditée !"]);
} else {
    echo json_encode(["message" => "L'agence n'a pas pu être éditée..."]);
}