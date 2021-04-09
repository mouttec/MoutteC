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

$contract->idContract = $decodedData->idContract;
$thisContract = $contract->searchContractById($contract);
if(!empty($thisContract->urlDepartureInventory)) {
    //étape de la restitution au client
    $thisContract->urlReturnInventory = $decodedData->urlVideo;
    $result = $thisContract->addReturnInventory($thisContract);
} elseif (!empty($thisContract->urlArrivalInventory)) {
    //étape de la récupération au garage
    $thisContract->idTeammateReturn = $decodedData->idTeammateReturn;
    $thisContract->urlDepartureInventory = $decodedData->urlVideo;
    $result = $thisContract->addDepartureInventory($thisContract);
} elseif (!empty($thisContract->urlPickupInventory)) {
    //étape du dépôt au garage
    $thisContract->urlArrivalInventory = $decodedData->urlVideo;
    $result = $thisContract->addArrivalInventory($thisContract);
}


if ($result) {
    echo json_encode([ "message" => "La vidéo a été ajoutée !" ]);
} else {     
    echo json_encode([ "message" => "La vidéo n'a pas pu être ajoutée..." ]);
}