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

if ((!empty($decodedData->idTeammateReturn)) && (!empty($decodedData->idContract))) {
    $contract->idContract = $decodedData->idContract;
    $contract->idTeammateReturn = $decodedData->idTeammateReturn;
    $result = $contract->teammateReturn($contract);
} else {
    $contract->idCustomer = $decodedData->idCustomer;
    $contract->idPartner = $decodedData->idPartner;
    $contract->idAgency = $decodedData->idAgency;
    $contract->idBooking = $decodedData->idBooking;
    $contract->urlArrivalInventory = $decodedData->urlArrivalInventory;
    $contract->idCar = $decodedData->idCar;
    $contract->idPickupAddress = $decodedData->idPickupAddress;
    $contract->idReturnAddress = $decodedData->idReturnAddress;
    $contract->idTeammatePickup = $decodedData->idTeammatePickup;
    if (!empty($decodedData->idContract)) {
        $contract->idContract = $decodedData->idContract;
        $result = $contract->updateContract($contract);
    } else {
        $result = $contract->createContract($contract);
    }
}

if ($result) {
    echo json_encode([ "message" => "Le contrat a été édité !" ]);
} else {     
    echo json_encode([ "message" => "Le contrat n'a pas pu être édité..." ]);
}