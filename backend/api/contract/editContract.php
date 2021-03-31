<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, Authorization, X-Requested-With");
include_once "../../config/Database.php";
include_once "../../models/Contract.php";

$db = new Database();
$conn = $db->connect();
$contract = new Contract($conn);

$decodedData = json_decode(file_get_contents("php://input"));

if (!empty($decodedData->idTeammateReturn)) {
    $contract->idTeammateReturn = $decodedData->idTeammateReturn;
    $result = $contract->teammateReturn();
} else {
    $contract->idContract = $decodedData->idContract;
    $contract->idCustomer = $decodedData->idCustomer;
    $contract->idPartner = $decodedData->idPartner;
    $contract->idBooking = $decodedData->idBooking;
    $contract->urlContract = $decodedData->urlContract;
    $contract->idCar = $decodedData->idCar;
    $contract->idPickupAddress = $decodedData->idPickupAddress;
    $contract->idReturnAddress = $decodedData->idReturnAddress;
    if (!empty($decodedData->idContract)) {
        $contract->idContract = $decodedData->idContract;
        $result = $contract->updateContract();
    } else {
        $result = $contract->createContract();
    }
}

if ($result) {
    echo json_encode([ "message" => "Le contrat a été édité !" ]);
} else {     
    echo json_encode([ "message" => "Le contrat n'a pas pu être édité..." ]);
}